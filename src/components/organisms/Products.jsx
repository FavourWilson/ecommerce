import axios from "axios";
import CategoryCard from "../molecules/CategoryCard"
import Collection from "../molecules/Collection"
import { useEffect, useState } from "react";

const Products = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProds(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductList();
  }, []);

    return (
      
      <div className="bg-[#D9D9D9] w-full h-auto flex flex-col items-center gap-10 p-6 lg:p-20">
            <Collection />
            <div className="max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5">
                {prods.map((prod,key) => (
            
              <CategoryCard prod={prod} key={key} />
          ))}
            </div>
           
    </div>
  )
}

export default Products