import jwt_decode from "jwt-decode"
import { $authHost, $host } from "./index.js"

export const registration = async (email, password, username) => {
    const { data } = await $host.post("api/user/registration", {
        email,
        password,
        role: "ADMIN",
        username,
    })
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}
export const updateUser = async (payload) => {
    const { data } = await $authHost.post("api/user/update", payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const { data } = await $host.post("api/user/login", {
        email,
        password,
    })
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get("api/user/auth")
    localStorage.setItem("token", data.token)
    return jwt_decode(data.token)
}
