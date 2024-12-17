import { ReactElement, useState } from "react";
import classes from "./CompoundComponents.module.css";
import React from "react";
interface Tabs {
  children: React.ReactNode;
}
const Tabs: React.FC<Tabs> = ({children}) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  }

  const tabElements = React.Children.toArray(children).filter((child):child is ReactElement => React.isValidElement(child));
  return (
    <div className={classes.Tabs}>
      <ul>
        {
          tabElements.map((tab, index) => (
            <li key={index} onClick={() => handleTabClick(index)} className={index === activeTab ? classes.TabActive : ""}>
              {tab.props.label}
            </li>
          ))
        }
      </ul>
      <p className={classes.TabContent}>
        {tabElements[activeTab]}
      </p>
    </div>
  );
};

export default Tabs;
