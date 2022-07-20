import React from "react";

function Azkar({ azkar = [] }) {
  return (
    <div className="azkar">
      {azkar.length > 0 &&
        azkar.map((zikr, i) => {
          return (
            <div key={zikr._id || i} className="ziker">
              <div className="ziker__content">{zikr.zekr}</div>
              <div className="ziker__source">{zikr.reference}</div>
              <div className="ziker__description">{zikr.description}</div>
              {+zikr?.count > 0 && (
                <span className="ziker__count">
                  {zikr.count.toString().padStart(2, "0")}
                </span>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Azkar;
