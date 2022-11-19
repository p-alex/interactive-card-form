import { IState } from '../../App';
import './Cards.css';

const Cards = ({ name, number, month, year, cvc }: IState) => {
  return (
    <div className="cards">
      <div className="cardFront card">
        <div className="cardFront__header">
          <img
            className="cardFront__logo"
            width="84"
            height="47"
            alt=""
            src="/images/card-logo.svg"
          />
        </div>
        <p className="cardFront__code">{number ? number : '0000 0000 0000 0000'}</p>
        <div className="cardFront__details">
          <p className="cardFront__name">{name ? name : 'JANE APPLESEED'}</p>
          <p className="cardFront__expiry">
            {month ? month : '00'}/{year ? year : '00'}
          </p>
        </div>
      </div>
      <div className="cardBack card">
        <p className="cardBack__cvc">{cvc ? cvc : '000'}</p>
      </div>
    </div>
  );
};

export default Cards;
