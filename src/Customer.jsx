import { useState, useEffect } from "react";
import "./css/mainmenu.css"
export default function Customer(){
const [models,setModels]=useState([])
const [customers,setCustomers]=useState([])

    async function getCustomerData(){
        const respCustomers =await fetch("http://localhost:8000/Customers")
        const customerList = await respCustomers.json()
        setCustomers(customerList)

        const respModels =await fetch("http://localhost:8000/Models")
        const modelList = await respModels.json()
        setModels(modelList)
    }

    useEffect(() => {
        getCustomerData()
      }, []);

    return(
        <>
        <div className="container">
            <h1>Customer</h1>
            <div className="flex-container">
                <div className="control-card">
                    <label>Customer</label>
                    <input type="text" className="input-control" />
                    <label>House Model & Base Price</label>
                    <select type="text" className="input-control">
                        {models && models.length && models.map((mdl)=>{
                            return(
                                <option value={mdl.id}>{mdl.Model} - ${mdl.Base}</option>
                            )
                        })}
                    </select>
                    <label>Lot#</label>
                    <input type="text" className="input-control" />
                </div>
                
                <div className="control-card">
                <label>Customers List</label>
                        {customers && customers.length && customers.map((cust)=>{
                            return(
                                <p>
                                    <a href="#">{cust.Name}</a> - 
                                Model: {cust.Model} - 
                                Base Price: {cust.Base} - 
                                Lot#:{cust.LotNum}
                                </p>
                            )
                        })}
                </div>                
            </div>

        </div>
        </>
    )
}