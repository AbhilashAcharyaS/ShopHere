import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//COD
const placeOrder=async (req,res)=>{
    try {
        const {userId, items, amount, address} = req.body;
        const orderData= {
            userId, items, amount,address, paymentMethod:"COD", payment:false, date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{})

        res.json({success:true, message:"Order Placed!"})
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
const placeOrderStripe=async (req,res)=>{
    // try {
    //     const {userId, items, amount, address} = req.body;
    //     const orderData= {
    //         userId, items, amount,address, paymentMethod:"Stripe", payment:false, date:Date.now()
    //     }

    //     const newOrder = new orderModel(orderData)
    //     await newOrder.save()

    //     await userModel.findByIdAndUpdate(userId,{})

    //     res.json({success:true, message:"Order Placed!"})
        
    // } catch (error) {
    //     console.log(error);
    //     res.json({ success: false, message: error.message });
    // }
}
const placeOrderRazorPay=async (req,res)=>{
    // try {
    //     const {userId, items, amount, address} = req.body;
    //     const orderData= {
    //         userId, items, amount,address, paymentMethod:"Razorpay", payment:false, date:Date.now()
    //     }

    //     const newOrder = new orderModel(orderData)
    //     await newOrder.save()

    //     await userModel.findByIdAndUpdate(userId,{})

    //     res.json({success:true, message:"Order Placed!"})
        
    // } catch (error) {
    //     console.log(error);
    //     res.json({ success: false, message: error.message });
    // }
}

// for admin
const allOrders=async (req,res)=>{
    try {
        const orders = await orderModel.find({});
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// for my order page
const userOrders=async (req,res)=>{
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId});
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// for admin
const updateStatus=async (req,res)=>{
    try {
        const {orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId,{status});
        res.json({success:true, message:"Status updated!"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {placeOrder, placeOrderRazorPay, placeOrderStripe, allOrders, userOrders, updateStatus}