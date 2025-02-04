import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../../pages/Layout/Layout';
import RedactorPage from '../../pages/RedactorPage/RedactorPage';
import SkinsPage from '../../pages/SkinsPage/SkinsPage';
import MainPage from '../../entities/MainPage/MainPage';
import SoundPage from '../../pages/RedactorPage/SoundPage/SoundPage';
import { BallPage } from '../../pages/BallPage/BallPage';


export default function RouterProvider(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/skins" element={<SkinsPage />}>
          <Route path="/skins/ball" element={<BallPage />} />
          <Route path="/skins/sound" element={<SoundPage />} />
        </Route>
        <Route path="/redactor" element={<RedactorPage />}>
          <Route path="/redactor/ball" element={<BallPage />} />
          <Route path="/redactor/sound" element={<SoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
