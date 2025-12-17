export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-red-600 hover:bg-red-700 
        px-6 py-3 rounded 
        text-sm md:text-base
        w-full md:w-auto
        mx-auto
        block
      "
    >
      {text}
    </button>
  );
}
