import { useState,useEffect } from "react";
import "./css/mainmenu.css"
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

export default function MainMenu(){

    const [categories,SetCategories]=useState([])
    const [options,setOptions]=useState("")
    const [optionTitle,setOptionTitle]=useState("")
    const [categoryID,setCategoryID]=useState("")
    const [itemList,setItemList]=useState("")

    //const [subCategoryID,setSubCategoryID]=useState("")

    function showCategory(id){
        fetch(`http://localhost:8000/categories/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            setOptions(data.SubCat);
            setOptionTitle(data.Category)
            setCategoryID(data.id)
        });
    }


const handleSubCatItems =(subid)=>{
    const params = new URLSearchParams({
        'catId':categoryID,
        'subid':subid
    })
    fetch(`http://localhost:8000/Items?${params}`).then((res) => {
        return res.json();
      })
      .then((data) => {

        setItemList(data)
       }); 

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
        <MenuBar menuitems={categories} showCategory={showCategory}/>
        <div className="container">
            <h1>Main Menu {optionTitle? " - "+ optionTitle.toUpperCase(): ""} </h1>
            <div className="flex-container">
                <div>
                    {options && options.length && options.map((opt)=>{
                    return(
                        <ul className="sub-items">
                            <li key={opt.id}>
                                <a href="#"
                                onClick={()=>handleSubCatItems(opt.subid)}
                                >
                                    {opt.item.toUpperCase()}
                                </a>
                            </li>
                        </ul>
                    )
                })}
                </div>
                <div className="flex-container">
                    {
                        itemList && itemList.length && itemList.map((item)=>{
                            return(
                                <div className="main-card" key={item.id}>

                                    <div className="item-hdr">{item.id}</div>
                                    <div>
                                       <img width="150px" src={`../images/sub/${item.id}.png`}/> 
                                    </div>
                                    <div className="item-desc">
                                        {item.type}<br/>
                                        {item.brand}<br/>
                                        {item.collection}<br/>
                                        {item.finish}<br/>
                                        {item.size}<br/>
                                        {item.features}<br/>
                                        ${item.price} {item.unit}                                        
                                    </div>

                                    
                                    
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>     
        </div>
        </>
    )
}