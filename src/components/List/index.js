import "./list.css"
import PropTypes from 'prop-types';
import Item from '../Item';

export default function List({ income, setIncome }) {
  const removeIncome = i => {
    let temp = income.filter((v, index) => index != i);
    setIncome(temp);
  }

  const sortByDate = (a, b) => {
    return a.date - b.date;
  }

  return (
    <div className="income-list">
      {
        income.sort(sortByDate).map((value, index) => (
          <Item 
            key={index} 
            income={value} 
            index={index} 
            removeIncome={removeIncome}
          />
        ))
      }
    </div>
  )
}

List.propTypes = {
  income: PropTypes.array.isRequired,
  setIncome: PropTypes.func.isRequired
}