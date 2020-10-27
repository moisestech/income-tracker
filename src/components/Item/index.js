import "./item.css";
export default function Item({ income, index, removeIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };

  console.log("IncomeForm DATE:>> ", date);

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        x
      </button>
      <div className="desc">{income.desc}</div>
      <div className="price">£{income.price}</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
    </div>
  );
}
