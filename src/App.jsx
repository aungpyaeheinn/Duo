import {
  Menu,
  FilePlusCorner,
  CircleDollarSign,
  ShieldPlus,
} from "lucide-react";
import "./index.css";

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
          <button className="btn lg:flex hidden">Buy Template</button>
          <Menu size={30} className="lg:hidden block" />
        </div>
      </div>
      <div className="hero-bg-image pb-20 flex padding items-end mt-20 bg-no-repeat bg-[url(https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665b169cd354209f30160ac5_Square-Shapes.svg)]">
        <div className="w-[50%]">
          <div className="flex flex-col gap-4 w-[70%]">
            <h1 className="text-6xl leading-[1.1] font-bold">
              Landing Page Template for{" "}
              <span className="text-own-primary">Startups</span>
            </h1>
            <p>
              Use our template to quickly and efficiently brand your growing
              business.
            </p>
            <div className="flex items-center gap-3">
              <button className="btn !px-8 !py-4">Preview Template</button>
              <button className="outline-btn !px-8 !py-4">Learn More</button>
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
      <div className="padding">
        <h1 className="text-lg font-semibold text-center">
          More than <span className="text-own-primary">1000+</span> Companies
          using our template
        </h1>
        <div className="flex items-center justify-between mt-6">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665ab9ed663c4f53ebba1e8_DotSquare-Logo.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665abbcfc4dca184183e738_Wiggle-Logo.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665abe3bb1cc3289b9bfd5a_Sealife-Logo.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665ac001434b3a48f948b84_LoopMedia-Logo.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665ac172b9167ca66cce90e_Tricole45-Logo.svg"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6665ac32bb1cc3289b9c29a4_PlutoDelux-Logo.svg"
            alt=""
          />
        </div>
      </div>
      <div className="padding mt-[150px]">
        <h1 className="text-4xl font-bold">
          Including Custom-made Illustrations
        </h1>
        <p className="w-[40%] mt-2">
          Our unique illustrations will allow you to explain concepts relevant
          to SaaS industry in an engaging and fun way.
        </p>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="border-[3px] border-border rounded-2xl p-8 flex flex-col gap-3">
            <FilePlusCorner size={42} />
            <p className="text-2xl font-bold">Easy Setup</p>
            <p>Get going in days not months with our template.</p>
          </div>
          <div className="border-[3px] border-border rounded-2xl p-8 flex flex-col gap-3">
            <CircleDollarSign size={42} />
            <p className="text-2xl font-bold">Flexible Pricing</p>
            <p>Find the right pricing plan for your custom needs.</p>
          </div>
          <div className="border-[3px] border-border rounded-2xl p-8 flex flex-col gap-3">
            <ShieldPlus size={42} />
            <p className="text-2xl font-bold">Secure Solution</p>
            <p>Highest security standards will provide a peace of mind.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
