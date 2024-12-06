import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import Footer from './Components/Footer/Footer';
import Terms from './Components/Terms/Terms';
import Policy from './Components/Policy/Policy';
import BuyProduct from './Pages/BuyProduct';

const router = createBrowserRouter([
    {
        path: '/',
        element: <><Navbar /><Home /><Footer /></>
    },
    {
        path: '/products',
        element: <><Navbar /><Products /><Footer /></>
    },
    {
        path: '/men',
        element: <><Navbar /><Categories category='men' /><Footer /></>
    },
    {
        path: '/women',
        element: <><Navbar /><Categories category='women' /><Footer /></>
    },
    {
        path: '/boys',
        element: <><Navbar /><Categories category='boys' /><Footer /></>
    },
    {
        path: '/girls',
        element: <><Navbar /><Categories category='girls' /><Footer /></>
    },
    {
        path: '/buyProduct/:productId',
        element: <><Navbar /><BuyProduct /><Footer /></>
    },
    {
        path: '/about',
        element: <><Navbar /><About /><Footer /></>
    },
    {
        path: '/contact',
        element: <><Navbar /><Contact /><Footer /></>
    },
    {
        path: '/wishlist',
        element: <><Navbar /><Wishlist /><Footer /></>
    },
    {
        path: '/cart',
        element: <><Navbar /><Cart /><Footer /></>
    },
    {
        path: '/policy',
        element: <><Navbar /><Policy /><Footer /></>
    },
    {
        path: '/terms',
        element: <><Navbar /><Terms /><Footer /></>
    },
    {
        path: '*',
        element: <><Navbar /><Error /><Footer /></>
    }
]);

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App