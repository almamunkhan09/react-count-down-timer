// Import required packages
import { useEffect, useState } from 'react';

// Traking the input form the user and calculate days,hours etc
export default function CountDown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeDiff, setTimeDiff] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (timeDiff < 0) setIsFinished(true); // Seting the finished message
    // run a a time Interval function if there is time differnece between the dates
    const timerInt =
      timeDiff > 0 &&
      setInterval(() => {
        console.log(timeDiff);
        setTimeDiff(() => timeDiff - 1000);
        setSeconds(() => Math.floor((timeDiff % (1000 * 60)) / 1000)); // Calculate Seconds
        setMinutes(
          () => Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)), // Calculate Minutes
        );
        setHours(
          () =>
            Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // Calculate hours
        );
        setDays(() => Math.floor(timeDiff / (1000 * 60 * 60 * 24))); // Calculate Days
      }, 1000);

    return () => {
      clearInterval(timerInt);
    };
  }, [timeDiff, deadline]);

  // Set the user Input
  const handlInput = (event) => {
    setDeadline(new Date(event.target.value).getTime());
  };

  // Starts when the start button pressed
  const handleStart = () => {
    const milidiff = deadline - new Date().getTime();
    setTimeDiff(milidiff);
    setIsFinished(false);
  };

  return (
    <>
      <div className=" flex text-white justify-center">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Count Down Timer
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="datepicker relative form-floating mb-3 xl:w-96">
          <input
            type="datetime-local"
            onChange={handlInput}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select a date"
          />
          <label htmlFor="floatingInput" className="text-gray-700">
            Select a date
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleText0"
            className="form-label inline-block mb-2 text-white font-bold"
          >
            Title
          </label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleText0"
            placeholder="Set the Title "
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleText0"
            className="form-label inline-block mb-2 text-white font-bold"
          >
            Description
          </label>
          <input
            onChange={(event) => setDescription(event.target.value)}
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleText0"
            placeholder="Write a description "
          />
        </div>
      </div>
      <div className="flex   p-5 items-center justify-center gap-5 text-white">
        <div>
          <span className="countdown font-mono text-white text-4xl">
            <span className="text-white" style={{ '--value': 15 }}>
              {days}
            </span>
          </span>
          days
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ '--value': 10 }}> {hours}</span>
          </span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ '--value': 24 }}> {minutes}</span>
          </span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ '--value': 44 }}>{seconds}</span>
          </span>
          sec
        </div>
      </div>
      <div className="flex spac-x-2 justify-center">
        <div>
          <button
            onClick={handleStart}
            type="button"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            START
          </button>
        </div>
      </div>
      {seconds ? (
        <>
          <div className=" p-4 flex justify-center text-white  text-3xl">
            {title}
          </div>
          <div className=" p-4 flex justify-center text-white  text-2xl">
            {description}
          </div>
        </>
      ) : (
        ''
      )}

      {isFinished ? (
        <div className="flex justify-center p-4 text-white text-3xl">
          Time Finished
        </div>
      ) : (
        ''
      )}
    </>
  );
}
