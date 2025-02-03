import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js';

export const BallPage = () => {
  const guiRef = useRef(null); // Ссылка на контейнер для GUI
  const [params, setParams] = useState({
    'line type': 0,
    'width (px)': 5,
    dashed: false,
    'dash scale': 1,
    'dash / gap': 1,
    color: 0x4080ff,
    shape: 'Sphere',
  });

  // Переменные для хранения данных для записи на сервер
  const [dataToSend, setDataToSend] = useState({
    lineType: params['line type'],
    width: params['width (px)'],
    dashed: params.dashed,
    dashScale: params['dash scale'],
    dashGap: params['dash / gap'],
    color: params.color,
    shape: params.shape,
  });

  console.log(dataToSend);

  useEffect(() => {
    let wireframe, renderer, scene, camera, camera2, controls;
    let wireframe1;
    let matLine, matLineBasic, matLineDashed;
    let gui;
    let insetWidth;
    let insetHeight;
    let geo;

    init();

    function init() {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(800, 600);
      renderer.setClearColor(0x000000, 0.0);
      document.body.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(40, 800 / 600, 1, 1000);
      camera.position.set(-50, 0, 50);

      camera2 = new THREE.PerspectiveCamera(40, 1, 1, 1000);
      camera2.position.copy(camera.position);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 10;
      controls.maxDistance = 500;

      geo = new THREE.IcosahedronGeometry(20, 1);
      const geometry = new WireframeGeometry2(geo);

      matLine = new LineMaterial({
        color: params.color,
        linewidth: params['width (px)'],
        dashed: params.dashed,
      });

      wireframe = new Wireframe(geometry, matLine);
      wireframe.computeLineDistances();
      scene.add(wireframe);

      geo = new THREE.WireframeGeometry(geo);
      matLineBasic = new THREE.LineBasicMaterial({ color: params.color });
      matLineDashed = new THREE.LineDashedMaterial({
        scale: 2,
        dashSize: 1,
        gapSize: 1,
      });

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
      camera.aspect = 800 / 600;
      camera.updateProjectionMatrix();
      renderer.setSize(800, 600);

      insetWidth = 600 / 4;
      insetHeight = 600 / 4;

      camera2.aspect = insetWidth / insetHeight;
      camera2.updateProjectionMatrix();
    }

    function animate() {
      renderer.setClearColor(0x000000, 0);
      renderer.setViewport(0, 0, 800, 600);
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
      gui = new GUI({ autoPlace: false }); // Создаем GUI без автоматического добавления в body
      guiRef.current.appendChild(gui.domElement); // Добавляем GUI в контейнер
      gui
        .add(params, 'line type', { LineGeometry: 0, 'gl.LINE': 1 })
        .onChange(function (val) {
          wireframe.visible = val === 0;
          wireframe1.visible = val === 1;
        });

      gui.add(params, 'width (px)', 1, 10).onChange(function (val) {
        matLine.linewidth = val;
      });

      gui.add(params, 'dashed').onChange(function (val) {
        matLine.dashed = val;

        if (val) matLine.defines.USE_DASH = '';
        else delete matLine.defines.USE_DASH;
        matLine.needsUpdate = true;

        wireframe1.material = val ? matLineDashed : matLineBasic;
      });

      gui.add(params, 'dash scale', 0.5, 1, 0.1).onChange(function (val) {
        matLine.dashScale = val;
        matLineDashed.scale = val;
      });

      gui
        .add(params, 'dash / gap', { '2 : 1': 0, '1 : 1': 1, '1 : 2': 2 })
        .onChange(function (val) {
          switch (val) {
            case 0:
              matLine.dashSize = 2;
              matLine.gapSize = 1;
              matLineDashed.dashSize = 2;
              matLineDashed.gapSize = 1;
              break;

            case 1:
              matLine.dashSize = 1;
              matLine.gapSize = 1;
              matLineDashed.dashSize = 1;
              matLineDashed.gapSize = 1;
              break;

            case 2:
              matLine.dashSize = 1;
              matLine.gapSize = 2;
              matLineDashed.dashSize = 1;
              matLineDashed.gapSize = 2;
              break;
          }
        });

      gui.addColor(params, 'color').onChange(function (val) {
        matLine.color.set(val);
      });

      gui
        .add(params, 'shape', ['Sphere', 'Cube', 'Cylinder', 'Cone', 'Torus'])
        .onChange(function (val) {
          updateShape(val);
        });

      // Добавление кнопки "Добавить"
      gui.add({ add: () => addShape() }, 'add').name('Добавить');

      function updateShape(shape) {
        let geometry;
        switch (shape) {
          case 'Sphere':
            geometry = new THREE.SphereGeometry(10, 32, 32);
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
      }

      function addShape() {
        // Обновление данных для отправки на сервер
        setDataToSend({
          lineType: params['line type'],
          width: params['width (px)'],
          dashed: params.dashed,
          dashScale: params['dash scale'],
          dashGap: params['dash / gap'],
          color: params.color,
          shape: params.shape,
        });

        console.log('Данные для отправки на сервер:', dataToSend);
        // Здесь можно добавить логику для отправки данных на сервер
      }
    }

    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [params]);

  return (
    <div style={{ display: 'flex',  position: 'relative' }}>
    {/* Контейнер для рендеринга */}
    <div style={{ width: '70%', height: '600px' }} />
    <div ref={guiRef} style={{ width: '30%', position: 'absolute', top: '10px', right: '10px' }} />
  </div>
);
};
