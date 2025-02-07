import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/hooks';
import { FindOneBall } from '../../../entities/ball/model/ballThunk';
import { useNavigate, useParams } from 'react-router';
import { BallObjectType } from '../../../entities/ball/types/ballTypes';

export const OneBallSkinPage: React.FC = () => {
  const { oneball , error } = useAppSelector((state) => state.ball) as { oneball: BallObjectType | null, error: string | null };
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate= useNavigate()

  useEffect(() => {
    if (id) {
      void dispatch(FindOneBall(id));
      if(error){
        navigate('/*');
      }
    }
  }, [id, dispatch,error,navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    if (!oneball) return; // Прекращаем выполнение, если oneball не загружен

    let wireframe: Wireframe;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let controls: OrbitControls;
    let wireframe1: THREE.LineSegments;
    let matLine: LineMaterial;
    let matLineBasic: THREE.LineBasicMaterial;

    let insetWidth: number;
    let insetHeight: number;
    let geo: THREE.BufferGeometry;

    init();

    function init() {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth * 0.75, window.innerHeight);
      renderer.setClearColor(0x000000, 0.0);

      const threeContainer = document.getElementById('three-container');
      threeContainer?.appendChild(renderer.domElement);

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
      if (!oneball?.shape) return;

     const size = 10; // Установим общий размер для всех фигур
     
             switch (oneball.shape) {
               case 'Sphere':
                 geo = new THREE.SphereGeometry(size, 32, 32);
                 break;
               case 'Cube':
                 geo = new THREE.BoxGeometry(size, size, size, size * 1.5, size * 1.5, size * 1.5);
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
    <div style={{ display: 'flex', height: '100vh', width: '100vw', flexDirection: 'column' }}>
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
