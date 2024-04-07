import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import About from './src/components/About';
import Contacts from './src/components/Contacts';
import RestaurantMenu from './src/components/RestaurantMenu';
import Error from './src/components/Error';

import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';


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
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>,
                
            },
            {
                path:'/about',
                element:<About/>,
              

            },
            {
                path:'/contacts',
                element:<Contacts/>,
               

            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>,
                
            }
        ],
        
    }]);


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

