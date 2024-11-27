import React, { useState } from "react";
import "./State.css";

const State = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState('')
  const [img, setImg] = useState(false)
  const [title, setTitle] = useState('OPEN ')
 
  const minus = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const plus = () => {
    if (num < 15) {
      setNum(num + 1);
    }
  };

  const change = () => {
    setImg (!img)
    setTitle (img ? 'OPEN ' : 'CLOSE ')
  }

  return (
    <>

    <div className="box">
      <button onClick={change}>{title}IMG</button>
      {img && (
        <img src="https://a.allegroimg.com/original/11d447/4f1aebd048dfabb4774c0c0bfd52/Kolorowa-NAKLEJKA-Grafika-na-Samochod-Patrzacy-Kot-Kotek-MEM-Memy-13x10cm" alt=""/>
      )}
    </div>

      <div className="box">
        <h2>{text}</h2>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div className="box">
        <h2>{num}</h2>
        <button onClick={plus}>Плюс</button>
        <button onClick={minus}>Минус</button>
        <button onClick={() => setNum(num * 2)}>Умножить</button>
        <button onClick={() => setNum(num / 2)}>Делить</button>
        <button onClick={() => setNum(0)}>0</button>
      </div>
    </>
  );
};

export default State;
