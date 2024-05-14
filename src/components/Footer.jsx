
const Footer = () => {
  const curYear = new Date().getFullYear();
  return (
    <div className='flex flex-col justify-center items-center h-[10vh] border bg-[#B47B84]'>
        <h2 className="text-center text-[24px]">All Right Reseved @JESRTea {curYear}</h2>
        <h2>Developed By  <a href="hkshakib.me">@Shakib</a> </h2>
    </div>
  )
}

export default Footer;