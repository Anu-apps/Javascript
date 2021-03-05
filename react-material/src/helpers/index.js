export const logOut = (setIsUserLoggedIn, history) => {
    sessionStorage.removeItem('adminUser')

    setIsUserLoggedIn(false)
    history.push("/")
}

export const getTokens = () => {

    let sessionUser = sessionStorage.getItem('adminUser')

    if (sessionUser) {
        const adminUser = JSON.parse(sessionUser)
        console.log({ accessToken: adminUser.accessToken, refreshToken: adminUser.refreshToken })
        return { accessToken: adminUser.accessToken, refreshToken: adminUser.refreshToken }
    }

    return false
}