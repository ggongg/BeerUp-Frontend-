import React, { useContext } from "react";
import { IoMdExit } from "react-icons/io";
import "../css/select.css";
import { Context } from "../states/Provider";
import { useNavigate } from "react-router-dom";

export default function Instrument() {
  const navigate = useNavigate();
  const [, dispatch] = useContext(Context);
  return (
    <div class="background d-flex align-items-center flex-column">
      <div class="title">Select your drink</div>
      <IoMdExit
        className="sign-out"
        size={40}
        color="white"
        onClick={() => {
          dispatch({
            type: "LOG_OUT",
          });
          navigate("/login");
        }}
      />
      <div class="d-flex align-items-center flex-column">
        <select
          multiple
          class="form-select custom-select mb-5"
          aria-label="Instrument select"
          size="6"
          onChange={(e) => {
            dispatch({
              type: "SELECT_INSTRUMENT",
              instrument: e.target.value,
            });
          }}
        >
          <option value="0">πΆπΌ Children</option>
          <option value="1">π§π§ Teenagers</option>
          <option value="1">π§π₯€ Young Adults</option>
          <option value="2">π¨πΊ Adults</option>
          <option value="3">π΅π· Seniors</option>
        </select>
        <button
          type="button"
          class="btn btn-light join-btn"
          onClick={() => {
            navigate("/meeting");
          }}
        >
          Join now
        </button>
      </div>
    </div>
  );
}
