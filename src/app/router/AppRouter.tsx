import {Route, Routes} from "react-router-dom";
import {MainLayout} from "@/components/Layout/MainLayout";
import {ProtectedRoute} from "@/app/router/ProtectedRoute";
import {DashboardPage} from "@/pages/dashboardPage/DashboardPage";
import {LoginPage} from "@/pages/loginPage/LoginPage";
import {RegisterPage} from "@/pages/registerPage/RegisterPage";
import {ProfilePage} from "@/pages/profilePage/ProfilePage";
import {TaskPage} from "@/pages/taskPage/TaskPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/tasks" element={<TaskPage/>}/>
                </Route>
            </Route>
        </Routes>
        )
}


