export const logOut = (setIsUserLoggedIn, history) => {
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('cartItems')
    sessionStorage.removeItem('totalCartItems')
    setIsUserLoggedIn(false)
    history.push("/")
}