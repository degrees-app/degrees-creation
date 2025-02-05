import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks';
import { FindOneBall } from '../../../entities/ball/model/ballThunk';
import { useParams } from 'react-router';

export const OneBallSkinPage = () => {
  const { oneball } = useAppSelector((state) => state.ball);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  

  useEffect(() => {
    if (id) {
      void dispatch(FindOneBall(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!oneball) return; // Прекращаем выполнение, если oneball не загружен

    let wireframe, renderer, scene, camera, controls;
    let wireframe1;
    let matLine, matLineBasic;

    let insetWidth;
    let insetHeight;
    let geo;

    init();

    function init() {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth * 0.75, window.innerHeight);
      renderer.setClearColor(0x000000, 0.0);

      const threeContainer = document.getElementById('three-container');
      threeContainer.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        40,
        (window.innerWidth * 0.75) / window.innerHeight,
        1,
        1000,
      );
      camera.position.set(-50, 0, 50);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 10;
      controls.maxDistance = 500;

      // Проверка на наличие shape
      if (!oneball.shape) return;

      switch (oneball.shape) {
        case 'Sphere':
          geo = new THREE.SphereGeometry(16, 32, 32);
          break;
        case 'Cube':
          geo = new THREE.BoxGeometry(32, 32, 32);
          break;
        case 'Cylinder':
          geo = new THREE.CylinderGeometry(10, 10, 32, 32);
          break;
        case 'Cone':
          geo = new THREE.ConeGeometry(10, 32, 32);
          break;
        case 'Torus':
          geo = new THREE.TorusGeometry(10, 5, 32, 100);
          break;
        default:
          return; // Если форма не определена, выходим
      }

      const geometry = new WireframeGeometry2(geo);

      matLine = new LineMaterial({
        color: oneball.color,
        linewidth: oneball.width,
        transparent: true,
        opacity: oneball.opacity,
      });

      wireframe = new Wireframe(geometry, matLine);
      wireframe.computeLineDistances();
      scene.add(wireframe);

      geo = new THREE.WireframeGeometry(geo);
      matLineBasic = new THREE.LineBasicMaterial({ color: oneball.color });

      wireframe1 = new THREE.LineSegments(geo, matLineBasic);
      wireframe1.computeLineDistances();
      wireframe1.visible = false;
      scene.add(wireframe1);

      window.addEventListener('resize', onWindowResize);
      onWindowResize();

      animate();
    }

    function onWindowResize() {
      const width = window.innerWidth * 0.75;
      const height = window.innerHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      insetWidth = height / 4;
      insetHeight = height / 4;
    }

    function animate() {
      renderer.setClearColor(0x000000, 0);
      renderer.setViewport(0, 0, window.innerWidth * 0.75, window.innerHeight);
      renderer.render(scene, camera);

      renderer.setClearColor(0x222222, 1);
      renderer.clearDepth();
      renderer.setScissorTest(true);
      renderer.setScissor(20, 20, insetWidth, insetHeight);
      renderer.setViewport(20, 20, insetWidth, insetHeight);

      renderer.setScissorTest(false);
      requestAnimationFrame(animate);
    }

    return () => {
      const threeContainer = document.getElementById('three-container');
      if (threeContainer) {
        threeContainer.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, [oneball]);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <div
        id="three-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '750px',
          width: '1200px',
        }}
      />
      <div />
    </div>
  );
};
