import "../App.css";
import React, { useState } from "react";

export const EmailSection = () => {
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    const mail = formJson.mailContent;
    console.log(formJson.mailContent);
    fetch("http://localhost:8000/categorize", { method: "POST", content: mail })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="email-section">
      <h2 className="text-2xl font-bold mb-2">To the Moon</h2>

      <form method="post" onSubmit={handleSubmit}>
        <textarea
          className="border-2"
          name="mailContent"
          defaultValue="Here you can type your Email...."
          rows={10}
          cols={40}
        />
        <button className="btn" type="submit">
          Categorize Mail
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Result</h2>
        <div>Category: {result}</div>
      </div>
    </div>
  );
};

export default EmailSection;
