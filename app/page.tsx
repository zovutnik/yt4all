import Link from 'next/link'
import 'tailwindcss/tailwind.css'

export default function Home() {
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

      <Link href="/app/login">
        <button className="mt-6 px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">
          Login
        </button>
      </Link>
    </div>
  )
}
