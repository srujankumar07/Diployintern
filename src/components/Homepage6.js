

export default function Homepage6() {
  return (
    <div className="w-full p-16 ">
      <div className="bg-green-100 p-12 md:p-4 rounded-3xl mb-4 relative overflow-hidden">
        <div className="flex flex-col md:flex-row p-12 justify-between items-center z-10 relative">
          <h2 className="text-green-800 text-xl md:text-2xl font-semibold mb-4 md:mb-0">
            Are you a large business looking for custom solutions?
          </h2>
          <button className="bg-white p-2 rounded-lg text-green-800 hover:bg-green-50">
            Talk to sales
          </button>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-green-400 to-transparent transform skew-x-12 hidden md:block"></div>
      </div>
      
      <div className="px-4 md:px-0 ">
  <div className="max-w-4xl mx-auto p-8">
    <div className="flex flex-col md:flex-row items-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-0 md:mr-6">
        Trusted by over 8M sellers around the world
      </h1>
      {/* Paragraph */}
      <p className="text-lg text-gray-600">
        Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
      </p>
    </div>
  </div>
</div>

    </div>
  )
}