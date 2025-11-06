import React, { useState } from "react";
import axios from "axios";

function AdminProduct(){

    const product = {
        name:"",
        img:"",
        count:""
    }
    const[productlist,setproductlist]=useState(product)
    // const[productdata,setproductdata]=useState([])
    const[value,setvalu]=useState(product)


    function onChange(key, value) {
  setproductlist((prev) => {
    const updated = { ...prev, [key]: value }; 
    return updated;
  });

  setvalu((prev) => {
    return { ...prev, [key]: value };
  });
}
   function submit(){
        // setproductdata([...productdata,productlist])
        axios.post("http://localhost:5000/uplodincloudinary",{value:value})
        // img uplod in cloudnary
        // axios.post("http://localhost:5000/add",{value:value}).then(function(){
        //     console.log("added successfuly")
        //  }).catch(function(err){
        //     console.log(err)
        //  })

         setproductlist(product)

   }
 
    return(
      <div className="border border-dashed border-black flex flex-col ">
        <div>
       <label>productname</label> <input onChange={(e)=>{
        const value = e.target.value
        onChange("name",value)
       }} value={productlist.name} className="border border-black" type="text" name="" id="" />
        </div>
       <div>
       <label>productimg</label> <input 
  type="file" 
  className="border border-black"
  onChange={(e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      var value = reader.result; // base64 string
      console.log("Base64 Image:", value);
      onChange("img", value); // call with key "img"
    };
      reader.readAsDataURL(file);
  }}
/>
        </div>
        <div>
       <label>productcount</label> <input onChange={(e)=>{
        const value = e.target.value
        onChange("count",value)
       }}
       value={productlist.count} 
       className="border border-black" type="text" name="" id="" />
        </div>
        <div>
            <button onClick={submit} className="bg-blue-500 p-2 rounded ">submit</button>
        </div>
      </div>
    
             

     
    )
}

export default AdminProduct