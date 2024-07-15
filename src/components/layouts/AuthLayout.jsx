import FormLogin from "../fragments/FormLogin"
import { Link } from "react-router-dom"

const AuthLayout = (props) => {
    const {children, text, subtext, type} = props
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">{text}</h1>
            <p className="text-slate-500 mb-0 font-medium">
                {subtext}
            </p>
            {children}
            <Navigation type={type}/>
            </div>
        </div>
    )
}

//Conditional rendering
const Navigation = ({type}) => {
    if(type === "login") {
    return (
        <p className="mt-4">
                 Don't have an account?{" "}          
                <Link   to="/register" 
                        className="text-blue-600">
                        Sign Up
                </Link>
            </p>
    )
} else if(type === "register") {
    return (
        <p className="mt-4">
                 Already have an account?{" "}              
                <Link   to="/login" 
                        className="text-blue-600">
                        Sign In
                </Link>
            </p>
    )
}
}

export default AuthLayout