import { Route, Routes } from "react-router-dom"
import { Main } from "../../pages"
export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/favorites" element={<div>Избранное</div>} />
                <Route path="/user/:id" element={<div>Страница участника</div>} />
            </Routes>
        
        </>
    )
}