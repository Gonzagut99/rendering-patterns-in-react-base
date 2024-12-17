import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input 
        type="text" 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder="Controlled input"
        />
        <p>
          Cupón de descuento: <b>{value}</b>
        </p>
    </div>
  );
};
