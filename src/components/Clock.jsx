import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Clock() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 10,
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
      <div className="text-grayish-blue flex flex-row justify-center items-center gap-20">
        {/* Days */}
        <section className="flex flex-col justify-center items-center relative">
          <div className="w-128W h-128H text-center relative bg-dark-desaturated-blue rounded-5BR z-40">
            <span className="relative top-28I text-soft-red font-bold text-3xl">{String(time.days).padStart(2, "0")}</span>
          </div>
          <p className="mt-16M uppercase text-xs tracking-0.4 font-bold">Days</p>

          {/* Dot Before */}
          <div className="-rotate-90 relative bottom-105.6I right-48I h-8 w-8 overflow-hidden z-50">
            <div className="absolute left-16I -translate-y-1/3 h-16H w-16W bg-black rounded-full"></div>
          </div>

          {/* Line Through */}
          <div className="border-t border-black w-128W h-16H absolute top-64I z-50"></div>

          {/* Dot After */}
          <div className="rotate-90 relative bottom-152.8I left-48I h-8 w-8 overflow-hidden z-50">
            <div className="absolute left-16I -translate-y-1/3 h-16H w-16W bg-black rounded-full"></div>
          </div>

          {/* Border Bottom */}
          <div className="w-48W h-33.6H absolute top-28I border-b-8 border-black rounded-5BR z-10"></div>
        </section>

        {/* Hours */}
        <section className="flex flex-col justify-center items-center relative">
          <div className="w-128W h-128H text-center relative bg-dark-desaturated-blue rounded-5BR z-40">
            <span className="relative top-28I text-soft-red font-bold text-3xl">{String(time.hours).padStart(2, "0")}</span>
          </div>
          <p className="mt-16M uppercase text-xs tracking-0.4 font-bold">Hours</p>

          {/* Dot Before */}
          <div className="-rotate-90 relative bottom-105.6I right-48I h-8 w-8 overflow-hidden z-50">
            <div className="absolute left-16I -translate-y-1/3 h-16H w-16W bg-black rounded-full"></div>
          </div>

          {/* Line Through */}
          <div className="border-t border-black w-128W h-16H absolute top-64I z-50"></div>

          {/* Dot After */}
          <div className="rotate-90 relative bottom-152.8I left-48I h-8 w-8 overflow-hidden z-50">
            <div className="absolute left-16I -translate-y-1/3 h-16H w-16W bg-black rounded-full"></div>
          </div>

          {/* Border Bottom */}
          <div className="w-48W h-33.6H absolute top-28I border-b-8 border-black rounded-5BR z-10"></div>
        </section>

        {/* Minutes */}
        <section className="flex flex-col justify-center items-center relative">
          <div className="w-128W h-128H text-center relative bg-dark-desaturated-blue rounded-5BR z-40">
            <span className="relative top-28I text-soft-red font-bold text-3xl">{String(time.minutes).padStart(2, "0")}</span>
          </div>
          <p className="mt-16M uppercase text-xs tracking-0.4 font-bold">Minutes</p>

          {/* Dot Before */}
          <div className="-rotate-90 relative bottom-105.6I right-48I h-8 w-8 overflow-hidden z-50">
            <div className="absolute left-16I -translate-y-1/3 h-16H w-16W bg-black rounded-full"></div>
          </div>

          {/* Line Through */}
          <div className="border-t border-black w-128W h-16H absolute top-64I z-50"></div>

          {/* Dot After */}
          <div className="rotate-90 relative bottom-152.8I left-48I h-8 w-8 overflow-hidden z-50">
            <div className="absolute left-16I -translate-y-1/3 h-16H w-16W bg-black rounded-full"></div>
          </div>

          {/* Border Bottom */}
          <div className="w-48W h-33.6H absolute top-28I border-b-8 border-black rounded-5BR z-10"></div>
        </section>

        {/* Seconds */}
        <section className="flex flex-col justify-center items-center relative">
          <div className="w-128W h-128H text-center relative bg-dark-desaturated-blue rounded-5BR z-40">
            <span className="relative top-28I text-soft-red font-bold text-3xl">{String(time.seconds).padStart(2, "0")}</span>
          </div>
          <p className="mt-16M uppercase text-xs tracking-0.4 font-bold">Seconds</p>

          {/* Dot Before */}
          <div className="-rotate-90 relative bottom-105.6I right-48I h-8 w-8 overflow-hidden z-50">
            <div className="absolute left-16I -translate-y-1/3 h-16H w-16W bg-black rounded-full"></div>
          </div>

          {/* Line Through */}
          <div className="border-t border-black w-128W h-16H absolute top-64I z-50"></div>

          {/* Dot After */}
          <div className="rotate-90 relative bottom-152.8I left-48I h-8 w-8 overflow-hidden z-50">
            <div className="absolute left-16I -translate-y-1/3 h-16H w-16W bg-black rounded-full"></div>
          </div>

          {/* Border Bottom */}
          <div className="w-48W h-33.6H absolute top-28I border-b-8 border-black rounded-5BR z-10"></div>
        </section>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </>
  );
}

export default Clock;