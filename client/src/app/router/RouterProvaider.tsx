import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../../pages/Layout/Layout';
import RedactorPage from '../../pages/RedactorPage/RedactorPage';
import SkinsPage from '../../pages/SkinsPage/SkinsPage';
import MainPage from '../../entities/MainPage/MainPage';
import { InterfacePage } from '../../pages/RedactorPage/InterfacePage/InterfacePage';
import { BackroundPage } from '../../pages/RedactorPage/BackrounderPage/BackroundPage';
import SoundPage from '../../pages/RedactorPage/SoundPage/SoundPage';
import BackroundSkinsPage from '../../pages/SkinsPage/BackroundSkinsPage/BackroundSkinsPage';
import InterfaceSkinsPage from '../../pages/SkinsPage/InterfaceSkinsPage/InterfaceSkinsPage';
import BallPage from '../../pages/RedactorPage/BallPage/BallPage';

export default function RouterProvider(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/skins" element={<SkinsPage />}>
          <Route path="/skins/backround" element={<BackroundSkinsPage />} />
          <Route path="/skins/interface" element={<InterfaceSkinsPage />} />
          <Route path="/skins/ball" element={<BallPage />} />
          <Route path="/skins/sound" element={<SoundPage />} />
        </Route>
        <Route path="/redactor" element={<RedactorPage />}>
          <Route path="/redactor/ball" element={<BallPage />} />
          <Route path="/redactor/interface" element={<InterfacePage />} />
          <Route path="/redactor/backround" element={<BackroundPage />} />
          <Route path="/redactor/sound" element={<SoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
