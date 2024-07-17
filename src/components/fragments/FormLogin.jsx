import React from "react"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href ='/products';
  }
    return(
        <form action="" onSubmit={handleLogin}>
            <div className="mb-4 py-4">
              <InputForm 
              type="email" 
              placeholder="example@ex.com" 
              name="email"
              >
                Email
              </InputForm>
            
             <InputForm
              type="password" 
              placeholder="********" 
              name="password"
              >
                Password
              </InputForm>
            </div>
            <div className="flex items-center justify-between">
              <Button variant="bg-indigo-600" type="submit" >Login</Button>
            </div>
          </form>
    )
}

export default FormLogin