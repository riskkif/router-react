import Button from "../components/Elements/Button"
import CardProducts from "../components/fragments/CardProducts"


const ProductsPage = () => {
    const products = [
        
            {
                id : 1,
                title : "Sepatu",
                price : "200.000",
                image : "/images/sepatu.jpg",
                description : "lorem ipsum",
            },
            {
                id : 2,
                title : "Sepatu",
                price : "200.000",
                image : "/images/sepatu.jpg",
                description : "lorem ipsum",
            },
        
    ];
    return (
        <div className="flex justify-center py-5 ">
            {products.map((product) => (
            <CardProducts key={product.id}>
                <CardProducts.Header image={product.image}></CardProducts.Header>
                <CardProducts.Body title={product.title}>{product.description}</CardProducts.Body>
                <CardProducts.Footer price={product.price}></CardProducts.Footer>
            </CardProducts>
        ))}
        </div>
    )
    }
    


export default ProductsPage