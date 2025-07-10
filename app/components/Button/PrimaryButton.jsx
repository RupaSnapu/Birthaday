export default function PrimaryButton({ text, className = '', ...props }) {
  return (
    <button
      className={`px-8 py-3 xl:text-2xl xl:py-5 xl:px-10 bg-fuchsia-600 text-white font-bold rounded-full hover:bg-fuchsia-700 transition duration-300 shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
