import React from "react";
import { Outlet } from "react-router-dom";
import MainContainer from "../../components/MainContainer";
export default function LayoutUser() {
    return (
        <MainContainer isCabinet={true}>
            <Outlet />
        </MainContainer>
    );
}
