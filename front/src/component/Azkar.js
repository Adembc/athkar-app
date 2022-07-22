import React from "react";
import groupBy from "../helper/groupby";
import ScrollButton from "./ScrollToTop";
import { adhkarActions } from "../redux/slice/adhkarSlice";
import Dheker from "./Dheker";
import { useDispatch } from "react-redux";

function Azkar({ azkar = [], type }) {
  const dispatch = useDispatch();
  const countDown = (type, index) => {
    dispatch(adhkarActions.setCount({ type, index }));
  };
  if (["prayer", "other"].includes(type)) {
    azkar = groupBy(azkar, "category");
  }
  return (
    <>
      <ScrollButton />
      <div className="azkar">
        {!Array.isArray(azkar) &&
          Object.keys(azkar).map((title) => {
            return (
              <>
                <div className="ziker__title" key={title}>
                  {title}
                </div>
                {azkar[title].map((zikr, i) => {
                  return (
                    <div
                      key={zikr._id || i}
                      className={`ziker ${zikr.done ? "done" : ""}`}
                      onClick={(e) => {
                        console.log(e);
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        countDown(type, i);
                      }}
                    >
                      <Dheker zikr={zikr} type={type} index={i}></Dheker>
                    </div>
                  );
                })}
              </>
            );
          })}
        {azkar?.length > 0 &&
          azkar.map((zikr, i) => {
            return (
              <div
                key={zikr._id || i}
                className={`ziker ${zikr.done ? "done" : ""}`}
                onClick={countDown.bind(null, type, i)}
              >
                <Dheker zikr={zikr} type={type} index={i}></Dheker>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Azkar;
