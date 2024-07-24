import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setuser] = useState<AuthUser | null>(null)

    const hadleLogin = () => {
        setuser(
            {
                name: 'Kofi',
                email: 'test@gmail.com'
            }
        )
    }
    const hadleLogout = () => {
        setuser(null)
    }
    return (
        <div>
            <button onClick={hadleLogin}></button>
            <button onClick={hadleLogout}></button>
            <div>User name is {user?.name}</div>
            <div>User mail is {user?.email}</div>
        </div>
    )
}

//19