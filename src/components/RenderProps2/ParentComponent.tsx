import React from "react";

interface ParentComponentProps{
    render: (data: string[]) => React.ReactNode;
  }
  
const ParentComponent:React.FC<ParentComponentProps> = ({
    render
}) => {
    const [data] = React.useState<string[]>(["Apple", "Banana", "Cherry"]);
    return <div>
        <ul>
            {render(data)}
        </ul>
    </div>;
};

export default ParentComponent;
