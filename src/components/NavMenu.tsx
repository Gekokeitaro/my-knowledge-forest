export default function NavMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 items-center rounded-container relative">
      <h2 className="container-title">MENU</h2>
      <a href="/" className="w-full bg-[var(--pico-color-2)] text-left p-2">
        🏡 VOLVER AL INICIO
      </a>
      {children}
      <a href="#" className="w-full bg-[var(--pico-color-2)] text-left p-2">
        📅 LIFE TIMELINE
      </a>
    </div>
  );
}
