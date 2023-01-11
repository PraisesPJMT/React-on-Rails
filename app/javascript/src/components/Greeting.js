import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../redux/messages/messages";
import { useNavigate } from "react-router-dom";

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/')
    };

  const getRandomMessage = () => {
    dispatch(getMessage());
  };

  return (
    <section className="message-container">
      <h1>Random Greeting</h1>
      <p className="message">
          Message:
          {' '}
          {message.length > 0 ? message : 'Loading...'}
      </p>
      <div className="button-div">
        <span>Click the button to see a different message</span>
        <button className="btn" type="button" onClick={getRandomMessage}>
          Random Greeting
        </button>
      </div>
        <button type="button" onClick={handleNavigation}>Back to Home Page ></button>
    </section>
  );
};

export default Greeting;
