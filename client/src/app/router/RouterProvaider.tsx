import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../../pages/Layout/Layout';
import RedactorPage from '../../pages/RedactorPage/RedactorPage';
import SkinsPage from '../../pages/SkinsPage/SkinsPage';
import MainPage from '../../entities/MainPage/MainPage';
import BallPage  from '../../pages/RedactorPage/BallPage/BallPage';
import { InterfaceRedactorPage } from '../../pages/RedactorPage/InterfaceRedactorPage/InterfaceRedactorPage';
import { BackgroundPage } from '../../pages/BackgrounderPage/BackgroundPage';
import SoundPage from '../../pages/RedactorPage/SoundPage/SoundPage';
import {InterfaceSkinsPage} from '../../pages/SkinsPage/InterfaceSkinsPage/InterfaceSkinsPage';



export default function RouterProvider(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/skins" element={<SkinsPage />}>
          <Route path="/skins/background" element={<BackgroundSkinsPage />} />
          <Route path="/skins/interface" element={<InterfaceSkinsPage />} />
          <Route path="/skins/ball" element={<BallPage />} />
          <Route path="/skins/sound" element={<SoundPage />} />
        </Route>
        <Route path="/redactor" element={<RedactorPage />}>
          <Route path="/redactor/ball" element={<BallPage />} />
          <Route path="/redactor/interface" element={<InterfaceRedactorPage />} />
          <Route path="/redactor/background" element={<BackgroundPage />} />
          <Route path="/redactor/sound" element={<SoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
