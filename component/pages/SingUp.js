import React, { useState } from "react";
import "../../../App.css";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Assuming you have a backend endpoint for handling contact form submissions
    const backendEndpoint = "http://your-backend-server-endpoint";

    // Example using fetch to send the data to the backend
    fetch(backendEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log("Backend response:", data);
        // You can add more logic here based on the backend response
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
      });
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
