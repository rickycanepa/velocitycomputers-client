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
                    localStorage.setItem("velocity_id", res.customer_id)
                    navigate("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <dialog ref={invalidDialog}>
          <div>Username or password was not valid.</div>
          <button
            className="absolute top-0 right-0 m-2 text-lg text-white hover:text-gray-400 focus:outline-none"
            onClick={(e) => invalidDialog.current.close()}
          >
            &times;
          </button>
        </dialog>
        <section className="mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">VelocityComputers</h1>
  
          <h2 className="text-center text-2xl font-medium mb-8">Sign in</h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            <fieldset>
              <label htmlFor="inputUsername" className="sr-only">
                Username
              </label>
              <input
                ref={username}
                type="username"
                id="username"
                className="w-full px-4 py-2 rounded-lg border-none bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Username"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                ref={password}
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-lg border-none bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Password"
                required
              />
            </fieldset>
            <fieldset className="text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="submit"
              >
                Sign In
              </button>
            </fieldset>
          </form>
        </section>
        <section className="text-center mt-8 flex-col items-center">
          <Link to='/register' className="text-gray-400 flex-col items-center"> Not a member yet?</Link>
          </section>
        </main>
        
    )
}