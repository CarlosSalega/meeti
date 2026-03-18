export function FormError({ children }: { children?: React.ReactNode }) {
  return (
    <p
      className={`h-5 border-l-2 border-red-600 bg-red-100 pl-2 text-sm font-bold text-red-600 ${
        children ? "visible" : "invisible"
      }`}
    >
      {children}
    </p>
  );
}
