import Home from '../../screens/home'
import Product from '../../screens/product'
import About from '../../screens/about'
import ThinkS from '../../screens/think'
import Login from '../../screens/Login.jsx'

import { Routes, Route } from "react-router"

const Router = () => {
    return(
        <Routes>
            <Route index element={<Home />}/>
            <Route path="login" element={<Login />} />
            <Route path="product" element={<Product />}/>
            <Route path="think" element={<ThinkS />}/>
            <Route path="about" element={<About />}/>
            

        </Routes>
    )
}
export default Router