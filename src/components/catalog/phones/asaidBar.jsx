import React, { useState, Children } from "react";
import "./style.css";

function AsaidBar() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(90000);

  const hendlerStart = (e) => {
    setStart(e);
  };
  const hendlerEnd = (e) => {
    console.log(e);
    setEnd(e);
  };
  return (
    <div className="asaidBar container">
      <form className="asaidBar__form">
        <label>
          Цена, ₽
          <div className="startEndinput">
            <input
              value={start}
              className="inputStart value"
              type="number"
              onChange={(e) => hendlerStart(e.target.value)}
            ></input>
            <input
              onChange={(e) => hendlerEnd(e.target.value)}
              value={end}
              className="inputEnd value"
              type="number"
            ></input>
          </div>
          <input
            className="range"
            type="range"
            value={end}
            min="0"
            max="90000"
          ></input>
        </label>
        <div className="selected">
          <label>
            Диагональ экрана
            <br />
            <select className="selectedSerch">
              <option selected disabled>
                все
              </option>
              <option> До 3,9”</option>
              <option>От 4,5” до 4,9”</option>
              <option>От 5” до 5,4”</option>
              <option>От 5,5” до 5,9”</option>
              <option>От 6”</option>
            </select>
          </label>
        </div>
        <div className="brends">
          <h3>Бренд</h3>
          <lable htmlFor="aplle">
            <input name="apple" checked type="checkbox" />
            APPLE
          </lable>

          <lable>
            <input type="checkbox" /> BLACKVIEW
          </lable>
          <lable>
            <input checked type="checkbox" /> CLEVERCEL
          </lable>
          <lable>
            <input type="checkbox" /> NOKIA
          </lable>
          <lable>
            <input type="checkbox" /> XIAOMI
          </lable>
          <lable>
            <input type="checkbox" /> ZTE
          </lable>
        </div>

        <div className="changeSim">
          <h3>Количество SIM-карт</h3>
          <lable for="sim1">
            <input id="sim1" name="sim" value="1SIM" type="radio" /> 1SIM
          </lable>
          <lable for="sim2">
            <input id="sim2" name="sim" value="2SIM" type="radio" /> 2SIM
          </lable>
        </div>
      </form>
    </div>
  );
}

export default AsaidBar;
