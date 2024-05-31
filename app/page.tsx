import Blog from '@/components/original/blog'

export default function Home() {
  return (
    <main className="container max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </main>
  )
}
