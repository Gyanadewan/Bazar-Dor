"use client"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"
import UserDropdown from "./UserDropdown"


function UserInfo() {
    const {data:session} = authClient.useSession()
    const user = session?.user
  return (
       <div>
        {
         user? 
             <div>
                  <UserDropdown></UserDropdown>
             </div> 
            :
              <div className="flex items-center gap-2">
          <Link href='/signin'>
            <button className="rounded-lg border border-green-700 px-3 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 md:px-5">
              সাইন ইন
            </button>
          </Link>

            <Link href="/signup">
            <button className="rounded-lg bg-green-700 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-800 md:px-5">
              সাইন আপ
            </button>
            </Link>
          </div>
        }
       </div>
        
  )
}

export default UserInfo
