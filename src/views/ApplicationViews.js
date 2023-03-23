import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Computers } from "../components/computers/ComputerList"
import { FavoritedComputers } from "../components/computers/FavoritedComputers"
import { ComputersByCustomer } from "../components/computers/MyComputers"
import { CreateComputer } from "../components/computers/NewComputer"
import { UpdateComputer } from "../components/computers/UpdateComputer"
import { Authorized } from "./Authorized"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
            <Route path="/computers" element={<Computers />} />
            <Route path="/favorites" element={<FavoritedComputers />} />
            <Route path="/newcomputer" element={<CreateComputer />} />
            <Route path="/computers/edit/:computerId" element={<UpdateComputer />} />
            <Route path="/mycomputers" element={<ComputersByCustomer />} />
            </Route>
        </Routes>
    </>
}