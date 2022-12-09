import React from "react";
import { Outlet } from "react-router-dom";
import UserContainer from "../../components/UserContainer";
export default function LayoutUser() {
    return (
        <UserContainer>
            <Outlet />
        </UserContainer>
    );
}
