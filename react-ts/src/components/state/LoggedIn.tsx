import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const hadleLogin = () => {
        setisLoggedIn(true)
    }
    const hadleLogout = () => {
        setisLoggedIn(true)
    }
    
    return (
        <div>
            <button onClick={hadleLogin}>Login</button>
            <button onClick={hadleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'Logged in' : 'Logged out'}</div>
        </div>
    )
}