import { useState } from "react";
import { MenuData } from "../data/MenuData";
import { MdOutlineExpandMore } from "react-icons/md";

const ExpandableMenu = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="m-2 space-y-2">
      {MenuData.map((category, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 rounded-lg bg-[#FFE7E7] p-5"
          tabIndex={index + 1}
        >
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={() => toggleExpand(index + 1)}
          >
            <span className="text-[24px] lg:text-[36px]">{category.name}</span>
            <MdOutlineExpandMore
              className={`h-10 w-10 transition-all duration-500 ${
                expanded === index + 1 ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all ${
              expanded === index + 1
                ? "visible max-h-screen opacity-100 duration-1000"
                : "invisible max-h-0 opacity-0"
            }`}
          >
            {category.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`flex gap-24 text-[24px] items-center ${
                  itemIndex % 2 === 0 ? "border-b-2 border-[#944E63]" : "border-b-2 border-[#944E63]"
                }`}
              >
                <span className="flex-1">{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpandableMenu;
