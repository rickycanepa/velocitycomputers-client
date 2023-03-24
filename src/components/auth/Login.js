import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../managers/AuthManager"


export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        loginUser(user)
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("velocity_token", res.token)
                    localStorage.setItem("velocity_id", res.user_id)
                    navigate("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
<main class="bg-gray-50 flex flex-col items-center justify-center min-h-screen">
  <dialog ref={invalidDialog}>
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Oops!</strong>
      <span class="block sm:inline"> Username or password was not valid.</span>
      <button class="absolute top-0 right-0 px-2 py-1" onclick={(e) => invalidDialog.current.close()}>
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 6.066 4.652a1 1 0 10-1.414 1.414L8.586 10l-3.934 3.934a1 1 0 001.414 1.414L10 11.414l3.934 3.934a1 1 0 001.414-1.414L11.414 10l3.934-3.934a1 1 0 000-1.414z"/></svg>
      </button>
    </div>
  </dialog>
  <section class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 class="text-center text-3xl mb-8">VelocityComputers</h1>
    <form class="space-y-6" onSubmit={handleLogin}>
      <div>
        <label class="block text-gray-700 font-bold mb-2" for="username">
          Username
        </label>
        <input
          ref={username}
          type="username"
          id="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Username"
          required
          autofocus
        />
      </div>
      <div>
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input
          ref={password}
          type="password"
          id="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Password"
          required
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <Link to='/register' class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Not a member yet?
        </Link>
      </div>
    </form>
  </section>
</main>

        
    )
}