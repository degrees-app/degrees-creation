import React, { useEffect } from 'react';
import * as THREE from 'three';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js';
import { BallObjectType } from '../types/ballTypes';

interface BallCardProps {
  card: BallObjectType;
}

export const BallCard: React.FC<BallCardProps> = ({ card }) => {
  const containerId = `three-container-${card.id}`;

  useEffect(() => {
    let wireframe: Wireframe,
      renderer: THREE.WebGLRenderer,
      scene: THREE.Scene,
      camera: THREE.PerspectiveCamera;
    let matLine: LineMaterial;
    let geo: THREE.BufferGeometry;

    init();

    function init() {
      renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(500, 500);
      renderer.setClearColor(0x000000, 0.0);

      const threeContainer = document.getElementById(containerId);
      if (threeContainer) {
        threeContainer.appendChild(renderer.domElement);
      }

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(40, 500 / 500, 1, 1000);
      camera.position.set(0, 0, 120);

      const size = 10; // Установим общий размер для всех фигур

      switch (card.shape) {
        case 'Sphere':
          geo = new THREE.SphereGeometry(size, 32, 32);
          break;
        case 'Cube':
          geo = new THREE.BoxGeometry(
            size,
            size,
            size,
            size * 1.5,
            size * 1.5,
            size * 1.5,
          );
          break;
        case 'Cylinder':
          geo = new THREE.CylinderGeometry(size, size, size * 2, 32, 32);
          break;
        case 'Cone':
          geo = new THREE.ConeGeometry(size, size * 2, 32, 32);
          break;
        case 'Torus':
          geo = new THREE.TorusGeometry(size, size / 2, 32, 100);
          break;
      }

      const geometry = new WireframeGeometry2(geo);

      matLine = new LineMaterial({
        color: card.color,
        linewidth: card.width,
        transparent: true,
        opacity: card.opacity,
      });

      wireframe = new Wireframe(geometry, matLine);
      wireframe.computeLineDistances();
      scene.add(wireframe);

      window.addEventListener('resize', onWindowResize);
      onWindowResize();
      animate();
    }

    function onWindowResize() {
      const width = 500;
      const height = 500;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    function animate() {
      renderer.setClearColor(0x000000, 0);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    return () => {
      const threeContainer = document.getElementById(containerId);
      if (threeContainer) {
        threeContainer.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, [card.color, card.opacity, card.shape, card.width, containerId]);

  return (
    <main>
      <div className="triD">
        <div>
          <div id={containerId} />
        </div>
      </div>
    </main>
  );
};
