import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../../pages/Layout/Layout';
import RedactorPage from '../../pages/RedactorPage/RedactorPage';   
import SkinsPage from '../../pages/SkinsPage/SkinsPage';
import MainPage from '../../entities/MainPage/MainPage';

export default function RouterProvider(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/skins" element={<SkinsPage />} />
        <Route path="/redactor" element={<RedactorPage />} />
      </Route>
    </Routes>
  );
}
