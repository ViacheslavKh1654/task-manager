import {selectAuthStatus} from "@/features/auth/model/selectors";
import {useAppSelector} from "@/app/store/hooks";
import {Navigate, Outlet} from "react-router-dom";


export const ProtectedRoute = () => {
    const authStatus = useAppSelector(selectAuthStatus);

    return (
        authStatus === "authenticated" 
            ?<Outlet/>
            :<Navigate to="/login" replace/>
    )
}
