
import "./boton.css";


export default function Boton({text, onClick}) {
  return (
    <button onClick={onClick} className="boton">
      {text}
    </button>
  );
}