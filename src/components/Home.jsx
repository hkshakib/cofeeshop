import Coffee from "../assets/coffee.jpg";
const Home = () => {
  return (
    <div className="flex h-[30vh] items-center bg-[#944E63]">
      <div className="flex flex-col justify-center items-center flex-1">
        <h1 className="capitalise text-[32px] lg:text-[46px] font-extrabold">
          JESR TEA
        </h1>
        <h1 className="capitalise text-[30px] lg:text-[36px] font-extrabold">
          Menu
        </h1>
        <span className="capitalise text-[16px] lg:text-[24px]">
          Brewing life's moments, one cup at a time
        </span>
      </div>
    </div>
  );
};

export default Home;
