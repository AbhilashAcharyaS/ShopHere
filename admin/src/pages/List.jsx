import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";
import { useContext } from "react";
import {useNavigate} from "react-router-dom"

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const res = await axios.get(backendURL + "/api/product/list");
      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error("Error fetching data!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
        if(window.confirm("Are you sure to delete this item?")){
        
            const res = await axios.post(
                backendURL + "/api/product/remove",
                { id },
                { headers: { token } },
            );
            if (res.data.success) {
                toast.success(res.data.message);
                await getProducts();
            } else {
                toast.error(res.data.message);
            }
        }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editSingleProduct=(productId)=>{
    navigate("/edit/"+productId)
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12" src={item.image[0]} alt="product" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <div className="flex justify-center gap-4">
              <p
                onClick={() => removeProduct(item._id)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </p>
              <p className="cursor-pointer" onClick={()=>{editSingleProduct(item._id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
