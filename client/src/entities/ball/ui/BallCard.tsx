import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js';
import './BallCard.css'
export const BallCard = ({ card }) => {
  const containerId = `three-container-${card.id}`;

  const guiRef = useRef(null);
  const [params, setParams] = useState({
    'line type': card.lineType,
    'width (px)': card.width,
    dashed: card.dashed,
    'dash scale': card.deshScale,
    'dash / gap': card.dashGap,
    color: card.color,
    shape: card.shape,
  });

  useEffect(() => {
    let wireframe, renderer, scene, camera;
    let matLine;
    let geo;

    init();

    function init() {
      renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(500,500);
      renderer.setClearColor(0x000000, 0.0);

      const threeContainer = document.getElementById(containerId);
      threeContainer.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        40,
        (500) / 500,
        1,
        1000,
      );
      camera.position.set(0, 0, 120); // Установите позицию камеры
      switch (card.shape) {
        case 'Sphere':
          geo = new THREE.SphereGeometry(10, 10, 10);
          break;
        case 'Cube':
          geo = new THREE.BoxGeometry(10, 10, 10);
          break;
        case 'Cylinder':
          geo = new THREE.CylinderGeometry(7, 7, 15, 32);
          break;
        case 'Cone':
          geo = new THREE.ConeGeometry(7, 10, 32);
          break;
        case 'Torus':
          geo = new THREE.TorusGeometry(7, 2.5, 10, 100);
          break;
      }
      const geometry = new WireframeGeometry2(geo);

      matLine = new LineMaterial({
        color: params.color,
        linewidth: params['width (px)'],
        dashed: params.dashed,
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
  }, [params]);

  return (
    <div className='triD'>
      <div >
        <div id={containerId} />
        <div ref={guiRef}/>
      </div>
    </div>
  );
};
