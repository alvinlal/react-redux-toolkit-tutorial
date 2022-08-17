import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

const IceCream = () => {
  const noOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecreams - {noOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order icecream</button>
      <button onClick={() => dispatch(restocked(3))}>Restock icecream</button>
    </div>
  );
};

export default IceCream;
