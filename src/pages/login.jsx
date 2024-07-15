import AuthLayout from "../components/layouts/AuthLayout"
import FormLogin from "../components/fragments/FormLogin"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <AuthLayout 
        text="Login" 
        subtext="Login to your account" 
        type="login">
            <FormLogin/>
            
        </AuthLayout>
    )
}

export default LoginPage