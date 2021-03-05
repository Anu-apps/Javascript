import publicApi, { privateApi } from "./index"

export const LoginService = (data) => publicApi.post("/api/users/login", data)


export const getAllUsersService = () => privateApi.get("/api/users/get-all-users")