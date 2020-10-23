import React, { useState } from "react";

const Clock = () => {
  let time = new Date();
  const [ctime, setCtime] = useState(time);
  let hour = ctime.getHours();
  let minute = ctime.getMinutes();

  const updateTime = () => {
    time = new Date();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="js-clock">
      <h1>
        {hour < 10 ? `0${hour}` : hour} : {minute < 10 ? `0${minute}` : minute}
      </h1>
    </div>
  );
};

export default Clock;
