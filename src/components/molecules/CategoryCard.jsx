import { useEffect, useState } from "react";
import axios from "axios";

const CategoryCard = () => {
  const [zoom, setZoom] = useState(!!0);
  const Zoom = () => {
    setZoom(!zoom);
  };
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
    <>
    
     {prods.map((prod, key) => (
    <div onMouseEnter={Zoom} onMouseLeave={Zoom}>
      
        <div
          key={key._id}
          className={`${
            zoom ? "absolute" : ""
          } pb-7 flex flex-col rounded-md bg-white shadow-md border-none"}`}
        >
          <img src={`http://localhost:8000/api/${prod.prodImage}`}  className="w-full h-[10rem]" alt={prod.prodName} />
          <div className="px-4 ">
            <p className="font-bold">{prod.prodName}</p>
            <p className="font-semibold">{prod.prodPrice}</p>
            <div
              className={`${
                zoom
                  ? "lg:flex flex justify-center items-center  mt-4"
                  : "hidden"
              } `}
            >
              <a
                href=""
                className="bg-[#D78484] px-3 py-3 rounded-md  w-[10rem] text-white text-center"
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      
      </div>
      ))}</>
   
  );
};

export default CategoryCard;
