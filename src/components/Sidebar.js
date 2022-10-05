import React, { startTransition, useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar({
  minutes,
  movesCount,
  newGame,
  seconds,
  setNewGame,
  start,
  reset,
}) {
  const [dropDown, setDropDown] = useState(false);

  function handleDropDown() {
    setDropDown((dropDown) => !dropDown);
  }

  return (
    <div className="sidebarComponent">
      <div className="sidebar div top">
        <NavLink to="/">
          <button
            onClick={() => {
              setNewGame(!newGame);
              reset();
              start();
            }}
          >
            {" "}
            New Game{" "}
          </button>
        </NavLink>
        <NavLink to="/">
          <button> Existing Game </button>
        </NavLink>
        <NavLink to="/HighScores">
          <button> Best Scores</button>
        </NavLink>
        <NavLink to="/History">
          <button> History</button>
        </NavLink>
        <NavLink to="/Bobverlay">
          <button> Overlay Testing</button>
        </NavLink>
      </div>
      <div className="sidebar div middle">
        <h3>
          Current Score:
          <br /> NEEDS FIXING
        </h3>
        <h3>
          Successful Matches:
          <br /> NEEDS FIXING
        </h3>
        <h3>
          Matches Attempted:
          <br /> {Math.floor(movesCount / 2)}
        </h3>
        <h3 className="timer">
          Timer: <br /> {minutes}:{seconds <= 9 ? "0" + seconds : seconds}
        </h3>
      </div>
      <div className="dd-wrapper">
        <div className="dd-header">
          <div className="dd-header-title"></div>
        </div>

        {dropDown ? (
          <div className="dd-list">
            <button onClick={handleDropDown} id="choose-theme-button">
              Choose a Theme!
            </button>
            <button id="halloween-button" className="dd-list-item">
              Halloween
            </button>
            <button id="leaves-button" className="dd-list-item">
              Autumn Leaves
            </button>
            <button id="harvest-button" className="dd-list-item">
              Harvest
            </button>
            <button id="surprise-me" className="dd-list-item">
              SURPRISE ME!
            </button>
          </div>
        ) : (
          <div className="dd-closed">
            <button onClick={handleDropDown} className="dd">
              Choose a Theme!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
