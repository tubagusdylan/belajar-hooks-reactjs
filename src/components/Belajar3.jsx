/* eslint-disable no-unused-vars */

import { useState } from "react";

/* eslint-disable react/prop-types */
export function Belajar3() {
  // Buat state untuk menentukan sedang show atau tidak
  const [active, setActive] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title={"About"} isActive={active === 0} onShow={() => setActive(0)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt risus eu ex lobortis, non semper eros maximus. Aliquam tincidunt vulputate lacus, eget posuere ipsum congue a. Ut dictum nulla blandit porttitor placerat.
        Integer auctor purus in lectus dapibus, vel viverra leo iaculis. Nunc blandit, felis sed consectetur consectetur, sapien ante sodales nibh, et venenatis nulla libero sed tellus. Nullam at laoreet libero. Aliquam ornare erat in
        molestie ornare. Proin eu posuere massa, non gravida nisl. Etiam accumsan euismod feugiat.
      </Panel>
      <Panel title={"Etymology"} isActive={active === 1} onShow={() => setActive(1)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt risus eu ex lobortis, non semper eros maximus. Aliquam tincidunt vulputate lacus, eget posuere ipsum congue a. Ut dictum nulla blandit porttitor placerat.
        gravida nisl. Etiam accumsan euismod feugiat.
      </Panel>
    </>
  );
}

function Panel({ children, title, onShow, isActive }) {
  return (
    <div>
      <h2>{title}</h2>
      {/* Ternary untuk deskripsi yang dimunculkan */}
      {isActive ? <p>{children}</p> : <button onClick={onShow}>show</button>}
    </div>
  );
}
