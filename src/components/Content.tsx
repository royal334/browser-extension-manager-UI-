import { useState } from "react";
import Card from "./Card";
import initialdata from "../data.json";
import Status from "./Status";

type ContentProps = {
     darkMode: boolean;
};

type DataItem = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

function Content(props: ContentProps) {
  const [data, setData] = useState<DataItem[]>(initialdata); // Manage state for the data array
  const [active, setActive] = useState<boolean | null>(null); // Manage active/inactive state

  // Handler to toggle the `isActive` property
  function handleToggle(index: number) {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  // Filter data based on the active state
  const displayedData = active === null ? data : active
      ? data.filter((item) => item.isActive) // Show only active cards
      : data.filter((item) => !item.isActive); // Show only inactive cards

  return (
    <section>
      <div className="mx-auto container px-4 py-6 md:px-0">
        <div>
          {/* Pass active and setActive to the Status component */}
          <Status active={active} setActive={setActive} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {displayedData.map((item, index) => (
            <Card
              key={index}
              title={item.name}
              description={item.description}
              src={item.logo}
              darkMode={props.darkMode}
              isActive={item.isActive}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;