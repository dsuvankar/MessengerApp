import React from "react";

const Avatar = ({ username, userId, online }) => {
  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-yellow-200",
    "bg-teal-200",
    "bg-blue-200",
  ];

  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];
  return (
    <div>
      {online && (
        <div
          className={
            "w-10 h-10 rounded-full relative flex items-center border border-gray-400 " +
            color
          }>
          <div className="text-center  w-full opacity-50">
            {username ? username[0] : "NaN"}
          </div>
          <div className="w-3 h-3 rounded-full absolute bg-green-400 -bottom-0 right-0 border white-border"></div>
        </div>
      )}

      {!online && (
        <div className="w-10 h-10 rounded-full   flex items-center border border-gray-900 bg-gray-400 ">
          <div className="text-center  w-full ">
            {username ? username[0] : "NaN"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
