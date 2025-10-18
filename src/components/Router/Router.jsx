import { Route, Routes } from 'react-router-dom';
import { Main, User, Favorites } from '../../pages';
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
};
