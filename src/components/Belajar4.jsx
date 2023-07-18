/* eslint-disable no-unused-vars */
import { useState } from "react";
import { sculptureList } from "../../lib/data";

export function Belajar4() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleShowButton(e) {
    setShowMore(!showMore);
  }

  function handleButtonNext() {
    if (index === sculptureList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handleButtonPrev() {
    if (index === 0) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  //   Dapatkan data tiap index
  let data = sculptureList[index];
  return (
    <>
      <button onClick={handleButtonPrev}>Prev</button>
      <button onClick={handleButtonNext}>Next</button>
      <h2>
        {data.name} by {data.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowButton}>{showMore ? "Hide" : "Show"} details</button>
      {showMore && <p>{data.description}</p>}
      <br />
      <img src={data.url} alt={data.alt} />
    </>
  );
}
