import { Fragment, useState, useEffect } from "react";
import Button from "../components/Elements/Button"
import CardProducts from "../components/fragments/CardProducts"
import Counter from "../components/fragments/Counter";
import { Component } from "react";

const products = [
    
        {
            id : 1,
            title : "Sepatu",
            price : 200000,
            image : "/images/sepatu.jpg",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus magni quis. Nihil iusto at eligendi. Eveniet, quod quidem consequatur eligendi voluptates blanditiis explicabo eius voluptatem magnam sint, architecto dignissimos!",
        },
        {
            id : 2,
            title : "Sepatu",
            price : 200000,
            image : "/images/sepatu.jpg",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus magni quis. Nihil iusto at eligendi. Eveniet, quod quidem consequatur eligendi voluptates blanditiis explicabo eius voluptatem magnam sint, architecto dignissimos!",
            
        },
        {
            id : 3,
            title : "Sepatu",
            price : 200000,
            image : "/images/sepatu.jpg",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus magni quis. Nihil iusto at eligendi. Eveniet, quod quidem consequatur eligendi voluptates blanditiis explicabo eius voluptatem magnam sint, architecto dignissimos!",
            
        },
    
];

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const email = localStorage.getItem('email')
    const [totalPrice, setTotalPrice] = useState(0)

    //COMPONENT DID MOUNT USING USE EFFECT
    // you can fetching data API in here
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || [])
    }, []);

    //COMPONENT DID UPDATE USING USE EFFECT
    // you can updating data API in here and return to previous state
    useEffect(() => {
        if(cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart]);



    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href ='/login';
    }

    const handleResetCart = () => {
        localStorage.removeItem('cart')
        window.location.href ='/products';
    }

    const handleAddTocart = (id) =>{
        if (cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => item.id === id ? {...item, qty : item.qty + 1} : item))
        } else {
            setCart([...cart, {id : id, qty : 1}])
        }
        
    }


    return (
        <>
        <Fragment>

        <div className="flex justify-end items-center h-20 bg-gray-900 text-white gap-x-5 py-5 px-10">
            {email}
            <Button variant="bg-indigo-600" onClick={() => handleLogout()}>Logout</Button>
        </div>
        <div className="flex justify-center py-5 ">
            <div className="w-4/6 flex flex-wrap">
            {products.map((product) => (
            <CardProducts key={product.id}>
                <CardProducts.Header image={product.image}></CardProducts.Header>
                <CardProducts.Body title={product.title}>{product.description}</CardProducts.Body>
                <CardProducts.Footer price={product.price} handleAddTocart={handleAddTocart} id={product.id}></CardProducts.Footer>
            </CardProducts>
        ))}
            </div>
            <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
            <table className="w-full text-left table-auto border-separate border-spacing-x-5">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                    const product = products.find(product => product.id === item.id);
                    return(
                        <tr key={item.id}>
                            <td>{product.title}</td>
                            <td>{product.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                            <td>{item.qty}</td>
                            <td>{(item.qty * product.price).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                        </tr>
                    ) })}
                    <tr>
                        <td colSpan={3}> <b>Total Price</b></td>
                        <td><b>
                            {totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}
                        </b></td>
                    </tr>
                    <tr>
                        <td>
                            <Button variant="bg-indigo-600" onClick={() => handleResetCart()} >reset</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        {/* <div className="flex justify-center">
            <Counter>
            </Counter>
        </div> */}
        </Fragment>
        </>
    )
    }
    


export default ProductsPage