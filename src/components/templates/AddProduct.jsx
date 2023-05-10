import { useState } from 'react'
import Input from '../atoms/Input'
import productsService from '../../services/products.service'       
const AddProduct = () => {
    const [prodName, setProdName] = useState('')
    const [prodPrice, setProdPrice] = useState('')
    const [prodImg, setProdImg] = useState('')
    const [success, setSuccess] = useState(false)
  
    const initialState = {
        prodName: "",
        prodPrice: "",
        prodImg: ""
    }

                           
    const [prods, setProds] = useState(initialState)
    const handleProduct = () => {
        var data = {
            prodName: prods.prodName,
            prodPrice: prods.prodPrice,
            prodImg: prods.prodImg
        };

        productsService.create(data)
        .then(res=>{
            setProds({
                prodName: res.data.prodName,
                prodPrice: prods.data.prodPrice,
                prodImg:res.data.prodImg
            });
            setSuccess(true)
            console.log("successful")
        })
    }
    return (
        <>
            <form className='flex flex-col gap-5 justify-center items-center'>
                <Input type='text' value={prodName}
                    onChange={(e) => setProdName(e.target.value)}
                    placeHolder="Product Name" />

                <Input type='number' value={prodPrice}
                    onChange={(e) => setProdPrice(e.target.value)}
                    placeHolder="Product Price" />

                <Input type='file' value={prodImg}
                    onChange={(e) => setProdImg(e.target.value)}
                    placeHolder="Product Image" />

                <button onSubmit={handleProduct} className="bg-[#D78484] border-none w-[10rem] p-4">Save Product</button>
            </form>

           
        </>

    )
}

export default AddProduct