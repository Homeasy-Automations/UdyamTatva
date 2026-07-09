export default function FormError({
  message,
}: {
  message?: string;
}) {
  if (!message) return null;

  return (
    <p className="text-red-600 text-xs font-bold mt-2 animate-pulse">
      ⚠ {message}
    </p>
  );
}