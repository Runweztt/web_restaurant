// frontend/src/components/Button.jsx
export default function Button({ children, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-2xl font-medium shadow-sm transition disabled:opacity-50 ${className} bg-gradient-to-r from-indigo-500 to-purple-500 text-white`}
      {...props}
    >
      {children}
    </button>
  );
}
