import { authClient } from "@/lib/auth-client"
import { toast } from "react-toastify"


 function UpdateName() {
    const handleUpdateName =async (e) => {
         e.preventDefault()
            const formData = new FormData(e.target)
            const user = Object.fromEntries(formData.entries())  
             if (!user.name){
              toast.error("নাম লিখুন!") 
              return
             }   
            const { data, error } = await authClient.updateUser({
             name:user.name
       })
      if (error) {
      toast.error(error.message)
       return
      }
     toast.success("নাম সফলভাবে আপডেট হয়েছে!")
       }
  return (
     <div className="card-body bg-white shadow-md p-5 my-5 rounded-2xl">
        <h3 className="text-xl">তথ্য</h3>
      <form onSubmit={handleUpdateName}>
          <fieldset className="fieldset">
          <label className="label">নাম </label>
          <input name="name" className="input w-full bg-white border border-gray-500" placeholder="" />
          <button  className="btn btn-neutral mt-4 bg-green-500">আপডেট </button>
        </fieldset>
      </form>
      </div>
  )
}

export default UpdateName
