import CategoryCard from "../molecules/CategoryCard"
import Collection from "../molecules/Collection"

const Products = ({prods}) => {
    return (
      
      <div className="bg-[#D9D9D9] w-full h-auto flex flex-col items-center gap-10 p-6 lg:p-20">
            <Collection />
            <div className="max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-5">
                
            
              <CategoryCard />
          
            </div>
           
    </div>
  )
}

export default Products