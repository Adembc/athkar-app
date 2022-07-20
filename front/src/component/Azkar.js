import React from "react";

function Azkar({ azkar }) {
  return (
    <div className="azkar">
      {azkar.map((zikr) => {
        return (
          <div key={zikr.id} className="ziker">
            <div className="ziker__content">{zikr.content}</div>
            <div className="ziker__source">{zikr.source}</div>
            <div className="ziker__description">{zikr.description}</div>
            <span className="ziker__count">
              {zikr.count.toString().padStart(2, "0")}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Azkar;
