import React from 'react'
import  AuthContext from './AuthContext'
const AuthProvider = ({childern}) => {
    const user ={
        id:1,
        name:"mouni",
        email:"mounikakorra03@gmail.com"
    }

return(
    <AuthContextProvider value={user}>
        {childern}
    </AuthContextProvider>
    )
}

export default AuthProvider