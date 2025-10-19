import { Route, Routes } from 'react-router-dom';
import { Main, Favorites, UserPage, ErrorPage } from '../../pages';

export const Router = ({ team }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/user/:id" element={<UserPage team={team} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
