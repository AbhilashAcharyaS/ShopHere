import axios from "axios";
import React, { useState } from "react";
import { backendURL } from "../App";
import { toast } from "react-toastify";
import {useNavigate, useParams} from "react-router-dom"
import { useEffect } from "react";

const Edit = ({ token }) => {

    const {productId}= useParams();
    const navigate= useNavigate()
    // const [product,setProduct]= useState({})

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const getProductInfo=async()=>{
    try {
      const res = await axios.post(backendURL + "/api/product/single",{productId});
      if (res.data.success) {
        // setProduct(res.data.product);  
        setName(res.data.product.name);
        setDescription(res.data.product.description);
        res.data.product.image[0] && setImage1(res.data.product.image[0]);
        res.data.product.image[1] && setImage2(res.data.product.image[1]);
        res.data.product.image[2] && setImage3(res.data.product.image[2]);
        res.data.product.image[3] && setImage4(res.data.product.image[3]);
        setPrice(res.data.product.price); 
        setCategory(res.data.product.category)    
        setSubCategory(res.data.product.subCategory) 
        setBestSeller(!!res.data.product.bestSeller)
        setSizes(res.data.product.sizes)
      } else {
        toast.error("Error fetching data!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {

      if(!price){
        toast.error("Price is required");
        return;
      }
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

//       for (let [key, value] of formData.entries()) {
//     console.log(key,":", value);
// }
      

      const response = await axios.put(
        backendURL + "/api/product/edit/"+productId,
        formData,
        { headers: { token } },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        navigate("/list")
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(()=>{
    getProductInfo()
  },[])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      <div>
        <p className="mb-2 ">Upload Image</p>
        <div className="flex gap-1">
          <label htmlFor="image1">
            <img
              className="w-20 m-2 border rounded-xl hover:scale-110 trasition duration-500 cursor-pointer mt-4"
              src={
                image1 instanceof File
                  ? URL.createObjectURL(image1) : image1 || "https://static.vecteezy.com/system/resources/previews/055/428/287/non_2x/image-upload-icon-with-arrow-and-photo-design-vector.jpg"
              }
              alt="product image"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              hidden
              id="image1"
              name="image1"
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20 m-2 border rounded-xl hover:scale-110 trasition duration-500 cursor-pointer mt-4"
              src={
                image2 instanceof File
                  ? URL.createObjectURL(image2) :image2 || "https://static.vecteezy.com/system/resources/previews/055/428/287/non_2x/image-upload-icon-with-arrow-and-photo-design-vector.jpg"
              }
              alt="product image"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              hidden
              id="image2" name="image2"
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20 m-2 border rounded-xl hover:scale-110 trasition duration-500 cursor-pointer mt-4"
              src={
                image3 instanceof File
                  ? URL.createObjectURL(image3): image3 || "https://static.vecteezy.com/system/resources/previews/055/428/287/non_2x/image-upload-icon-with-arrow-and-photo-design-vector.jpg"
              
              }
              alt="product image"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              hidden
              id="image3"
              name="image3"
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20 m-2 border rounded-xl hover:scale-110 trasition duration-500 cursor-pointer mt-4"
              src={
                image4 instanceof File
                  ? URL.createObjectURL(image4) : image4 || "https://static.vecteezy.com/system/resources/previews/055/428/287/non_2x/image-upload-icon-with-arrow-and-photo-design-vector.jpg"
                  
              }
              alt="product image"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              hidden
              id="image4"
              name="image4"
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full max-w-125 px-3 py-2"
          type="text"
          placeholder="Type here"
          required
          name="name"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full max-w-125 px-3 py-2"
          type="text"
          placeholder="Write the description here"
          required
          name="description"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
            name="category"
          >
            <option value="Men" >Men</option>
            <option value="Women" >Women</option>
            <option value="Kids" >Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Sub-Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory} name="subCategory"
            className="w-full px-3 py-2"
          >
            <option value="Topwear" >Topwear</option>
            <option value="Bottomwear" >Bottomwear</option>
            <option value="Winterwear" >Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
            value={price}
            onChange={(e) =>{setPrice(e.target.value)}}
            type="number" name="price"
            className="w-full px-3 py-2 sm:w-30"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Available Product Sizes</p>
        <div className="flex gap-3 ">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item !== "S")
                  : [...prev, "S"],
              )
            }
          >
            <p
              className={`${sizes.includes("S") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              S
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item !== "M")
                  : [...prev, "M"],
              )
            }
          >
            <p
              className={`${sizes.includes("M") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item !== "L")
                  : [...prev, "L"],
              )
            }
          >
            <p
              className={`${sizes.includes("L") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item !== "XL")
                  : [...prev, "XL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XL") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item !== "XXL")
                  : [...prev, "XXL"],
              )
            }
          >
            <p
              className={`${sizes.includes("XXL") ? "bg-green-200" : "bg-slate-100"} px-3 py-1 cursor-pointer`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onChange={(e) => setBestSeller(e.target.checked)}
          checked={bestSeller}
          className="cursor-pointer"
          type="checkbox"
          id="bestSeller"
          name="bestSeller"
        />
        <label htmlFor="bestSeller">Add to bestseller</label>
      </div>

      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white rounded-lg cursor-pointer"
      >
        UPDATE
      </button>
    </form>
  );
};

export default Edit;
