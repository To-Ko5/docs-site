import Blog from '@/components/original/blog'
import Github from '@/components/original/github'
import CurrentDate from '@/components/original/current-date'

export default function Home() {
  return (
    <main className="container max-w-4xl">
      <div className="mb-8">
        <CurrentDate />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Blog />
        <Github />
        <Blog />
        <Blog />
      </div>
    </main>
  )
}
