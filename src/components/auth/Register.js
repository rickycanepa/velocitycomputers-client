import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const bio = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "bio": bio.current.value,
                "password": password.current.value
            }

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("velocity_token", res.token)
                        localStorage.setItem("velocity_id", res.user_id)
                        navigate("/login")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
            <main class="flex items-center justify-center h-screen bg-gray-900 text-white">
            <dialog ref={passwordDialog} class="dialog dialog--password bg-gray-900 text-white">
                <div class="text-lg mb-4">Passwords do not match</div>
                <button class="button--close bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form class="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg p-8" onSubmit={handleRegister}>
                <h1 class="text-3xl font-bold mb-8">Register an Account</h1>
                <div class="grid grid-cols-2 gap-4">
                <div class="col-span-1">
                    <label class="block text-lg font-medium mb-2" htmlFor="firstName">First Name</label>
                    <input ref={firstName} type="text" name="firstName" class="w-full px-4 py-3 rounded-lg border-none bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="First Name" required autoFocus />
                </div>
                <div class="col-span-1">
                    <label class="block text-lg font-medium mb-2" htmlFor="lastName">Last Name</label>
                    <input ref={lastName} type="text" name="lastName" class="w-full px-4 py-3 rounded-lg border-none bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Last Name" required />
                </div>
                </div>
                <fieldset class="mt-6">
                <label class="block text-lg font-medium mb-2" htmlFor="inputUsername">Username</label>
                <input ref={username} type="text" name="username" class="w-full px-4 py-3 rounded-lg border-none bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Username" required />
                </fieldset>
                <fieldset class="mt-6">
                <label class="block text-lg font-medium mb-2" htmlFor="inputPassword">Password</label>
                <input ref={password} type="password" name="password" class="w-full px-4 py-3 rounded-lg border-none bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Password" required />
                </fieldset>
                <fieldset class="mt-6">
                <label class="block text-lg font-medium mb-2" htmlFor="verifyPassword">Verify Password</label>
                <input ref={verifyPassword} type="password" name="verifyPassword" class="w-full px-4 py-3 rounded-lg border-none bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Verify Password" required />
                </fieldset>
                <fieldset class="mt-8">
                <label for="bio" class="block text-lg text-base font-medium mb-2">Bio</label>
                <textarea ref={bio} name="bio" class="w-full px-4 py-3 rounded-lg border-none bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Last Name" placeholder="Tell us a bit about yourself..."></textarea>
                </fieldset>

                <fieldset class="mt-8">
                 <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M6.293 6.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0L14 7.586V11a1 1 0 1 1-2 0V8.414l-3.293 3.293a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" clip-rule="evenodd" />
                </svg>
                </span>
                Register
                </button>
                </fieldset>

                <section class="text-sm text-gray-600 mt-4">
                Already registered?
                <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">Login</a>
                </section>
                </form>
                </main>
    )
}