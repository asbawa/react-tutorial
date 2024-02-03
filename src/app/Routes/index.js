import React from 'react';
import {
    Navigate,
    Outlet,
    BrowserRouter as Router,
    useRoutes
} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import FormHandle from '../Pages/FormHandle';
import UserLayout from '../Pages/user/UserLayout';
import UserName from '../Pages/user/UserName';




const AllRoutes = () => {
    // const isLoggedIn = localStorage.getItem('token')
    const routes = [
        {index:true,element:<Home/>},
        {path:'about',element:<About/>},
        {path:'form',element:<FormHandle/>},
        {path:'contact',element:<Contact/>},
        {path:'user',element:<UserLayout/>,
            children:[
                {index:true,element:<UserName/>},
                {path:'profile',element:<h1>Prfile : Engineer</h1>},
                {path:'section',element:<h1>Section : Third</h1>},
            ]
        },

        { path: '*', element: <h1>error</h1> }
    ]
    return useRoutes(routes);
}

const BtRouter = () => {
    return (
        <Router basename='/'>
            <AllRoutes />
        </Router>

    )
}

export default BtRouter