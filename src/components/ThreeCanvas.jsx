import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Sparkles, Cpu } from 'lucide-react';

export default function ThreeCanvas() {
  const mountRef = useRef(null);
  const [geoMode, setGeoMode] = useState(0); // 0: Torus Knot, 1: Icosahedron, 2: Octahedron
  const [isRotating, setIsRotating] = useState(true);
  const [hudCoord, setHudCoord] = useState({ x: 0, y: 0 });
  const meshRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Dimensions
    const width = mount.clientWidth;
    const height = mount.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Geometries
    const geometries = [
      new THREE.TorusKnotGeometry(1.0, 0.28, 120, 24, 2, 3),
      new THREE.IcosahedronGeometry(1.35, 1),
      new THREE.OctahedronGeometry(1.4, 2),
    ];

    // Wireframe Outer Mesh
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f59b,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });

    const mesh = new THREE.Mesh(geometries[geoMode], wireframeMaterial);
    scene.add(mesh);
    meshRef.current = mesh;

    // Inner Glowing Core Mesh
    const innerGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mesh.add(innerMesh);

    // Particle Stars Field
    const particleCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const rareColors = [
      new THREE.Color(0x00f59b), // Mint Emerald
      new THREE.Color(0x00f2fe), // Aurora Teal
      new THREE.Color(0xa855f7), // Amethyst
      new THREE.Color(0xffd166), // Solar Plasma
    ];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;

      const randomColor = rareColors[Math.floor(Math.random() * rareColors.length)];
      colors[i] = randomColor.r;
      colors[i + 1] = randomColor.g;
      colors[i + 2] = randomColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = mount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / height) * 2 - 1);
      targetX = x * 0.7;
      targetY = y * 0.7;
      setHudCoord({ x: (x * 100).toFixed(1), y: (y * 100).toFixed(1) });
    };

    mount.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight || 480;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      if (mesh) {
        if (isRotating) {
          mesh.rotation.x += 0.005;
          mesh.rotation.y += 0.008;
        }
        mesh.rotation.x += (mouseY * 0.5 - mesh.rotation.x * 0.1) * 0.05;
        mesh.rotation.y += (mouseX * 0.5 - mesh.rotation.y * 0.1) * 0.05;

        innerMesh.rotation.y -= 0.012;
      }

      if (particles) {
        particles.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      if (mount) {
        mount.removeEventListener('mousemove', handleMouseMove);
        if (renderer.domElement && mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
      geometries.forEach((g) => g.dispose());
      wireframeMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [geoMode, isRotating]);

  const cycleGeometry = () => {
    setGeoMode((prev) => (prev + 1) % 3);
  };

  const getGeometryName = () => {
    switch (geoMode) {
      case 0:
        return 'Torus Knot (Quantum)';
      case 1:
        return 'Icosahedron (Polyhedral)';
      case 2:
        return 'Octahedron (Geodesic)';
      default:
        return 'Core';
    }
  };

  return (
    <div className="three-container">
      <div ref={mountRef} className="three-canvas-mount" />

      {/* 3D Telemetry HUD Controls */}
      <div className="three-hud-overlay">
        <div className="hud-metric">
          <div className="hud-label">CORE MATRIX</div>
          <div className="hud-value neon-mint">
            <span className="hud-dot animate-pulse"></span>
            <span>{getGeometryName()}</span>
          </div>
        </div>

        <div className="hud-metric hide-mobile">
          <div className="hud-label">CURSOR PARALLAX</div>
          <div className="hud-value mono">
            X:{hudCoord.x} Y:{hudCoord.y}
          </div>
        </div>

        <div className="hud-actions">
          <button
            onClick={cycleGeometry}
            className="hud-btn"
            title="Morph 3D Hologram Geometry"
          >
            <RotateCw size={13} />
            <span>Morph Shape</span>
          </button>
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`hud-btn ${isRotating ? 'hud-btn-active' : ''}`}
            title="Toggle Continuous Rotation"
          >
            <Cpu size={13} />
            <span>{isRotating ? 'Auto-Spin: ON' : 'Auto-Spin: PAUSED'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
