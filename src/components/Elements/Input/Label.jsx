const Label = (props) => {
    const {htmlFor, children} = props
    const htmlFors = `${htmlFor}`
    return(
        <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={htmlFors}
              >
                {children}
              </label>
    )
}

export default Label