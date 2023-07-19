// Coba ref
import { useRef } from "react";

export function Belajar6() {
  const count = useRef(0);

  function handleClick() {
    count.current = count.current + 1;
    alert("Ditekan: " + count.current + " kali");
  }

  return (
    <>
      <h2>Coba useRef</h2>
      <span>Ditekan: {count.current}</span>
      <br />
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}
