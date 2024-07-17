import Button from "../Elements/Button"



const CardProducts = ( props) => {
    const {children} = props
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 my-2 rounded-lg shadow mx-3">
            {children}
        </div>
    )
}

const Header = (props) => {
    const {image} = props
    const images = `${image}`
    return (
        <div className="px-5 pt-5 pb-2">
            <a href="#">
                    <img src={images} alt="product"/>
                </a>
        </div>
    )
}

const Body = (props) => {
    const {title, children} = props
    return (
        <div className="p-5">
                    <a href="#">
                        <h5 className="text-white text-xl font-semibold tracking-tight">{title}</h5>
                        <p className="text-m text-white">
                            {children}
                        </p>
                    </a>
                </div>
    )
}

const Footer = (props) => {
    const {price, handleAddTocart, id} = props
    return (
        <div className="flex items-center justify-between p-5 bg-gray-900">
            <span className="text-white text-2xl font-bold">{price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
            <Button onClick={() => handleAddTocart(id)}  variant="bg-indigo-600">Add Cart</Button>
        </div>
    )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export default CardProducts