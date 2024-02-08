import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(5);
  const [notificationTimer, setNotificationTimer] = useState(1);
  const [isTimerStarted, setIsTimerStarted] = useState(true);
  const [isNotificationTimerStarted, setIsNotificationTimerStarted] =
    useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const timerInterval = useRef();
  const notificationTimerInterval = useRef();

  const startTimer = () => {
    timerInterval.current = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
  };

  const startNotificationTimer = () => {
    notificationTimerInterval.current = setInterval(() => {
      setNotificationTimer((prevState) => prevState + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      setIsTimerStarted(false);
      clearInterval(timerInterval.current);
      setTimer(5);
      setIsNotificationTimerStarted(true);
      startNotificationTimer();
      setIsNotificationVisible(true);
    }
  }, [timer]);

  useEffect(() => {
    if (notificationTimer >= 5) {
      setIsNotificationTimerStarted(false);
      clearInterval(notificationTimerInterval.current);
      setNotificationTimer(1);
      setIsNotificationTimerStarted(false);
      setIsTimerStarted(true);
      startTimer();
      setIsNotificationVisible(false);
    }
  }, [notificationTimer]);

  return (
    <>
      <p
        id="notification"
        className={isNotificationVisible ? `visible` : `hidden`}
      >
        Notification Received!!
      </p>
      {isNotificationTimerStarted && !isTimerStarted ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Notification Sent!</h1>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Time Left: {timer}</h1>
        </div>
      )}
    </>
  );
}

export default App;
