import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contacts from './components/Contacts';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';

const App=()=>{
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contacts',
                element:<Contacts/>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>,
    }]);


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

