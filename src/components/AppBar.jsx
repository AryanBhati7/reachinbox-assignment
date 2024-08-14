import logo from "../assets/logo.svg";

function AppBar() {
  return (
    <div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <img src={logo} alt="logo" className=" h-7 w-10 mr-2"></img>
        <h1 className="uppercase text-lg font-bold">REACHINBOX INDIA</h1>
      </div>
    </div>
  );
}

export default AppBar;
