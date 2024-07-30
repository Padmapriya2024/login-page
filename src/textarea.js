import { useState } from "react";
//import ReactDOM from "react-dom/client";

export default function MyForm() {
  const [textarea, setTextarea] = useState(
    "SightSpectrum Technologies and Solutions Private Ltd."
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}