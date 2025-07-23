import React from 'react'

const News = () => {
  return (
    <div className="bg-[#f9f9f9] py-10 px-6 sm:px-10 rounded-2xl text-center max-w-2xl mx-auto my-16">
  <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">Stay in the Loop</h2>
  <p className="text-gray-600 mb-6">
    Get the latest workspace updates, exclusive deals, and productivity tips straight to your inbox.  
    <br className="hidden sm:block" />
    No spam  just useful content, once a week.
  </p>
  <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
    <input
      type="email"
      placeholder="Enter your email address"
      required
      className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="w-full sm:w-auto bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
    >
      Subscribe
    </button>
  </form>
</div>

  )
}

export default News