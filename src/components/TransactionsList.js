import React, { useEffect } from "react";
import Transaction from "./Transaction";
const API_URL = "http://localhost:8001/transactions/";

function TransactionsList({ transactions, setTransactions, search }) {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  };

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}

        <Transaction transactions={transactions} search={search} />
      </tbody>
    </table>
  );
}

export default TransactionsList;
