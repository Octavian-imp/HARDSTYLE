import { Outlet } from "react-router-dom"
import UserContainer from "../../components/UserContainer.jsx"
export default function LayoutUser() {
    return (
        <UserContainer>
            <Outlet />
        </UserContainer>
    )
}
