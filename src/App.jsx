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
      <div className="hero-bg-image flex md:flex-row flex-col md:gap-0 gap-8 padding lg:items-end items-start pb-20 mt-20 bg-no-repeat md:bg-[url(https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665b169cd354209f30160ac5_Square-Shapes.svg)]">
        <div className="md:w-[50%] w-full">
          <div className="flex flex-col gap-4 xl:w-[70%] w-full">
            <h1 className="lg:text-6xl text-5xl leading-[1.1] font-bold">
              Landing Page Template for{" "}
              <span className="text-own-primary">Startups</span>
            </h1>
            <p>
              Use our template to quickly and efficiently brand your growing
              business.
            </p>
            <div className="flex md:flex-row flex-col items-center flex-grow gap-3">
              <button className="btn !px-8 !py-4 md:basis-auto shrink-0 md:w-auto w-full">
                Preview Template
              </button>
              <button className="outline-btn !px-8 !py-4 md:basis-auto shrink-0 md:w-auto w-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/662a5c31b674b313da821db0_Hero-Illustration.svg"
            alt=""
          />
        </div>
      </div>
      <div className="padding">
        <h1 className="text-xl font-semibold text-left lg:text-center">
          More than <span className="text-own-primary">1000+</span> Companies
          using our template
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-10 items-center justify-items-center mt-6">
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
        <h1 className="section-heading">Including Custom-made Illustrations</h1>
        <p className="section-description">
          Our unique illustrations will allow you to explain concepts relevant
          to SaaS industry in an engaging and fun way.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          <div className="hover:border-own-primary transition-all border-[3px] border-border rounded-2xl p-8 flex flex-col gap-3">
            <FilePlusCorner size={42} />
            <p className="text-2xl font-bold">Easy Setup</p>
            <p>Get going in days not months with our template.</p>
          </div>
          <div className="hover:border-own-primary transition-all border-[3px] border-border rounded-2xl p-8 flex flex-col gap-3">
            <CircleDollarSign size={42} />
            <p className="text-2xl font-bold">Flexible Pricing</p>
            <p>Find the right pricing plan for your custom needs.</p>
          </div>
          <div className="hover:border-own-primary transition-all border-[3px] border-border rounded-2xl p-8 flex flex-col gap-3">
            <ShieldPlus size={42} />
            <p className="text-2xl font-bold">Secure Solution</p>
            <p>Highest security standards will provide a peace of mind.</p>
          </div>
        </div>
      </div>
      <div className="padding mt-[150px]">
        <h1 className="section-heading">How it works</h1>
        <p className="section-description">
          Learn how we pinpoint issues in your product and get you to the finish
          line in no time.
        </p>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-3 md:gap-6 mt-16">
          <div>
            <img
              className="w-[80%] md:w-[90%] mx-auto"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6639f2ebe218fd42ecde7eea_discover-problem.svg"
              alt=""
            />
            <div className="px-2 py-1 rounded-md bg-black text-white w-max mt-10">
              Step 1
            </div>
            <h1 className="text-3xl mt-3 mb-4 text-own-primary font-semibold">
              Discover the Problem
            </h1>
            <p>
              Standing out from the competition is crucial for any Startups
              success. Pinpointing core issues in your business marketing and
              sales processes is vital for long-lasting brands.
            </p>
            <button className="outline-btn mt-5">Learn More</button>
          </div>
          <div className="flex flex-col justify-between">
            <img
              className="w-[80%] md:w-[90%] mx-auto"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6639f2c4e4e2a85572fbddf2_use-tool.svg"
              alt=""
            />
            <div>
              <div className="px-2 py-1 rounded-md bg-black text-white w-max mt-10">
                Step 2
              </div>
              <h1 className="text-3xl mt-3 mb-4 text-own-primary font-semibold">
                Use the Template
              </h1>
              <p>
                Duo Webflow template is made in modern and bold style, and
                optimised for responsive devices. It's flexible to use and
                includes a style guide that allows for consistent brand image.
              </p>
              <button className="outline-btn mt-5">Learn More</button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <img
              className="w-[80%] md:w-[90%] mx-auto"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6639f5633925057c8fcbaf99_enjoy-results.svg"
              alt=""
            />
            <div>
              <div className="px-2 py-1 rounded-md bg-black text-white w-max mt-10">
                Step 3
              </div>
              <h1 className="text-3xl mt-3 mb-4 text-own-primary font-semibold">
                Enjoy results
              </h1>
              <p>
                With our Startup Landing Page Template you will be able to see
                your sales sky rocket. Get noticed with your audience and create
                an everlasting brand image that lasts.
              </p>
              <button className="outline-btn mt-5">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="padding mt-[150px]">
        <h1 className="section-heading">Integrations</h1>
        <p className="section-description">
          The integrations section showcases how our software seamlessly
          connects with other tools, enhancing functionality and streamlining
          workflows for maximum efficiency.
        </p>
        <button className="btn mt-4">Request a Demo</button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="border-[3px] hover:border-own-primary transition-all relative border-border rounded-xl">
            <div className="p-8">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663ce3ad150cd4ef7c4a1b34_SynthoSphere-logo.svg"
                alt=""
              />
              <p className="mt-3 pb-32">
                Elevate your business with our cloud-based solutions for
                seamless collaboration.
              </p>
            </div>
            <div className="absolute bottom-0 w-full bg-black p-8 mt-6 rounded-bl-xl rounded-br-xl">
              <button className="btn">Connect Integration</button>
            </div>
          </div>
          <div className="border-[3px] hover:border-own-primary transition-all relative border-border rounded-xl">
            <div className="p-8">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663c9e10f72e7f086d44abf4_Streamline-logo.svg"
                alt=""
              />
              <p className="mt-3 pb-32">
                Harness the power of data with our cutting-edge tools for
                analysis and insight generation.
              </p>
            </div>
            <div className="absolute bottom-0 w-full bg-black p-8 mt-6 rounded-bl-xl rounded-br-xl">
              <button className="btn">Connect Integration</button>
            </div>
          </div>
          <div className="border-[3px] hover:border-own-primary transition-all relative border-border rounded-xl">
            <div className="p-8">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663ce3d9adb4b12431ea60d6_PolarStarHQ-logo.svg"
                alt=""
              />
              <p className="mt-3 pb-32">
                Optimize your operations effortlessly with our intelligent
                workflow management platform.
              </p>
            </div>
            <div className="absolute bottom-0 w-full bg-black p-8 mt-6 rounded-bl-xl rounded-br-xl">
              <button className="btn">Connect Integration</button>
            </div>
          </div>
          <div className="border-[3px] hover:border-own-primary transition-all relative border-border rounded-xl">
            <div className="p-8">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663c9e0a2867460c73781e9e_Nexus-Wave.svg"
                alt=""
              />
              <p className="mt-3 pb-32">
                Stay in sync with real-time updates and insights for agile
                decision-making on the go.
              </p>
            </div>
            <div className="absolute bottom-0 w-full bg-black p-8 mt-6 rounded-bl-xl rounded-br-xl">
              <button className="btn">Connect Integration</button>
            </div>
          </div>
          <div className="border-[3px] hover:border-own-primary transition-all relative border-border rounded-xl">
            <div className="p-8">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663ce411afd8c3befbd35c32_Cloudbloom-logo.svg"
                alt=""
              />
              <p className="mt-3 pb-32">
                Transform raw data into actionable intelligence with our
                advanced synthesis technology.
              </p>
            </div>
            <div className="absolute bottom-0 w-full bg-black p-8 mt-6 rounded-bl-xl rounded-br-xl">
              <button className="btn">Connect Integration</button>
            </div>
          </div>
          <div className="border-[3px] hover:border-own-primary transition-all relative border-border rounded-xl">
            <div className="p-8">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663ce3f9f342d2fe79c01387_Soucer-pass-logo.svg"
                alt=""
              />
              <p className="mt-3 pb-32">
                Simplify complex processes and boost productivity with our
                intuitive automation software.
              </p>
            </div>
            <div className="absolute bottom-0 w-full bg-black p-8 mt-6 rounded-bl-xl rounded-br-xl">
              <button className="btn">Connect Integration</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row padding items-center mt-[150px]">
        <div className="w-full md:w-[50%]">
          <h1 className="section-heading w-[90%] xl:w-[70%]">
            Accelerate your business growth with Duo Template
          </h1>
          <div className="w-full lg:w-[90%] xl:w-[60%] border-[3px] border-border rounded-xl hover:border-own-primary transition-all p-8 mt-10">
            <div className="flex items-center gap-2">
              <img
                className="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                alt=""
              />
              <p className="text-lg font-semibold">Create a memorable brand</p>
            </div>
            <p className="mt-2 mb-4">
              Stand out from the competition and get your target audiences
              attention with using Duo template.
            </p>
            <button className="outline-btn">Learn More</button>
          </div>
          <div className="w-full lg:w-[90%] xl:w-[60%] border-[3px] border-border rounded-xl hover:border-own-primary transition-all p-8 mt-10">
            <div className="flex items-center gap-2">
              <img
                className="w-[15px]"
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                alt=""
              />
              <p className="text-lg font-semibold">Launch Quickly</p>
            </div>
            <p className="mt-2 mb-4">
              Duo template allows you to launch your website fast. Whether
              you're building a landing page, a SaaS website, or a product MVP.
            </p>
            <button className="outline-btn">Learn More</button>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <img
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663a2d0080227473fe678ddd_growth-duo.svg"
            alt=""
          />
        </div>
      </div>
      <div className="padding mt-[150px]">
        <h1 className="text-3xl md:text-4xl text-center font-bold">
          Choose the right Pricing Plan
        </h1>
        <p className="w-full md:w-[80%] lg:w-[50%] text-center mx-auto mt-3">
          Our pricing plans cater to diverse needs, offering flexible options to
          suit your budget and requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">
          <div className="border-[3px] border-transparent hover:border-own-primary transition-all rounded-xl bg-white p-8">
            <img
              className="w-[80px]"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665af86f80a2c9f285836fc8_personal-plan-icon_1.svg"
              alt=""
            />
            <p className="text-2xl font-medium mt-2">Personal</p>
            <p className="mt-2">
              Our Personal Plan offers essential features at an affordable
              price, without breaking the bank.
            </p>
            <p className="text-4xl font-bold mt-10 text-own-primary">$ 35.00</p>
            <p className="text-sm text-gray-600">/ Per Single License</p>
            <div className="flex flex-col gap-3 mt-10">
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Basic Template Customization</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Limited CMS Collections</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Standard Hosting</p>
              </div>
            </div>
            <button className="outline-btn mt-10 !px-8 !py-4">
              Get Started
            </button>
          </div>
          <div className="border-[3px] border-transparent hover:border-own-primary transition-all rounded-xl bg-black text-white p-8">
            <img
              className="w-[80px]"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665af904a98ef7d8d2a5ad7a_commercial-plan-icon_1.svg"
              alt=""
            />
            <p className="text-2xl font-medium mt-2">Commercial</p>
            <p className="mt-2">
              Designed for small to medium-sized businesses, our Commercial Plan
              provides advanced tool.
            </p>
            <p className="text-4xl font-bold mt-10 text-own-primary">$ 55.00</p>
            <p className="text-sm">/ Per Single License</p>
            <div className="flex flex-col gap-3 mt-10">
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Full Template Customization</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Expanded CMS Collections</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Priority Support</p>
              </div>
            </div>
            <button className="btn mt-10 !px-8 !py-4">Get Started</button>
          </div>
          <div className="border-[3px] border-transparent hover:border-own-primary transition-all rounded-xl bg-white p-8">
            <img
              className="w-[80px]"
              src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665affecb78fada17882908a_extended-plan-icon.svg"
              alt=""
            />
            <p className="text-2xl font-medium mt-2">Extended</p>
            <p className="mt-2">
              Tailored for large enterprises and organizations, our Extended
              Plan offers Enterprise solutions.
            </p>
            <p className="text-4xl font-bold mt-10 text-own-primary">$ 95.00</p>
            <p className="text-sm text-gray-600">/ Per Single License</p>
            <div className="flex flex-col gap-3 mt-10">
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Enterprise Hosting Features</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Unlimited CMS Collections</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-[15px]"
                  src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/663dd75610a305959e91ccb0_checkmark.svg"
                  alt=""
                />
                <p>Dedicated Support Manager</p>
              </div>
            </div>
            <button className="outline-btn mt-10 !px-8 !py-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex padding mt-[150px] gap-10 flex-col lg:flex-row">
        <div className="w-full md:w-[90%] lg:w-[30%] xl:w-[50%]">
          <h1 className="text-4xl xl:text-5xl font-semibold">
            Frequently Asked Questions
          </h1>
          <img
            className="w-full xl:w-[80%] mt-10"
            src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/665aeb5025ec995f44e6c5fd_faq-section-illustration.svg"
            alt=""
          />
        </div>
        <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] flex flex-col gap-6">
          <div className="flex items-center bg-black gap-8 px-8 py-4 rounded-2xl justify-between text-white">
            <p className="text-xl font-bold">Is Webflow SEO-friendly?</p>
            <div className="w-[30px] shrink-0">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center bg-black gap-8 px-8 py-4 rounded-2xl justify-between text-white">
            <p className="text-xl font-bold">
              How can I ensure my site looks good on all devices?
            </p>
            <div className="w-[30px] shrink-0">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center bg-black gap-8 px-8 py-4 rounded-2xl justify-between text-white">
            <p className="text-xl font-bold">
              What if I need to add more pages to the template?
            </p>
            <div className="w-[30px] shrink-0">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center bg-black gap-8 px-8 py-4 rounded-2xl justify-between text-white">
            <p className="text-xl font-bold">
              How do I edit the content in a Webflow template?
            </p>
            <div className="w-[30px] shrink-0">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center bg-black gap-8 px-8 py-4 rounded-2xl justify-between text-white">
            <p className="text-xl font-bold">
              Can I customize the Webflow template to fit my brand?
            </p>
            <div className="w-[30px] shrink-0">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/664f58fe42043c5d4d79a1aa_Faq%20Open%20Icon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 pt-[100px] pb-[200px] padding bg-[#222831]">
        <h1 className="text-white text-4xl font-bold text-center">
          Customer <span className="text-own-primary">Reviews</span>
        </h1>
        <div className="grid grids-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="border-[3px] border-black/20 text-white rounded-3xl p-8  hover:border-own-primary transition-all">
            <p className="text-2xl font-medium">
              "I couldn't be happier with this Webflow template! As a small
              business owner with limited coding skills, I needed something that
              was easy to use but still looked professional - and it delivered."
            </p>
            <div className="w-[80px] h-[80px] rounded-full border-[3px] mt-5 border-own-primary">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff5434a9a1d841b12c9b_avatar-1.webp"
                alt=""
              />
            </div>
            <p className="text-2xl mt-4 text-own-primary">John Doe</p>
            <p className="text-sm">CEO / Flerp Studios</p>
          </div>
          <div className="border-[3px] border-black/20 text-white rounded-3xl p-8  hover:border-own-primary transition-all">
            <p className="text-2xl font-medium">
              "This Webflow template has been a game-changer for my portfolio
              site. As a freelance designer, I needed a website that showcased
              my work beautifully and could be easily updated."
            </p>
            <div className="w-[80px] h-[80px] rounded-full border-[3px] mt-5 border-own-primary">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff57a8c8e95a310bc29b_avatar-2.webp"
                alt=""
              />
            </div>
            <p className="text-2xl mt-4 text-own-primary">Emma Frost</p>
            <p className="text-sm">Freelance Designer</p>
          </div>
          <div className="border-[3px] border-black/20 text-white rounded-3xl p-8  hover:border-own-primary transition-all">
            <p className="text-2xl font-medium">
              "I was initially hesitant to use a template, but this Webflow
              template exceeded my expectations. The level of customization
              available is impressive, and the template was easy to work with."
            </p>
            <div className="w-[80px] h-[80px] rounded-full border-[3px] mt-5 border-own-primary">
              <img
                src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6655ff5b17668f713e14de89_avatar-3.webp"
                alt=""
              />
            </div>
            <p className="text-2xl mt-4 text-own-primary">Brian Choe</p>
            <p className="text-sm">Creative Director / Trix Agency</p>
          </div>
        </div>
      </div>
      <div className="padding">
        <div
          style={{ backgroundPosition: "50%" }}
          className="md:px-0 px-8 bg-own-primary translate-y-[-50px] rounded-3xl flex bg-auto bg-no-repeat flex-col bg-[url(https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6659dee649696d0bb3e27c7a_Background%20Shapes.svg)] items-center relative py-20"
        >
          <h1 className="text-3xl lg:text-4xl text-center font-semibold">
            Rebrand your business using Duo template
          </h1>
          <p className="text-white mt-7 md:w-[70%] xl:w-[50%] text-center">
            Our template will get your business from 0 to hero in no time. Grab
            your users attention and convert those visitors in paying customers.
          </p>
          <div className="flex items-center gap-3 mt-5 md:flex-row flex-col">
            <button className="btn !bg-black !px-8 !py-4">
              Preview Template
            </button>
            <button className="btn !bg-white !px-8 !py-4 !text-own-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="padding mt-[100px] pb-[100px]">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7">
          <div>
            <p>© Duo Template</p>
            <p>
              Crafted by <span className="underline">Toms Design</span>
            </p>
            <p>
              Powered by <span className="underline">WebFlow</span>
            </p>
          </div>
          <div>
            <h1 className="font-bold text-lg">Pages</h1>
            <ul className="mt-3 flex flex-col gap-3">
              <li>Home</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg">Admin</h1>
            <ul className="mt-3 flex flex-col gap-3">
              <li>Style Guide</li>
              <li>Licensing</li>
              <li>Change Log</li>
              <li>Password</li>
              <li>404</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg">Social</h1>
            <ul className="mt-3 flex flex-col gap-3">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>X</li>
              <li>Youtube</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg">Contact</h1>
            <ul className="mt-3 flex flex-col gap-3">
              <li>Email Me</li>
              <li>+67 24 24 12 45</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
