import React from "react"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    return(
        <form action="">
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
              <Button variant="bg-indigo-600"  >Login</Button>
            </div>
          </form>
    )
}

export default FormLogin