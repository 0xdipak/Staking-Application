
const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 md:px-20 py-4 border-b border-gray-600">
      <p className="text-3xl font-bold">
        D<span className="textbl">-Staking</span>
      </p>
      <div className="flex items-center gap-5">
        <button className="bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-3 md:px-5 py-3
         text-white text-base font-semibold hover:opacity-90">
          Claim Reward
        </button>
        <button className="bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-3 md:px-5 py-3
         text-white text-base font-semibold hover:opacity-90">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}

export default Header