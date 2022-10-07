import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './detail.css';

const Detail = () => {
  const coins = useSelector((state) => state.covid);
  const oneCoin = coins.filter((coin) => (coin.show === true));

  return (
    <div className="table-container">
      <Link to="/">
        <p className="arrow-container"><i className="arrows left" /></p>
      </Link>
      <div><h1 className="header">Crypto Metrics</h1></div>
      <table>
        <div className="container-coins">
          {oneCoin.map((coin) => (
            <tr key={coin.baseSymbol} className="row">
              <td>
                Coin name:
                {' '}
                {coin.baseSymbol}
              </td>
              <td>
                Base id:
                {coin.baseId}
              </td>
              <td className="price">
                Price usd:
                {coin.priceUsd}
              </td>
              <td>
                Market price:
                {coin.exchangeId}
              </td>
              <td>
                {coin.priceUsd}
              </td>
              <td>
                {coin.quoteSymbol}
              </td>

            </tr>
          ))}
        </div>
      </table>
    </div>

  );
};

export default Detail;
