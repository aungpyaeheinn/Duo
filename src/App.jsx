import { Menu } from "lucide-react";

function App() {
  return (
    <>
      <div className="border-b-2 padding py-6 border-border flex items-center justify-between">
        <div className="w-[80px]">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6628074b71d6e1e95593d310_Logo.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-6">
          <ul className="lg:flex hidden items-center gap-6">
            <li>
              <a href="#">Process</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
          </ul>
          <button className="bg-own-primary lg:flex hidden px-4 py-[6px] text-white font-semibold rounded-md">
            Buy Template
          </button>
          <Menu size={30} className="lg:hidden block" />
        </div>
      </div>
      <div className="flex padding">
        <div className="w-[50%]">
          <div>
            <h1 className="text-6xl font-bold">
              Landing Page Template for Startups
            </h1>
            <p>
              Use our template to quickly and efficiently brand your growing
              business.
            </p>
            <div>
              <button>Preview Template</button>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/662a5c31b674b313da821db0_Hero-Illustration.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
