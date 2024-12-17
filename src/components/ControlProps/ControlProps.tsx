import { useState } from "react";

type ToggleProps = {
  isToggled?: boolean;
  onToggle?: (value:boolean) => void;
};
export const Toggle: React.FC<ToggleProps> = ({
  isToggled = false,
  onToggle
}) => {
  const [internalToggle, setInternalToggle] = useState(isToggled);

  const toggle = ()=>{
    const newState = !internalToggle;
    setInternalToggle(newState);

    if (onToggle) {
      onToggle(newState); //Comunica el estado interno al estado externo del padre
    }
  }
  return (
    <div>
      <button onClick={toggle}>
        {internalToggle ? "ON 😀" : "OFF 😒"}
      </button>
    </div>
  );
}

//El hijo notifica al padre el estado en el que está
export const ParentComponent = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <p>
        {isToggled ? "ON" : "OFF"}
      </p>
      <Toggle
        isToggled={isToggled}
        onToggle={setIsToggled}
      />
    </div>
  );
};
