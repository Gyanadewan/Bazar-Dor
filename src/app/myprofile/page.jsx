"use client"
import { authClient } from "@/lib/auth-client"
import { HiOutlineArrowUturnLeft } from "react-icons/hi2"


function page() {
   const { data: session } = authClient.useSession()
    const user = session?.user
     const handleSignout = async () => {
        await authClient.signOut()
      }
  return (
    <div className="max-w-2xl mx-auto  mt-5 text-black ">
       <div className="py-3">
        <h2 className="text-xl font-bold">আমার প্রোফাইল</h2>
        <p className="">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
       </div>
        <div className=" bg-white shadow-md p-5 rounded-2xl ">
        <div className="flex items-center gap-3">
           <img
           src={
            user?.image ||
            "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
          }
          alt={user?.name || "User"}
          className="h-10 w-10 rounded-full "
        />
              <div>
                 <h3>Rezwan Ahmed</h3>
                <p>rezwanahmed@gmail.com</p>
              </div>
             <div className="ml-auto">
                    <button onClick={handleSignout}
                    className="flex w-full items-center justify-start gap-2 text-red-500"
                     >
                        <HiOutlineArrowUturnLeft />
                         <span>সাইন আউট</span>
                      </button>
             </div>
        </div>
        <div>

        </div>
    </div>

      <div className="card-body bg-white shadow-md p-5 my-5 rounded-2xl">
        <h3 className="text-xl">তথ্য</h3>
        <fieldset className="fieldset">
          <label className="label">নাম </label>
          <input type="name" className="input w-full bg-white border border-gray-500" placeholder="" />
          <button className="btn btn-neutral mt-4 bg-green-500">আপডেট </button>
        </fieldset>
      </div>
    </div>
 
  )
}

export default page
