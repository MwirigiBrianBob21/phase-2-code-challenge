import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API_URL = "http://localhost:8001/transactions/";

function AccountContainer() {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [transactions, setTransactions] = useState([]);

  const [search, setSearch] = useState("");

  function addTransaction(newTransaction) {
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const transactionObj = {
      date: date,
      description: description,
      category: category,
      amount: number,
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionObj),
    })
      .then((response) => response.json())
      .then((transaction) => addTransaction(transaction));
  }

  return (
    <div>
      <Search search={search} onSearchChange={setSearch} />
      <AddTransactionForm
        handleSubmit={handleSubmit}
        setCategory={setCategory}
        setDescription={setDescription}
        setDate={setDate}
        setAmount={setNumber}
        date={date}
        description={description}
        category={category}
        amount={number}
      />
      <TransactionsList
        transactions={transactions}
        setTransactions={setTransactions}
        search={search}
      />
    </div>
  );
}

export default AccountContainer;
