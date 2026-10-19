import { useState, useEffect } from "react";
import useWordCycle from "../hooks/useWordCycle";

const StatusDisplay = (props) => {

  const doWork = () => {
    console.log("preforming some action")
  }

  const word = useWordCycle(props.words, false, props.delay, doWork)

  return (
    <div className="card">
      <h3>System Status</h3>
      <p className="status-word">{word}</p>
    </div>
  );
};

export default StatusDisplay;
