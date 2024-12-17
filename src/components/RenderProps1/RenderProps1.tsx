import React from "react";

type ChildComponentProps = {
  render: (name: string) => JSX.Element;
};

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = "@Gonza_gtz_dev";
  return (
    <>
      <div>
        {
          render(name)
        }
      </div>
    </>
  );
};

export const ParentComponent = () => {
  return (
    <ChildComponent render={(name) => <h1>Hola {name}</h1>}>
      
    </ChildComponent>
  );
};