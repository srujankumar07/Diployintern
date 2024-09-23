import { Coins, Rocket, Smartphone } from "lucide-react"

export default function Homepage2() {
  return (
    <div className="container mx-auto px-4 py-4 pb-36">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center bg-gray-100 p-4 rounded-xl">
          <div className="bg-green-100 rounded-full p-4 mb-4">
            <Coins className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Higher Profits</h2>
          <p className="text-gray-600">
            We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-100 p-4 rounded-xl">
          <div className="bg-purple-100 rounded-full p-4 mb-4">
            <Rocket className="w-12 h-12 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Robust Scaling</h2>
          <p className="text-gray-600">
            Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-gray-100 p-4 rounded-xl">
          <div className="bg-yellow-100 rounded-full p-4 mb-4">
            <Smartphone className="w-12 h-12 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Best Selection</h2>
          <p className="text-gray-600">
            With 900+ products and top quality brands, you can choose the best products for your business.
          </p>
        </div>
      </div>
    </div>
  )
}