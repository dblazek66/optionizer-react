import { useState,useEffect } from "react";
import "./css/mainmenu.css"
export default function Administration(){
    const [categories,SetCategories]=useState([])
    const [categoryItems,SetCategoryItems]=useState([])

    function handleCategoryItems(e){
        SetCategoryItems(categories.find((item)=>item.id ==e)?.SubCat || [])
    }


    useEffect(() => {
        fetch("http://localhost:8000/categories")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            SetCategories(data)
          });
      }, []);
    return(
        <>
        <div className="container">
            <h1>Administration</h1>
            <div className="control-card">
                <label>Category</label>
                <select 
                    className="input-control"
                    onChange={(e)=>handleCategoryItems(e.target.value)}
                >
                    <option></option>
                    {categories && categories.length && categories.map((item)=>{
                        return(
                            <option value={item.id}>{item.Category}</option>
                        )
                    })}
                </select>
                <label>Category Item</label>
                <select className="input-control">
                    {categoryItems && categoryItems.length && categoryItems.map((item)=>{
                        return(
                            <option value={item.subid}>{item.item}</option>
                        )
                    })}
                </select>
            </div>
            
        </div>
        

        </>
    )
}