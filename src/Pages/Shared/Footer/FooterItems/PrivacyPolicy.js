import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#303030",
        color: "white",
      }}
    >
      <div>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>Legal</li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>
            Privacy Policy
          </li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>
            Cookie Policy
          </li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>
            Submit your privacy request
          </li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>Contacts</li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>
            Media Centre
          </li>
          <li style={{ marginRight: "20px", fontSize: "12px" }}>Career</li>
          <li style={{ fontSize: "12px" }}>Corporate</li>
        </ul>
      </div>
      <div>
        <h3 style={{ marginRight: "20px" }}>INTERNATIONAL</h3>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
