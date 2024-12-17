import Tab from "./Tab";
import Tabs from "./Tabs";

export const CompoundComponents = () => {
  return (
    <Tabs>
      <Tab label="Jirafa">
        🦒
      </Tab>
      <Tab label="Elefante">
        🐘
      </Tab>
      <Tab label="Cebra">
        🦓
      </Tab>
    </Tabs>
  );
};
