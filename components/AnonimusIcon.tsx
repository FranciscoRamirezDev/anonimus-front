type AnonimusIconProps = {
  className?: string;
};

/**
 * Icono de Anonimus: máscara anónima sonriente con un corazón,
 * inspirado en la ilustración de la marca. Usa `currentColor` para el trazo.
 */
export default function AnonimusIcon({ className = "h-8 w-8" }: AnonimusIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label="Icono de Anonimus"
    >
      {/* Rostro de la máscara */}
      <path
        d="M15 3C8.5 3 5 8 5 14c0 7 4.3 13.6 10 15 5.7-1.4 10-8 10-15 0-6-3.5-11-10-11Z"
        fill="currentColor"
        fillOpacity={0.12}
      />
      {/* Cejas */}
      <path d="M8.5 10.5c1.5-1.6 3.5-1.8 5-.6" />
      <path d="M16.5 9.9c1.5-1.2 3.5-1 5 .6" />
      {/* Ojos cerrados */}
      <path d="M9 13.5c1.3 1.2 2.9 1.2 4.2 0" />
      <path d="M16.8 13.5c1.3 1.2 2.9 1.2 4.2 0" />
      {/* Mejillas */}
      <circle cx="9.3" cy="17" r="1.2" fill="#F4A6C0" stroke="none" />
      <circle cx="20.7" cy="17" r="1.2" fill="#F4A6C0" stroke="none" />
      {/* Bigote */}
      <path d="M9.5 20.5c1.2.6 2.3.2 3.2-.8.8-.9 1.6-1 2.3-.2.7-.8 1.5-.7 2.3.2.9 1 2 1.4 3.2.8" />
      {/* Perilla */}
      <path d="M15 22.5v3.5" />
      {/* Corazón */}
      <path
        d="M26 28s-4.5-2.8-4.5-5.4c0-1.4 1.1-2.5 2.4-2.5.9 0 1.6.5 2.1 1.2.5-.7 1.2-1.2 2.1-1.2 1.3 0 2.4 1.1 2.4 2.5 0 2.6-4.5 5.4-4.5 5.4Z"
        fill="#F06A8A"
        stroke="#ffffff"
        strokeWidth={1.2}
      />
    </svg>
  );
}
