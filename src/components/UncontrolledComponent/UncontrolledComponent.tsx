import { useRef } from "react";

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
      alert(`Añadido al carrito: ${inputRef.current.value}`);
    }
  }
  return (
    <div>
      <input 
        type="text" 
        ref={inputRef}
        placeholder="Uncontrolled input"
      />
      <button onClick={handleSubmit}>Añadir al carrito</button>
    </div>
  );
};
