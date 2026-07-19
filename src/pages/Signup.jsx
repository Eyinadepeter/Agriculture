import {
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaEye,
} from "react-icons/fa";

import logo from "../assets/logo.svg";

export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}

      <header className="flex items-center justify-between px-8 py-5">
        <img src={logo} className="w-10" />

        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-green-600 font-semibold cursor-pointer">
            Sign In
          </span>
        </p>
      </header>

      {/* Form */}

      <main className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-md">

          <h1 className="text-3xl font-bold text-center">
            Welcome Back to HarvestSafe!
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Join HarvestSafe to store and sell with ease.
          </p>

          <form className="space-y-5 mt-8">

            <div>
              <label className="text-sm font-medium">
                Full Name
              </label>

              <input
                placeholder="enter full name"
                className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Phone Number
              </label>

              <input
                placeholder="+234-0000000000"
                className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Email Address
              </label>

              <input
                placeholder="user@gmail.com"
                className="mt-2 w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-2">

                <input
                  type="password"
                  placeholder="minimum 8 character"
                  className="w-full border rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-green-500"
                />

                <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />

              </div>
            </div>

            <div>
              <label className="text-sm font-medium">
                Confirm Password
              </label>

              <div className="relative mt-2">

                <input
                  type="password"
                  placeholder="minimum 8 character"
                  className="w-full border rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-green-500"
                />

                <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />

              </div>
            </div>

            {/* Divider */}

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-gray-400 text-sm">
                Or sign in with
              </span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Social */}

            <div className="grid grid-cols-3 gap-4">

              <button
                type="button"
                className="border rounded-lg h-12 flex justify-center items-center hover:bg-gray-50"
              >
                <FaGoogle className="text-red-500" />
              </button>

              <button
                type="button"
                className="border rounded-lg h-12 flex justify-center items-center hover:bg-gray-50"
              >
                <FaFacebookF className="text-blue-600" />
              </button>

              <button
                type="button"
                className="border rounded-lg h-12 flex justify-center items-center hover:bg-gray-50"
              >
                <FaApple />
              </button>

            </div>

            <button
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded-lg font-semibold"
            >
              Sign Up
            </button>

          </form>
        </div>
      </main>

      {/* Footer */}

      <footer className="flex justify-between px-8 py-6 text-sm text-gray-500">

        <p>© 2026 HarvestSafe</p>

        <div className="flex gap-5">
          <a href="#">Privacy Policy</a>
          <a href="#">Support</a>
        </div>

      </footer>

    </div>
  );
}
