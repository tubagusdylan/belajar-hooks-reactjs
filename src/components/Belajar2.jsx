/* eslint-disable no-unused-vars */
import { useState } from "react";

export function Belajar2() {
  // Kuis Berhadiah
  const [answer, setAnswer] = useState("");
  //   error untuk menunjukkan errornya kalau jawaban salah
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>Jawaban Benar</h1>;
  }

  function handleAnswer(event) {
    setAnswer(event.target.value);
  }

  function handleButton(event) {
    setStatus("typed");
  }

  async function handleSubmit(event) {
    event.preventDefault(); // ketika disubmit tidak mengulang refresh web
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  }

  return (
    // Buat state
    <>
      <h2>Soal</h2>
      <p>Siapa presiden pertama Indonesia? (tanpa gelar)</p>
      <form onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleAnswer} disabled={status === "submitting"}></textarea>
        <br />
        <button onClick={handleButton} disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        <br />
        <span>
          <b>{status}</b>
        </span>
        <br />
        {error != null && <p hidden={status === "submitting"}>{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let answerFalse = answer.toLowerCase() !== "soekarno";
      if (answerFalse) {
        reject(new Error("Jawaban salah, Coba lagi!!!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
