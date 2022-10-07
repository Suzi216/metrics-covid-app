import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showdetail } from '../redux/home/home';
import './Home.css';

const Coinsdisplay = (props) => {
  const {
    baseId, baseSymbol, priceUsd,
  } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(showdetail(baseSymbol));
  };

  return (
    <>
      <tr className={baseId}>
        <td>
          <Link to={`/detail/:${baseSymbol}`}>
            <button type="button" onClick={clickHandler} className="arrow right"> </button>
          </Link>
        </td>
        <td>
          {baseSymbol}
        </td>
        <td className="price">
          {priceUsd}
        </td>
      </tr>
    </>
  );
};

export default Coinsdisplay;
