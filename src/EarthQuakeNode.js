import React from 'react';

function EarthQuakeNode({title, mag, depth, date}) {

    const reverseString = (str) => {
        let splitString = str.split(".");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("/");

        return joinArray;
    }

    const get_time = (date) => {
       return date.slice(10);
    }

    const get_days = (date) => {
      return date.slice(0, 10)
    }

  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <hr />
      <div className="infos">
        <section className="infobox1">
          <p>
            Büyüklük: <span className="size">{mag}</span>
          </p>
          <p>Derinlik: {depth} km</p>
        </section>
        <section className="infobox2">
          <p>Saat: {get_time(date)}</p>
          <p>Tarih: {reverseString(get_days(date))}</p>
        </section>
      </div>
    </div>
  )
}

export default EarthQuakeNode;