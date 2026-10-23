import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { projects } from '../data/portfolioData';
import { playClickSound, playHoverSound, playModalSound } from '../utils/audio';
import { RotateCw, Pause, Play, Sparkles, Filter, Eye, Layers } from 'lucide-react';

export default function ThreeGalaxyNavigator({ onSelectProject }) {
  const mountRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [orbitSpeed, setOrbitSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const nodesRef = useRef([]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || 450;

    // Three.js Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Perspective Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 3.2, 7.8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0x00f59b, 2.5, 20);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Central Quantum Core Node (Ale Sathwik Core)
    const coreGeo = new THREE.IcosahedronGeometry(0.75, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f59b,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Core Outer Shield
    const shieldGeo = new THREE.SphereGeometry(1.05, 16, 16);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    scene.add(shieldMesh);

    // Category Color Maps
    const catColors = {
      'Cloud & AI': 0x00f59b,       // Mint
      'Full Stack': 0x00f2fe,       // Cyan
      'Security & Systems': 0xa855f7, // Amethyst
      'Mobile': 0xffd166,           // Amber
    };

    // Build 8 Orbiting Satellite Project Nodes
    const nodes = [];
    const radiusStep = 0.32;
    const baseRadius = 2.0;

    projects.forEach((proj, idx) => {
      const radius = baseRadius + idx * radiusStep;
      const angle = (idx / projects.length) * Math.PI * 2;
      const speed = 0.003 + (idx % 3) * 0.0015;

      // Orbit Path Ring
      const ringGeo = new THREE.RingGeometry(radius - 0.015, radius + 0.015, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: catColors[proj.category] || 0x00f59b,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.18,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      scene.add(ringMesh);

      // Node Mesh (Octahedron / Sphere)
      const nodeGeo = new THREE.OctahedronGeometry(0.24, 1);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: catColors[proj.category] || 0x00f59b,
        emissive: catColors[proj.category] || 0x00f59b,
        emissiveIntensity: 0.6,
        roughness: 0.2,
        metalness: 0.8,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);

      // Position along orbit
      nodeMesh.position.x = Math.cos(angle) * radius;
      nodeMesh.position.z = Math.sin(angle) * radius;
      nodeMesh.position.y = (Math.sin(idx * 1.5) * 0.4);

      // Attach metadata for raycaster
      nodeMesh.userData = {
        project: proj,
        radius,
        angle,
        speed,
        baseY: nodeMesh.position.y,
        ringMesh,
        originalScale: 1,
      };

      scene.add(nodeMesh);
      nodes.push(nodeMesh);
    });

    nodesRef.current = nodes;

    // Surrounding Particle Dust Field
    const starCount = 350;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      starPos[i] = (Math.random() - 0.5) * 22;
      starPos[i + 1] = (Math.random() - 0.5) * 16;
      starPos[i + 2] = (Math.random() - 0.5) * 20;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x86a793,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Mouse Interaction (Orbit Drag & Raycasting)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let sceneRotationY = 0;
    let sceneRotationX = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / height) * 2 - 1);
      mouse.x = x;
      mouse.y = y;

      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        sceneRotationY += deltaX * 0.005;
        sceneRotationX = Math.max(-0.5, Math.min(0.8, sceneRotationX + deltaY * 0.005));
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }

      // Raycast for hover
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodesRef.current);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (!hoveredNode || hoveredNode.id !== hit.userData.project.id) {
          setHoveredNode(hit.userData.project);
          playHoverSound();
          hit.scale.set(1.5, 1.5, 1.5);
        }
      } else {
        if (hoveredNode) {
          nodesRef.current.forEach((n) => n.scale.set(1, 1, 1));
          setHoveredNode(null);
        }
      }
    };

    const onClick = (e) => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodesRef.current);
      if (intersects.length > 0) {
        const proj = intersects[0].object.userData.project;
        playModalSound();
        if (onSelectProject) {
          onSelectProject(proj);
        }
      }
    };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    mount.addEventListener('mousemove', onMouseMove);
    mount.addEventListener('click', onClick);

    // Resize handler
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Spin central core
      coreMesh.rotation.y += 0.01;
      coreMesh.rotation.x += 0.005;
      shieldMesh.rotation.y -= 0.008;

      // Rotate whole universe based on user drag
      scene.rotation.y = sceneRotationY;
      scene.rotation.x = sceneRotationX;

      // Orbit satellites around nucleus
      if (!isPaused) {
        nodesRef.current.forEach((node) => {
          node.userData.angle += node.userData.speed * orbitSpeed;
          node.position.x = Math.cos(node.userData.angle) * node.userData.radius;
          node.position.z = Math.sin(node.userData.angle) * node.userData.radius;
          node.position.y = node.userData.baseY + Math.sin(node.userData.angle * 2) * 0.12;

          // Spin node on its own axis
          node.rotation.y += 0.02;
          node.rotation.x += 0.01;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mouseup', onMouseUp);
      if (mount) {
        mount.removeEventListener('mousedown', onMouseDown);
        mount.removeEventListener('mousemove', onMouseMove);
        mount.removeEventListener('click', onClick);
        if (renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      shieldGeo.dispose();
      shieldMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, [isPaused, orbitSpeed]);

  const togglePause = () => {
    playClickSound();
    setIsPaused(!isPaused);
  };

  const cycleFilter = (filterName) => {
    playClickSound();
    setActiveFilter(filterName);
    nodesRef.current.forEach((node) => {
      const match = filterName === 'All' || node.userData.project.category === filterName;
      node.visible = match;
      node.userData.ringMesh.visible = match;
    });
  };

  return (
    <div className="galaxy-container">
      <div ref={mountRef} className="galaxy-canvas-mount" />

      {/* Floating 3D Hover Tooltip */}
      {hoveredNode && (
        <div
          className="galaxy-node-tooltip"
          style={{
            left: `${Math.min(window.innerWidth - 320, Math.max(20, tooltipPos.x + 15))}px`,
            top: `${Math.max(20, tooltipPos.y - 85)}px`,
          }}
        >
          <div className="tooltip-top">
            <span className="tooltip-cat">{hoveredNode.category}</span>
            <span className="tooltip-badge">CLICK TO INSPECT</span>
          </div>
          <div className="tooltip-title">{hoveredNode.title}</div>
          <div className="tooltip-subtitle">{hoveredNode.subtitle}</div>
          <div className="tooltip-tech">
            {hoveredNode.techStack.slice(0, 3).map((t, idx) => (
              <span key={idx} className="tooltip-chip">{t.name}</span>
            ))}
          </div>
        </div>
      )}

      {/* 3D Galaxy HUD Controls */}
      <div className="galaxy-hud-controls">
        <div className="galaxy-hud-left">
          <div className="hud-pill-tag">
            <span className="pulse-mint-dot"></span>
            <span>SPATIAL SYSTEM EXPLORER (8 LIVE NODES)</span>
          </div>
          <span className="hud-hint hide-mobile">
            Drag to Rotate 3D Space • Click Orbiting Satellite to Inspect
          </span>
        </div>

        <div className="galaxy-hud-right">
          <button
            onClick={togglePause}
            className={`hud-ctrl-btn ${isPaused ? 'btn-active-neon' : ''}`}
            title="Pause or Resume Orbital Rotation"
          >
            {isPaused ? <Play size={13} /> : <Pause size={13} />}
            <span>{isPaused ? 'RESUME ORBIT' : 'FREEZE'}</span>
          </button>

          <div className="filter-pill-cluster">
            {['All', 'Cloud & AI', 'Security & Systems', 'Full Stack'].map((cat) => (
              <button
                key={cat}
                onClick={() => cycleFilter(cat)}
                className={`filter-mini-btn ${activeFilter === cat ? 'active' : ''}`}
              >
                {cat === 'Security & Systems' ? 'Security' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
