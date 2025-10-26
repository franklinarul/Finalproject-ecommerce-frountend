import React, { useState } from "react";
import axios from "axios";
function KitchenAppliances() {

    const product = {
        name: "",
        cprice: "",
        oprice: "",
        rating: "",
        image: "",

    }

    const [productlist, setproductlist] = useState(product)


    function onchange(key, value) {
        console.log(`${key, value}`)
        setproductlist((prev) => {
            return ({ ...prev, [key]: value })
        }
        )
    }

    function onsubmit() {
        axios.post("http://localhost:5000/Kitchenappliances",{ value: productlist })
    }
    console.log(typeof(productlist.rating))

    return (
        <div>
            <h1>Kitchen Appliances</h1>

            <div>
                <div>
                    <label>Product name</label><input onChange={(e) => {
                        const value = e.target.value
                        onchange("name", value)
                    }} type="text" />
                </div>

                <div className="flex">
                    <label>product ratings</label><input onChange={(e) => {
                        const value = e.target.value
                        onchange("rating", value)
                    }} type="text" />
                    <label htmlFor="">⭐⭐⭐⭐⭐</label><p>use this rating starts to fill the product rating</p>
                </div>
                <div>
                    <label>actual rate</label>
                    <input onChange={(e) => {
                        const value = e.target.value
                        onchange("cprice", value)
                    }} type="text" name="" id="" />
                </div>
                <div>
                    <label>current rate</label>
                    <input onChange={(e) => {
                        const value = e.target.value
                        onchange("oprice", value)
                    }} type="text" />
                </div>
                <div>
                    <label htmlFor="">product image</label>
                    <input
                        type="file"
                        className="border border-black"
                        onChange={(e) => {
                            var file = e.target.files[0];
                            var reader = new FileReader();
                            reader.onloadend = function () {
                                var value = reader.result; // base64 string
                                console.log("Base64 Image:", value);
                                onchange("image", value); // call with key "img"
                            };
                            reader.readAsDataURL(file);
                        }}
                    />
                </div>
                <div>
                    <button onClick={onsubmit}>submit</button>
                </div>
            </div>
        </div>
    )
}

export default KitchenAppliances