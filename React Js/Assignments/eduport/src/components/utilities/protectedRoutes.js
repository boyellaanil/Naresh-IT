import { isAuth } from "./auth"

export let protectedRoutes=()=>{
    if(!isAuth){
        return redirect;
    }
};