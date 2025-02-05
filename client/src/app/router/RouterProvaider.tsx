import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../../pages/Layout/Layout';
import RedactorPage from '../../pages/RedactorPage/RedactorPage';
import SkinsPage from '../../pages/SkinsPage/SkinsPage';
import MainPage from '../../entities/MainPage/MainPage';
import {BallRedactorPage}  from '../../pages/RedactorPage/BallRedactorPage/BallRedactorPage';
import { InterfaceRedactorPage } from '../../pages/RedactorPage/InterfaceRedactorPage/InterfaceRedactorPage';
import BackgroundRedactorPage  from '../../pages/RedactorPage/BackgroundRedactorPage/BackgroundRedactorPage';
import SoundPage from '../../pages/RedactorPage/SoundPage/SoundPage';
import {InterfaceSkinsPage} from '../../pages/SkinsPage/InterfaceSkinsPage/InterfaceSkinsPage';
import BackgroundSkinsPage from '../../pages/SkinsPage/BackgroundSkinsPage/BackgroundSkinsPage';
import BallSkinsPage from '../../pages/SkinsPage/BallSkinsPage/BallSkinsPage';
import {OneBallSkinPage} from '../../pages/SkinsPage/BallSkinsPage/OneBallSkinPage';



export default function RouterProvider(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/skins" element={<SkinsPage />}>
          <Route path="/skins/background" element={<BackgroundSkinsPage />} />
          <Route path="/skins/interface" element={<InterfaceSkinsPage />} />
          <Route path="/skins/ball" element={<BallSkinsPage />} />
          <Route path="/skins/ball/:id" element={<OneBallSkinPage />} />
          <Route path="/skins/sound" element={<SoundPage />} />
        </Route>
        <Route path="/redactor" element={<RedactorPage />}>
          <Route path="/redactor/ball" element={<BallRedactorPage />} />
          <Route path="/redactor/interface" element={<InterfaceRedactorPage />} />
          <Route path="/redactor/background" element={<BackgroundRedactorPage />} />
          <Route path="/redactor/sound" element={<SoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
