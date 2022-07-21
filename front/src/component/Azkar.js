import React from "react";
import groupBy from "../helper/groupby";
import newLine from "../helper/newLine";
import ScrollButton from "./ScrollToTop";

function Content({ zikr }) {
  return (
    <>
      <div className="ziker__content">{newLine(zikr.zekr)}</div>
      <div className="ziker__source">{zikr.reference}</div>
      <div className="ziker__description">{zikr.description}</div>
      {+zikr?.count > 0 && (
        <span className="ziker__count">
          {zikr.count.toString().padStart(2, "0")}
        </span>
      )}
    </>
  );
}

function Azkar({ azkar = [], type }) {
  const zikrCount = () => {};
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
                      className="ziker"
                      onClick={zikrCount.bind(null, zikr.count)}
                    >
                      <Content zikr={zikr}></Content>
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
                className="ziker"
                onClick={zikrCount.bind(null, zikr.count)}
              >
                <Content zikr={zikr}></Content>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Azkar;
