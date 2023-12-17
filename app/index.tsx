import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">
        Welcome to <a className="text-blue-600" href="https://nextjs.org">YouTube Social Network!</a>
      </h1>

      <p className="mt-3 text-2xl">
        {'Get started by '}
        <Link href="/app/login">
          <a className="text-blue-600">logging in</a>
        </Link>
      </p>
    </div>
  )
}

export default Home;
