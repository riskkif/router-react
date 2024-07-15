const Input = (props) => {
    const {placeholder, type, name, id} = props
    const placeholders = `${placeholder}`
    const types = `${type}`
    const names = `${name}`
    const ids = `${id}`
        return (
            
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name={names}
                    type={types}
                    placeholder={placeholders}
                    id={ids}
                />
            
        )
    }
    
    export default Input