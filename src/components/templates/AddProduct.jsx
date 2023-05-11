import { useState } from 'react'
import Input from '../atoms/Input'
import axios from 'axios';

const AddProduct = () => {
    const [prodName, setProdName] = useState('')
    const [prodPrice, setProdPrice] = useState(0)
    const [prodImg, setProdImg] = useState(null)
    

    const handleTextChange = (e) => {
        setProdName(e.target.value);
      };
    
      const handleNumberChange = (e) => {
        setProdPrice(e.target.value);
      };
    
      const handleImageChange = (e) => {
        setProdImg(e.target.files[0]);
      };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('prodName', prodName);
        formData.append('prodPrice', prodPrice);
        formData.append('prodImage', prodImg);
        
        try {
          await axios.post('http://localhost:8000/api/products', formData);
          alert('Data created successfully');
        } catch (error) {
          console.log(error);
          alert('Error creating data');
        }
      };
  
    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center'>
                <Input type='text' value={prodName}
                    onChange={handleTextChange}
                    placeHolder="Product Name" />


                <Input type='number' value={prodPrice}
                    onChange={handleNumberChange}
                    placeHolder="Product Price" />

                <Input type='file' 
                    onChange={handleImageChange}
                    placeHolder="Product Image" />

                <button type='submit' className="bg-[#D78484] border-none w-[10rem] p-4">Save Product</button>
            </form>

           
        </>

    )
}

export default AddProduct