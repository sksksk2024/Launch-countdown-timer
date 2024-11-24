import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Clock() {
  const [time, setTime] = useState({
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 41,
  });
  const [isFinished, setIsFinished] = useState(false);
  let countdownFinished = false; // Local variable to track if toast has been shown

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          if (!countdownFinished) {
            countdownFinished = true; // Mark the countdown as finished
            setIsFinished(true);
            toast.success("🎉 The countdown has ended!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="text-grayish-blue flex gap-4">
        {/* Days */}
        <section className="flex flex-col justify-center items-center w-64W">
          <div className="w-48W p-16P bg-dark-desaturated-blue">
            <span className="relative right-2.4I text-soft-red font-bold">{String(time.days).padStart(2, "0")}</span>
          </div>
          <p className="mt-16M uppercase text-xs tracking-widest">Days</p>
        </section>

        {/* Hours */}
        <section className="flex flex-col justify-center items-center w-64W">
          <div className="w-48W p-16P bg-dark-desaturated-blue text-soft-red font-bold">
            {String(time.hours).padStart(2, "0")}
          </div>
          <p className="mt-16M uppercase text-xs tracking-widest">Hours</p>
        </section>

        {/* Minutes */}
        <section className="flex flex-col justify-center items-center w-64W">
          <div className="w-48W p-16P bg-dark-desaturated-blue text-soft-red font-bold">
            {String(time.minutes).padStart(2, "0")}
          </div>
          <p className="mt-16M uppercase text-xs tracking-widest">Minutes</p>
        </section>

        {/* Seconds */}
        <section className="flex flex-col justify-center items-center w-64W">
          <div className="w-48W p-16P bg-dark-desaturated-blue text-soft-red font-bold">
            {String(time.seconds).padStart(2, "0")}
          </div>
          <p className="mt-16M uppercase text-xs tracking-widest">Seconds</p>
        </section>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </>
  );
}

export default Clock;