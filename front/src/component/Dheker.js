import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import newLine from "../helper/newLine";
import { FaRedo } from "react-icons/fa";
import { adhkarActions } from "../redux/slice/adhkarSlice";
function Dheker({ zikr, type, index }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.adhkar.adhkarCount)[type][index];
  const resetCount = (type, index) => {
    dispatch(adhkarActions.resetCounter({ type, index }));
  };
  return (
    <Fragment key={zikr._id}>
      <div className="ziker__content">{newLine(zikr.zekr)}</div>
      <div className="ziker__source">{zikr.reference}</div>
      <div className="ziker__description">{zikr.description}</div>
      {+zikr.count > 0 && (
        <button
          className="ziker__count"
          onClick={resetCount.bind(null, type, index)}
        >
          {!zikr.done ? count.toString().padStart(2, "0") : <FaRedo />}
        </button>
      )}
    </Fragment>
  );
}
export default Dheker;
