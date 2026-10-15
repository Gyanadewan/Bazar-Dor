

function loading() {
  return (
       <div className="flex min-h-screen items-center justify-center bg-base-200">
      <div className="flex flex-col items-center gap-3">
        <span className="loading loading-spinner loading-lg text-success"></span>

        <p className="text-sm font-medium text-base-content/70">
          ডেটা লোড হচ্ছে...
        </p>
      </div>
    </div>
  )
}

export default loading
