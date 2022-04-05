import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (text === null) {
    return "";
  }
  return (
    <>
      {text.length >= 100 && (
        <p>
          {isReadMore ? text.slice(0, 100) : text}
          <span
            onClick={toggleReadMore}
            className="cursor-pointer font-semibold italic hover:text-blue-600"
          >
            {isReadMore ? " ...Read More ▼" : " Show Less ▲"}
          </span>
        </p>
      )}

      {text.length <= 100 && <p>{text}</p>}
    </>
  );
};

export default ReadMore;
