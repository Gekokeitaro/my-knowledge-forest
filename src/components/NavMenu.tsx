export default function NavMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 items-center rounded-container">
      <h2 className="container-title">MENU</h2>
      <a href="/" className="w-full bg-[var(--pico-color-2)] text-left p-2">
        🏡 VOLVER AL INICIO
      </a>
      <div className="w-full relative">
        <div className="w-full bg-[var(--pico-color-2)] text-left p-2">
          🎲 PERDERSE EN EL BOSQUE
        </div>
        <div className="absolute inset-0">{children}</div>
      </div>
      <a href="#" className="w-full bg-[var(--pico-color-2)] text-left p-2">
        🌲 ÁRBOLES DE CONOCIMIENTO
      </a>
      <a href="#" className="w-full bg-[var(--pico-color-2)] text-left p-2">
        🍎 FRUTOS
      </a>
      <a href="#" className="w-full bg-[var(--pico-color-2)] text-left p-2">
        🪧 POSTES DE DIRECCIÓN
      </a>
      <a href="#" className="w-full bg-[var(--pico-color-2)] text-left p-2">
        💧 FUENTES DE SABIDURÍA
      </a>
    </div>
  );
}
