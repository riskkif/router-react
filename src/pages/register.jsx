import AuthLayout from "../components/layouts/AuthLayout"
import FormLogin from "../components/fragments/FormLogin"
import FormRegister from "../components/fragments/FormRegister"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <AuthLayout text="Register" subtext="Register to your account" type="register">
            <FormRegister/>
        </AuthLayout>
    )
}

export default RegisterPage