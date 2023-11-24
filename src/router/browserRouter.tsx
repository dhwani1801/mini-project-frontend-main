import { createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login'
import DashboardPage from '../pages/Dashboard';
const router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/dashboard",
                element: <DashboardPage />,
            },     
        ]
    }
]);

export default router;
    