import './Rates.css';
import rateInactive from '../../assets/icons/star-inactive.svg';
import rateActive from '../../assets/icons/star-active.svg';

function Rates({ rate }) {
  function createArrayRates(rate) {
    let arrayRates = [];
    for (let i = 0; i < 5; i++) {
      if (i < rate) {
        arrayRates.push(rateActive);
      } else {
        arrayRates.push(rateInactive);
      }
    }
    return arrayRates;
  }

  const rates = createArrayRates(rate);
  return (
    <div className="rate-container">
      {rates.map((rate, index) => (
        <figure className="rate-picto-container" key={`rate-${index}`}>
          <img className="rate-picto" src={rate} alt="" />
        </figure>
      ))}
    </div>
  );
}

export default Rates;
