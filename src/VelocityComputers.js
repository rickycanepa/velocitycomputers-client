import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"


export const VelocityComputers = () => {
    const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

    const setToken = (newToken) => {
        localStorage.setItem('velocity_token', newToken)
        setTokenState(newToken)
    }
    return <>
        <NavBar />
        <ApplicationViews />
    </>
}