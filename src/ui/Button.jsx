function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-800 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}

export default Button;
