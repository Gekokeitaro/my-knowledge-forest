export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose dark:prose-invert prose-h1:font-bold prose-h1:text-xl prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl prose-headings:underline max-w-full py-4">
      {children}
    </div>
  )
}