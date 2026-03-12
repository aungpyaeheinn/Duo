function App() {
  return (
    <div className="border-b-2 xl:px-20 lg:px-16 px-10 py-6 border-border flex items-center justify-between">
      <div className="w-[80px]">
        <img
          src="https://cdn.prod.website-files.com/6627e9a3eba2a9009dbdeffe/6628074b71d6e1e95593d310_Logo.svg"
          alt=""
        />
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6">
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
        <button className="bg-own-primary px-4 py-[6px] text-white font-semibold rounded-md">
          Buy Template
        </button>
      </div>
    </div>
  );
}

export default App;
