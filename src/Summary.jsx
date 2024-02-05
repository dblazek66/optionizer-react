import "./css/module-accordian.css"
import { useState,useEffect } from "react"
export default function Summary(){
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
    function handleAccordian(e){
        if(e.target.classList != 'label')  return false
        e.currentTarget.classList.toggle('active')
    }

    return(
        <>
         <div className="accordion-body">
            <div className="accordion">
            <hr/>
            {categories && categories.length && categories.map((item)=>{
                return(
                    <>
                    <div className="container" onClick={(e)=>handleAccordian(e)}>
                        <div className="label">{item.Category.toUpperCase()}</div>
                        <div className="content">
                            {                                                              
                               item.SubCat.map((x)=>{
                                return (
                                    <>
                                    <div className="sub-cat-hdr">{x.item.toUpperCase()}</div >
                                    
                                    
                                    
                                    </>
                                    )
                               })

                            }
                        </div>
                    </div>
                    <hr/>
                    </>
                )

            })}
 

        </div>
        </div>
        </>
    )

    
}