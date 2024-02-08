import { useEffect, useRef, useState } from "react";
import "./App.css";

// function App() {
//   const [timer, setTimer] = useState(5);
//   const [notificationTimer, setNotificationTimer] = useState(1);
//   const [isTimerStarted, setIsTimerStarted] = useState(true);
//   const [isNotificationTimerStarted, setIsNotificationTimerStarted] =
//     useState(false);

//   const timerInterval = useRef();
//   const notificationTimerInterval = useRef();

//   const startTimer = () => {
//     timerInterval.current = setInterval(() => {
//       setTimer((prevState) => prevState - 1);
//     }, 1000);
//   };

//   const startNotificationTimer = () => {
//     notificationTimerInterval.current = setInterval(() => {
//       setNotificationTimer((prevState) => prevState + 1);
//     }, 1000);
//   };

//   useEffect(() => {
//     startTimer();
//   }, []);
//   console.log("timer1", timer);

//   useEffect(() => {
//     if (timer <= 0) {
//       setIsTimerStarted(false);
//       clearInterval(timerInterval.current);
//       setTimer(5);
//       setIsNotificationTimerStarted(true);
//       startNotificationTimer();
//     }
//   }, [timer]);

//   console.log("timer2", timer);

//   useEffect(() => {
//     if (notificationTimer >= 5) {
//       setIsNotificationTimerStarted(false);
//       clearInterval(notificationTimerInterval.current);
//       setNotificationTimer(1);
//       setIsTimerStarted(true);
//       startTimer();
//     }
//   }, [notificationTimer]);

//   return (
//     <div>
//       {isNotificationTimerStarted && !isTimerStarted ? (
//         <>
//           <div
//             style={{
//               position: "fixed",
//               right: 0,
//               bottom: 0,
//               padding: 10,
//               border: "2px solid black",
//               borderRadius: 10,
//               margin: 10,
//             }}
//           >
//             Notification Received!!
//           </div>
//           <h1 style={{ textAlign: "center" }}>Notification Sent!</h1>
//         </>
//       ) : (
//         <h1 style={{ textAlign: "center" }}>Time Left: {timer}</h1>
//       )}
//     </div>
//   );
// }

function App() {
  // const [timer, setTimer] = useState(5);
  // const [notificationTimer, setNotificationTimer] = useState(1);
  // const [isTimerStarted, setIsTimerStarted] = useState(true);
  // const [isNotificationTimerStarted, setIsNotificationTimerStarted] =
  //   useState(false);
  // const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  // const timerInterval = useRef();
  // const notificationTimerInterval = useRef();

  // const startTimer = () => {
  //   timerInterval.current = setInterval(() => {
  //     setTimer((prevState) => prevState - 1);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  // }, []);

  // const startNotificationTimer = () => {
  //   notificationTimerInterval.current = setInterval(() => {
  //     setNotificationTimer((prevState) => prevState + 1);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   if (timer <= 0) {
  //     setIsTimerStarted(false);
  //     clearInterval(timerInterval.current);
  //     setTimer(5);
  //     setIsNotificationTimerStarted(true);
  //     startNotificationTimer();
  //     setIsNotificationVisible(true);
  //   }
  // }, [timer]);

  // useEffect(() => {
  //   if (notificationTimer >= 5) {
  //     setIsNotificationTimerStarted(false);
  //     clearInterval(notificationTimerInterval.current);
  //     setNotificationTimer(1);
  //     setIsTimerStarted(true);
  //     startTimer();
  //     setIsNotificationVisible(false);
  //   }
  // }, [notificationTimer]);

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
