import { Link } from "react-router-dom";
import "./css/navbar.css"
export default function MenuBar({menuitems,showCategory}){

    const handleMenuSelection = (id) =>{
        showCategory(id)
    }
    return(
        <>
        <div className="menunav">
        {menuitems && menuitems.length && menuitems.map((cat)=>{
                    return(
                        <a key={cat.id}
                        href="#" 
                        onClick={()=>handleMenuSelection(cat.id)}
                        >{cat.Category.toUpperCase()}</a>
                    )
                })}
        </div>
        </>
    )
}