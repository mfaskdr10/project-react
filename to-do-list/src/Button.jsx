export const Button = ({ onClick = () => {}, children, color }) => {
  return (
    <>
      <button
        className={`${color} p-3 rounded-md text-zinc-800 text-sm font-semibold cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
