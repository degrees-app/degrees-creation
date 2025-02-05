import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks';
import { CreateBallCard } from '../../../entities/ball/model/ballThunk';
import { BallSchema } from '../../../entities/ball/types/ballTypes';

export const BallRedactorPage = () => {
  const guiRef = useRef(null); // Ссылка на контейнер для GUI
  const [params, setParams] = useState({
    'width (px)': 5,
    color: 0x4080ff,
    shape: 'Sphere',
    opacity: 1.0,
  });

  const ball = useAppSelector((state) => state.ball);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let wireframe, renderer, scene, camera, camera2, controls;
    let wireframe1;
    let matLine, matLineBasic;
    let gui;
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

      camera2 = new THREE.PerspectiveCamera(40, 1, 1, 1000);
      camera2.position.copy(camera.position);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 10;
      controls.maxDistance = 500;

      geo = new THREE.SphereGeometry(16, 32, 32);
      const geometry = new WireframeGeometry2(geo);

      matLine = new LineMaterial({
        color: params.color,
        linewidth: params['width (px)'],
      });

      wireframe = new Wireframe(geometry, matLine);
      wireframe.computeLineDistances();
      scene.add(wireframe);

      geo = new THREE.WireframeGeometry(geo);
      matLineBasic = new THREE.LineBasicMaterial({ color: params.color });

      wireframe1 = new THREE.LineSegments(geo, matLineBasic);
      wireframe1.computeLineDistances();
      wireframe1.visible = false;
      scene.add(wireframe1);

      window.addEventListener('resize', onWindowResize);
      onWindowResize();

      initGui();
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

      camera2.aspect = insetWidth / insetHeight;
      camera2.updateProjectionMatrix();
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
      camera2.position.copy(camera.position);
      camera2.quaternion.copy(camera.quaternion);
      renderer.render(scene, camera2);
      renderer.setScissorTest(false);
      requestAnimationFrame(animate);
    }

    function initGui() {
      gui = new GUI({ autoPlace: false });
      guiRef.current.appendChild(gui.domElement);

      gui.add(params, 'width (px)', 1, 10).onChange(function (val) {
        matLine.linewidth = val;
      });

      gui.addColor(params, 'color').onChange(function (val) {
        matLine.color.set(val);
      });

      gui
        .add(params, 'shape', ['Sphere', 'Cube', 'Cylinder', 'Cone', 'Torus'])
        .onChange(function (val) {
          updateShape(val);
        });

      gui.add(params, 'opacity', 0.2, 1.0).onChange(function (val) {
        matLine.opacity = val;
        matLine.transparent = val < 1.0; // Установить прозрачность
      });

      gui
        .add(
          {
            add: () => {
              const initialPosts = {
                width: params['width (px)'],
                color: params.color,
                shape: params.shape,
                opacity: params.opacity,
              };

              dispatch(CreateBallCard(initialPosts));
            },
          },
          'add',
        )
        .name('Добавить');

      function updateShape(shape) {
        let geometry;
        switch (shape) {
          case 'Sphere':
            geometry = new THREE.SphereGeometry(16, 32, 32);
            break;
          case 'Cube':
            geometry = new THREE.BoxGeometry(32, 32, 32);
            break;
          case 'Cylinder':
            geometry = new THREE.CylinderGeometry(10, 10, 32, 32);
            break;
          case 'Cone':
            geometry = new THREE.ConeGeometry(10, 32, 32);
            break;
          case 'Torus':
            geometry = new THREE.TorusGeometry(10, 5, 32, 100);
            break;
        }

        wireframe.geometry.dispose();
        wireframe.geometry = new WireframeGeometry2(geometry);
        wireframe1.geometry.dispose();
        wireframe1.geometry = new THREE.WireframeGeometry(geometry);
        wireframe1.computeLineDistances();

        matLine.linewidth = params['width (px)'];
        matLine.color.set(params.color);
        matLine.needsUpdate = true;
      }
    }

    return () => {
      const threeContainer = document.getElementById('three-container');
      if (threeContainer) {
        threeContainer.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, [params]);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <div
        id="three-container"
        style={{ flex: 3, height: '100%', position: 'relative' }}
      />
      <div
        ref={guiRef}
        style={{
          flex: 1,
          height: '100%',
          overflow: 'auto',
          padding: '10px',
          backgroundColor: '#2d2d2d',
          color: '#fff',
        }}
      />
    </div>
  );
};
