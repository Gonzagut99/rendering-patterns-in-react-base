import React, { useState } from "react";

function useLoading(initalLoading: boolean = false) {
  const [loading, setLoading] = useState(initalLoading);
  return { loading, setLoading };
}

interface UserComponentProps {
  name: string;
}
const UserComponent: React.FC<UserComponentProps> = ({ name }) => {
  const { loading, setLoading } = useLoading(false);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>Hola, {name}</p>
      <button onClick={() => setLoading(true)}>Cargar</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="Gonza"/>;
};
