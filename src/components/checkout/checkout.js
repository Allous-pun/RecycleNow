import React, { useState } from "react";
import safImage from "./saf.png"; // M-Pesa logo/image
import paylineImage from "./payline.png"; // Payline logo/image
import mpesaImage from "./mpesa.webp"; // M-Pesa logo for popup
import paylineLogo from "./pay.png"; // Payline logo for popup
import "./checkout.css"; 
import axios from 'axios';
// import moment from 'moment';
// import { Buffer } from 'buffer';


// let cachedToken = null;



// const getToken = async (req, res, next) => {
//   try {
//       if (cachedToken && Date.now() < cachedToken.expiryTime) {
//           req.token = cachedToken.access_token;
//           return next();
//       }

//       const consumerKey = process.env.M_PESA_CONSUMER_KEY;
//       const consumerSecret = process.env.M_PESA_CONSUMER_SECRET;

//       // Using btoa instead of Buffer in the browser environment
//       const auth = btoa(`${consumerKey}:${consumerSecret}`);

//       const response = await axios.get(
//           'https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
//           {
//               headers: {
//                   Authorization: `Basic ${auth}`,
//               },
//           }
//       );





//       const { access_token, expires_in } = response.data;
//       const expiryTime = Date.now() + expires_in * 1000;

//       cachedToken = { access_token, expiryTime };
//       req.token = access_token;
//       next();
//   } catch (error) {
//       console.error('Error generating token:', error.message);
//       res.status(500).json({
//           error: 'Failed to authenticate with Safaricom API.',
//           message: error.message,
//       });
//   }
// };




// STK Push Function
// const stkPush = async (token, phoneNumber, amount) => {
//   try {
//     // Validate inputs
//     if (!token || !phoneNumber || !amount) {
//       throw new Error("Missing required parameters.");
//     }

//     // Generate timestamp in format YYYYMMDDHHMMSS
//     const timestamp = moment().format("YYYYMMDDHHmmss");

//     // Generate password for STK Push
//     const businessShortCode = process.env.M_PESA_SHORT_CODE;
//     const passKey = process.env.M_PESA_PASSKEY;
//     const password = Buffer.from(`${businessShortCode}${passKey}${timestamp}`).toString("base64");

//     // Prepare request body for STK Push
//     const requestBody = {
//       BusinessShortCode: businessShortCode,
//       Password: password,
//       Timestamp: timestamp,
//       TransactionType: "CustomerPayBillOnline",
//       Amount: amount,
//       PartyA: phoneNumber,
//       PartyB: businessShortCode,
//       PhoneNumber: phoneNumber,
//       CallBackURL: process.env.CALLBACK_URL,
//       AccountReference: phoneNumber,
//       TransactionDesc: "Payment for goods/services",
//     };

//     console.log("Sending STK Push request:", requestBody);

//     // Make the STK Push API call
//     const response = await axios.post(
//       "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
//       requestBody,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log("STK Push Response:", response.data);

//     // Handle response
//     if (response.data.ResponseCode === "0") {
//       return {
//         success: true,
//         message: "STK push initiated successfully.",
//         data: response.data,
//       };
//     } else {
//       return {
//         success: false,
//         message: "Failed to initiate STK push.",
//         error: response.data.ResponseDescription,
//       };
//     }
//   } catch (error) {
//     console.error("Error during STK Push:", error.message);
//     if (error.response) {
//       console.error("Safaricom API Error:", error.response.data);
//       return {
//         success: false,
//         message: "Safaricom API Error",
//         error: error.response.data,
//       };
//     }
//     return {
//       success: false,
//       message: "Internal Server Error",
//       error: error.message,
//     };
//   }
// };


// const handleCallback = async (req, res) => {
//   try {
//       const callbackData = req.body;
//       const result_code = callbackData.Body.stkCallback.ResultCode;
//       if (result_code !== 0) {
//           const error_message = callbackData.Body.stkCallback.ResultDesc;
//           return res.status(400).json({
//               ResultCode: result_code,
//               ResultDesc: error_message,
//           });
//       }

//       const body = callbackData.Body.stkCallback.CallbackMetadata;
//       const amount = body.Item.find((obj) => obj.Name === "Amount").Value;
//       const mpesaCode = body.Item.find((obj) => obj.Name === "MpesaReceiptNumber").Value;
//       const phone = body.Item.find((obj) => obj.Name === "PhoneNumber").Value;

//       return res.status(200).json({
//           message: "Callback processed successfully.",
//           transaction: { amount, mpesaCode, phone },
//       });
//   } catch (error) {
//       return res.status(500).json({
//           error: "An error occurred while processing the callback.",
//       });
//   }
// };



// STK Query (Check payment status)
// const stkQuery = async (req, res) => {
//   try {
//       const { checkoutRequestID } = req.body;
//       if (!checkoutRequestID) {
//           return res.status(400).json({ error: "CheckoutRequestID is required" });
//       }

//       const timestamp = moment().format("YYYYMMDDHHmmss");
//       const password = Buffer.from(
//           `${process.env.M_PESA_SHORT_CODE}${process.env.M_PESA_PASSKEY}${timestamp}`
//       ).toString("base64");

//       const requestBody = {
//           BusinessShortCode: process.env.M_PESA_SHORT_CODE,
//           Password: password,
//           Timestamp: timestamp,
//           CheckoutRequestID: checkoutRequestID,
//       };

//       const response = await axios.post(
//           `${process.env.BASE_URL}/mpesa/stkpushquery/v1/query`,
//           requestBody,
//           {
//               headers: {
//                   Authorization: `Bearer ${req.token}`,
//               },
//           }
//       );

//       const { ResultCode, ResultDesc } = response.data;

//       if (ResultCode === "0") {
//           return res.status(200).json({
//               status: "Success",
//               message: "Payment successful",
//               data: response.data,
//           });
//       } else {
//           return res.status(400).json({
//               status: "Failure",
//               message: ResultDesc,
//               data: response.data,
//           });
//       }
//   } catch (error) {
//       return res.status(500).json({
//           error: "An error occurred while querying the STK payment status.",
//           details: error.response?.data || error.message,
//       });
//   }
// };


const Checkout = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    plan: "",
    amountUSD: "",
    amountKES: "",
    currency: "USD",
    name: "",
    phoneNumber: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const USD_TO_KES_RATE = 130; // Conversion rate

  // Convert USD to KES
  const convertToKES = (amountUSD) => {
    return (amountUSD * USD_TO_KES_RATE).toFixed(2);
  };

  // Handle payment method selection
  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
    setShowForm(true);
    setErrorMessage("");
  };

  // Handle closing the payment form
  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedPaymentMethod(null);
    setErrorMessage("");
    setPaymentDetails({
      plan: "",
      amountUSD: "",
      amountKES: "",
      currency: "USD",
      name: "",
      phoneNumber: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    });
  };

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number format
    if (name === "phoneNumber") {
      const safaricomNumberRegex = /^(?:\+2547\d{7}|07\d{8})$/; // Correct regex

      if (!safaricomNumberRegex.test(value)) {
        setErrorMessage("Invalid Safaricom number. Use +2547... or 07...");
      } else {
        setErrorMessage(""); // Clear error message if the number is valid
      }
    }

    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Update amount based on selected plan
    if (name === "plan") {
      let selectedAmountUSD = "";
      switch (value) {
        case "Basic":
          selectedAmountUSD = "1999";
          break;
        case "Pro":
          selectedAmountUSD = "3799";
          break;
        case "Enterprise":
          selectedAmountUSD = "5499";
          break;
        default:
          selectedAmountUSD = "";
      }
      setPaymentDetails((prev) => ({
        ...prev,
        amountUSD: selectedAmountUSD,
        amountKES: selectedAmountUSD ? convertToKES(selectedAmountUSD) : "",
      }));
    }
  };

  const handleMpesaPayment = async () => {
    let { phoneNumber, amountKES } = paymentDetails;

    // Validate inputs
    if (!phoneNumber || !amountKES) {
        setErrorMessage("Please enter your phone number and select a plan.");
        return;
    }

    // Format phone number
    if (phoneNumber.startsWith('07') && phoneNumber.length === 10) {
        phoneNumber = '254' + phoneNumber.substring(1);
    } else if (phoneNumber.length !== 12 || !phoneNumber.startsWith('254')) {
        setErrorMessage("Invalid phone number format.");
        return;
    }

    // Convert amount to a number
    const amount = parseFloat(amountKES);
    if (isNaN(amount)) {
        setErrorMessage("Invalid amount.");
        return;
    }

    try {
        // Log the request data
        console.log("Sending STK push request with:", { phoneNumber, amount });

        // Make an API call to the server to initiate the STK push
        const response = await axios.post('https://kbackend-4dak.onrender.com/api/stk', {
            phoneNumber,
            amount,
        });
        

        // Handle the response from the server
        if (response.data && response.data.message) {
            alert(response.data.message); // Success message from the server
            setShowForm(false);
        } else {
            throw new Error("Failed to initiate M-Pesa payment.");
        }
    } catch (error) {
        setErrorMessage(`M-Pesa Payment Failed: ${error.message}`);
    }
};


  // Handle Payline form submission
  const handleSubmit = async () => {
    const { plan, name, cardNumber, expiryMonth, expiryYear, cvv, amountUSD, currency } = paymentDetails;

    if (!plan || !name || !cardNumber || !expiryMonth || !expiryYear || !cvv) {
      setErrorMessage("Please fill out all fields before proceeding.");
      return;
    }

    try {
      const response = await fetch("https://api.payline.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, cardNumber, expiryMonth, expiryYear, cvv, amount: amountUSD, currency }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "An unexpected error occurred.");
      }

      const result = await response.json();
      alert(`Payment Success: ${result.message}. Our team will reach out to you shortly.`);
      setShowForm(false);
    } catch (error) {
      setErrorMessage(`Payline Payment Failed: ${error.message}`);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <h3>Select Your Payment Plan</h3>

      <div className="payment-options">
        <div className="payment-card" onClick={() => handlePaymentSelection("mpesa")}>
          <img src={safImage} alt="M-Pesa" className="payment-image" />
          <h4>M-Pesa</h4>
        </div>
        <div className="payment-card" onClick={() => handlePaymentSelection("payline")}>
          <img src={paylineImage} alt="Payline" className="payment-image" />
          <h4>Payline</h4>
        </div>
      </div>
      
      {/* M-Pesa Payment Form */}
      {showForm && selectedPaymentMethod === "mpesa" && (
        <div className="popup-form">
          <div className="form-content">
            <img src={mpesaImage} alt="M-Pesa" className="form-image" />
            <h3>M-Pesa Payment</h3>
            <div className="form-field">
              <label htmlFor="plan">Plan:</label>
              <select id="plan" name="plan" value={paymentDetails.plan || ""} onChange={handleInputChange}>
                <option value="">Select a plan</option>
                <option value="Basic">Basic - $1999</option>
                <option value="Pro">Pro - $3799</option>
                <option value="Enterprise">Enterprise - $5499</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="tel"
                id="phone-number"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={paymentDetails.phoneNumber || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="amount-kes">Amount (KES):</label>
              <input
                type="text"
                id="amount-kes"
                name="amountKES"
                value={paymentDetails.amountKES || ""}
                readOnly
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="proceed-button" onClick={handleMpesaPayment}>
              Proceed
            </button>
            <button className="close-button" onClick={handleCloseForm}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Payline Payment Form */}
      {showForm && selectedPaymentMethod === "payline" && (
        <div className="popup-form">
          <div className="form-content">
            <img src={paylineLogo} alt="Payline" className="form-image" />
            <h3>Payline Payment</h3>
            <div className="form-field">
              <label htmlFor="plan">Select Plan:</label>
              <select id="plan" name="plan" value={paymentDetails.plan} onChange={handleInputChange}>
                <option value="">--Select a Plan--</option>
                <option value="Basic">Basic Plan - $1999 / project</option>
                <option value="Pro">Pro Plan - $3799 / project</option>
                <option value="Enterprise">Enterprise Plan - $5499 / project</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="name">Cardholder Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={paymentDetails.name || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Enter your card number"
                value={paymentDetails.cardNumber || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="expiryMonth">Expiry Month:</label>
              <input
                type="text"
                id="expiryMonth"
                name="expiryMonth"
                placeholder="MM"
                value={paymentDetails.expiryMonth || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="expiryYear">Expiry Year:</label>
              <input
                type="text"
                id="expiryYear"
                name="expiryYear"
                placeholder="YYYY"
                value={paymentDetails.expiryYear || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="Enter CVV"
                value={paymentDetails.cvv || ""}
                onChange={handleInputChange}
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="proceed-button" onClick={handleSubmit}>
              Pay Now
            </button>
            <button className="close-button" onClick={handleCloseForm}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Checkout;