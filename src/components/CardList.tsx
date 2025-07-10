export default function CardList({
  linkData,
}: {
  linkData: {
    href: string;
    title: string;
    description?: string;
  }[];
}) {
  linkData.map(link => (
    <a
      href={link.href}
      className="flex flex-col p-4 border-2 rounded-lg hover:bg-[var(--pico-color-2)] transition-colors w-48 h-24"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="font-bold text-center">{link.title}</h3>
        {'description' in link && link.description && (
          <p className="text-sm text-[var(--pico-color-7)]">
            {link.description}
          </p>
        )}
      </div>
    </a>
  ));
}
