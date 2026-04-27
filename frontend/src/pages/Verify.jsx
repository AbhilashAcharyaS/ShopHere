import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [serachParams, setSearchParams] = useSearchParams();
  const success = serachParams.get("success");
  const orderId = serachParams.get("orderId");

  const verifyPayment = async () => {
    try {
      if(!token) return null;      
      const res= await axios.post(backendUrl+"/api/order/verifyStripe",{orderId,success},{headers:{token}})
      if(res.data.success){
        toast(res.data.message)
        navigate("/orders")
        setCartItems({})
      }
      else{
        navigate("/cart")
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return <div>Verify</div>;
};

export default Verify;
