import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const {children, name, placeholder, type} = props
    return(
        <div className="mb-6">
            <Label htmlFor={name}> {children}</Label>
            <Input  
                placeholder={placeholder}
                type={type}
                name={name}
                id={name}
            />
        </div>
    )
}

export default InputForm