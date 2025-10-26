import React, { useState } from "react";
import axios from "axios";
function AdminAudioVedio(){
  
    const product = {
        name:"",
        cprice:"",
        oprice:"",
        rating:"",
        image:"",

    }

    const[productlist,setproductlist] = useState(product)
    

    function onchange(key,value){
        console.log(`${key,value}`)
       setproductlist((prev)=>{
          return ({...prev,[key]:value})
       }
    )}

    function onsubmit(){
        axios.post("http://localhost:5000/Audiovediouplode",{value:productlist})
    }
     console.log(productlist)
     
    return(
        <div>
            <h1>Audio Vedio</h1>

             <div>
                <div>
                   <label>Product name</label><input onChange={(e)=>{
                    const value = e.target.value
                    onchange("name",value)}} type="text" />
                </div>
               
                <div className="flex">
               <label>product ratings</label><input onChange={(e)=>{
                    const value = e.target.value
                    onchange("rating",value)}} type="text" />
                <label htmlFor="">⭐⭐⭐⭐⭐</label><p>use this rating starts to fill the product rating</p>
                </div>
                <div>
               <label>actual rate</label>
                <input onChange={(e)=>{
                    const value = e.target.value
                    onchange("cprice",value)}} type="text" name="" id="" />
                </div>
                <div>
               <label>current rate</label>
                <input onChange={(e)=>{
                    const value = e.target.value
                    onchange("oprice",value)}} type="text" />
                </div>
                <div>
                <label htmlFor="">product image</label>
                <input onChange={(e)=>{
                    const file = e.target.files[0]
                    const filereader = new FileReader()
                     filereader.onload = function(){
                        const value = filereader.result
                         onchange("image",value)
                         console.log(value)
                     }
                    filereader.readAsDataURL(file)
                   }} type="file" name="" id="" />
                </div>
                <div>
                    <button onClick={onsubmit}>submit</button>
                </div>
             </div>
        </div>
    )
}

export default AdminAudioVedio