
export default function Nav() {
  return (
    <>
      <nav className="w-full ">
        <div className="navbar flex justify-between px-16 bg-red-500">
          <div className="font-bold text-2xl ">
            Logo
          </div>
          <div>
            <ul className="flex ">
              <li className="px-2 cursor-pointer text-cyan-500 font-medium bg-amber-500 rounded-xl mx-2">Home</li>
              <li className="px-2 cursor-pointer text-cyan-500 font-medium bg-amber-500 rounded-xl mx-2">Dashboard</li>
              <li className="px-2 cursor-pointer text-cyan-500 font-medium bg-amber-500 rounded-xl mx-2">Services</li>
              <li className="px-2 cursor-pointer text-cyan-500 font-medium bg-amber-500 rounded-xl mx-2">Contact</li>
              <li className="px-2 cursor-pointer text-cyan-500 font-medium bg-amber-500 rounded-xl mx-2">About</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
