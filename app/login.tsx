import 'tailwindcss/tailwind.css'

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-2">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <div className="flex justify-center items-center">
          <span className="text-gray-700 font-semibold text-2xl">Login</span>
        </div>
        <button className="mt-4 w-full block bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg px-4 py-3">Login with Google</button>
      </div>
    </div>
  )
}

export default Login;
