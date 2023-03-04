// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import Stripe from "stripe";
const stripe = new Stripe(sk_test_51MTIQzSC64iVvgX9998aB8IE1icPOLoBHn25VufgrBo6IoY4SZhqdwQ0aFWtJLt0BcEofbD336WoJdHxP7v3jOAu003I9lwHfK);
export default async function handler(req, res) {
  if(req.method==="POST"){
    try{

    } catch(e){
         res.status(500).json({ statusCode:500,message:error.message})

    }
  }
}
