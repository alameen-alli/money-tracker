import React from "react";

const Transaction = ({ item, description, price, datetime, transactionType }) => {
  return (
    <div className="transaction">

    <div className="left">
      <div className="name">{item}</div>
      <div className="description">{description}</div>
    </div>

    <div className="right">
      <div className={`price ${transactionType}`}>{price}</div>
      <div className="datetime">{datetime}</div>
    </div>
  </div>
  );
};

export default Transaction;
