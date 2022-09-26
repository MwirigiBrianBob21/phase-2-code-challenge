import React from "react";

function Transaction({ transactions, search }) {
  return (
    <>
      {transactions
        .filter((transaction) =>
          transaction.description.toLowerCase().includes(search.toLowerCase())
        )
        .filter((transaction) =>
          transaction.category.toLowerCase().includes(search.toLowerCase())
        )
        .map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
    </>
  );
}

export default Transaction;
