import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="flex w-full h-[100px] p-10 justify-around items-center bg-[#B47B84] gap-4">
      <ul className="flex pt-[10px] justify-center items-center">
        <a href="">
          <img className="flex scale-150 h-[70px] w-[70px] lg:h-[100px] lg:w-[100px]" src={Logo} alt="JESR" />
        </a>
      </ul>
      <ul className="flex">
        <li className="capitalise text-[16px] lg:text-[20px]">Where every brew tells a story, and every moment is steeped in warmth.</li>
      </ul>
    </nav>
  )
}

export default Navbar