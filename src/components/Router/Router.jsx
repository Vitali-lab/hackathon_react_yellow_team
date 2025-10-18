import { Route, Routes } from "react-router-dom"
import { Main, Favorites } from '../../pages';
import UserPage from "../../pages/userPage/userPage.jsx"

export const Router = ({team}) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/user/:id" element={<UserPage team={team} />} />
            </Routes>
        
        </>
    )
}
