"use client"

import { signIn } from "@/lib/auth-client"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { toast } from "react-toastify"

function SignInPage() {
  const handleSignIn = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const user = Object.fromEntries(formData.entries())

    const { data, error } = await signIn.email({
      ...user,
      callbackURL: "/",
    })
    if (error) {
      toast.error(error.message)
      return
    }
    if (data) {
     toast.success("সফলভাবে সাইন ইন হয়েছে!")
    }
  }

  const handleSocialSignIn = async (provider) => {
    const { error } = await signIn.social({
      provider,
      callbackURL: "/",
    })
    if (error) {
      alert(error.message)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base-200 px-4 py-10">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-success">
          সাইন ইন
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-base-content/70">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSignIn} className="space-y-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">ইমেইল</legend>

              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="আপনার ইমেইল লিখুন"
                required
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">পাসওয়ার্ড</legend>

              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                required
              />
            </fieldset>

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="link link-success text-sm"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            <button type="submit" className="btn btn-success w-full">
              সাইন ইন করুন
            </button>
          </form>

          <div className="divider">অথবা</div>

          <button
            type="button"
            onClick={() => handleSocialSignIn("google")}
            className="btn btn-outline w-full"
          >
            Google দিয়ে সাইন ইন করুন
          </button>

          <button
            type="button"
            onClick={() => handleSocialSignIn("github")}
            className="btn btn-outline w-full"
          >
            <FaGithub size={18} />
            GitHub দিয়ে চালিয়ে যান
          </button>

          <p className="mt-4 text-center text-sm">
            অ্যাকাউন্ট নেই?
            <Link
              href="/signup"
              className="link link-success ml-1 font-semibold"
            >
              সাইন আপ করুন
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
    </main>
  )
}

export default SignInPage