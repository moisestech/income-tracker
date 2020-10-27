import "./index.css";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import List from "../../components/List";

export default function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    console.log("INCOME TEMP: ", temp);
    setTotalIncome(temp);
  }, [income]);

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <Form income={income} setIncome={setIncome} />
      <List income={income} setIncome={setIncome} />
    </div>
  );
}
