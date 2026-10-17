"use client"
import { authClient, signUp } from "@/lib/auth-client"
import Link from "next/link"
import { FaGithub, FaGoogle } from "react-icons/fa"


function page() {
  const handleGithubSignUp = async () => {
    const data = await authClient.signIn.social({
        provider: "github",
         callbackURL: "/", 
        
    })
}
  const handleGoogleSignUp = async () => {
    const data = await authClient.signIn.social({
        provider: "github",
         callbackURL: "/", 
        
    })
}
    const handleSignUp = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData.entries())
    
    const { data, error } = await signUp.email({
       ...user,
      callbackURL: "/", 
    })
     if (data){
      console.log(data)
      }
    if (error){
     console.log(error)
     }
    
  }
  return (
     <div className="flex min-h-screen flex-col items-center justify-center bg-base-200 px-4 py-10">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-success">
          Sign Up
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-base-content/70">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে নতুন অ্যাকাউন্ট তৈরি করুন।
        </p>
      </div>

      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSignUp} className="space-y-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                আপনার নাম
              </legend>

              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="আপনার পুরো নাম লিখুন"
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                ইমেইল
              </legend>

              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="আপনার ইমেইল লিখুন"
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                পাসওয়ার্ড
              </legend>

              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="কমপক্ষে ৮ অক্ষরের পাসওয়ার্ড"
                minLength={8}
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                পাসওয়ার্ড নিশ্চিত করুন
              </legend>

              <input
                type="password"
                name="confirmPassword"
                className="input w-full"
                placeholder="আবার পাসওয়ার্ড লিখুন"
                minLength={8}
                required
              />
            </fieldset>

            <button
              type="submit"
              className="btn btn-success mt-2 w-full"
            >
              সাইন আপ করুন
            </button>
          </form>

        <div className="divider">অথবা</div>

   <div className="flex flex-col gap-3">
  <button onClick={handleGoogleSignUp }
    type="button"
    className="btn btn-outline w-full"
  >
    <FaGoogle size={18} />
    Google দিয়ে চালিয়ে যান
    </button>

    <button onClick={handleGithubSignUp}
    type="button"
    className="btn btn-outline w-full"
      >
      <FaGithub size={18} />
      GitHub দিয়ে চালিয়ে যান
      </button>
       </div>
        <p className="mt-4 text-center text-sm">
           অ্যাকাউন্ট আছে?
            <Link
              href="/signin"
              className="link link-success ml-1 font-semibold"
            >
              সাইন ইন করুন
            </Link>
          </p>

          <div className="mt-4 text-center">
            <Link
              href="/"
              className="link link-hover text-sm text-base-content/60"
            >
              ← হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default page
