import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login"
import Register from "../auth/register/Register"
import Profile from "../profile/Profile";
import Post from "../post/Post";
let route=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/login",
                element:<Login/>,
            },
            {
                path:"/register",
                element:<Register/>,
            },
            {
                path:"/profile",
                element:<Profile/>,
            },
            {
                path:"/addPost",
                element:<Post/>,
            },
        ],
    },
]);
export default route;