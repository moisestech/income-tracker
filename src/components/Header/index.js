import PropTypes from 'prop-types';

export default function Header({totalIncome}) {
  return (
    <header>
      <h1>Income Tracker</h1>
      <div className="total-income">£{totalIncome}</div>
    </header>
  );
}

Header.propTypes = {
  totalIncome: PropTypes.number.isRequired
}