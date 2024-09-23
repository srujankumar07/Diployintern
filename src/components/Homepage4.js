import { ShirtIcon, TagIcon, PackageIcon } from "lucide-react"

export default function Homepage4() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-4">
          <div className="bg-white p-4 rounded-full shadow-lg mb-4">
            <ShirtIcon className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-green-500 font-semibold mb-2">CREATE</h2>
          <h3 className="text-2xl font-bold mb-4">custom products</h3>
          <p className="text-gray-600">
            Easily add your designs to a wide range of products using our free tools
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-4">
          <div className="bg-white p-4 rounded-full shadow-lg mb-4">
            <TagIcon className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-green-500 font-semibold mb-2">SELL</h2>
          <h3 className="text-2xl font-bold mb-4">on your terms</h3>
          <p className="text-gray-600">
            You choose the products, sale price, and where to sell
          </p>
        </div>

        <div className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-4">
          <div className="bg-white p-4 rounded-full shadow-lg mb-4">
            <PackageIcon className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-green-500 font-semibold mb-2">WE HANDLE</h2>
          <h3 className="text-2xl font-bold mb-4">fulfillment</h3>
          <p className="text-gray-600">
            Once an order is placed, we automatically handle all the printing and delivery logistics
          </p>
        </div>
      </div>
    </div>
  )
}