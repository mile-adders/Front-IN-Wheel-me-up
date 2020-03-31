import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

toast.configure();

function Payment() {
  const [product] = React.useState({
    name: "mile adders",
    price: 100,
    description: "Cool car"
  });

  async function handleToken(token, _addresses) {
    const response = await axios.get(
      "http://localhost:8080/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
    
  }

  return (
    <div className="container">
      <div className="product">
        <h1>{product.name}</h1>
        <h3>On rental · ${product.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_yk8n2QnHnjhND20PVqoc0tQn00FY0IkQUA"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default Payment;
