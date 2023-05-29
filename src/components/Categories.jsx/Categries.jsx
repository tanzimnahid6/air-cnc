import React from "react"
import { categories } from "./categoriesData"
import CategoryBox from "./CategoryBox"
const Categories = () => {
  console.log(categories)
  return (
    <div>
      <div className="flex pt-4 flex-roe items-center gap-8 justify-between overflow-x-auto">  
       {/* if i use overflow-x-auto then there will arrive a scroll bar */}
        {
            categories.map(item=> <CategoryBox label={item.label} icon={item.icon} key={item.label} ></CategoryBox>)
        }
       
      </div>
    </div>
  )
}

export default Categories
