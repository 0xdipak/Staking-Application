

const StakeAmount = () => {
  return (
    <form className="">
      <label>Enter Staking Amount: </label>
      <input type="text" />
      <button
        className="bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-3 md:px-5 py-3
         text-white text-base font-semibold hover:opacity-90"
      >
        Stake Now
      </button>
    </form>
  );
}

export default StakeAmount