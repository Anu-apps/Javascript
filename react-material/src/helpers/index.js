export const logOut = (setIsUserLoggedIn, history) => {
    sessionStorage.removeItem('adminUser')

    setIsUserLoggedIn(false)
    history.push("/")
}