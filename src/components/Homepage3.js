import { Image3 } from "../assets"

export default function Homepage3() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:h-[600px]">
            <img
              src={Image3}
              alt="Product customization preview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg h-4/5 w-4/5"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Easily add your design to a wide range of products
            </h1>
            <p className="text-lg text-gray-600">
              With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
           
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              All products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}