import { MenuData } from "../data/MenuData";

const ExpandableMenu = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-emerald-800 p-16 min-h-screen gap-4 flex-wrap">
      {MenuData.map((category, index) => (
        <label key={index} className="flex">
          <input className="peer/showLabel absolute scale-0" type="checkbox" />
          <span className="block text-center max-h-14 max-w-xs overflow-hidden rounded-lg bg-emerald-100 px-4 py-0 text-cyan-800 shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-full">
            <h3 className="flex h-14 cursor-pointer items-center font-bold text-[18px]">
              {category.name}
            </h3>
            <div className="flex flex-col gap-2 mb-2 text-[16px]">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex gap-4">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </span>
        </label>
      ))}
    </section>
  );
};

export default ExpandableMenu;
