import { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { logo } from '../assets'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState('')

  const toggleMenu = () => setIsOpen(!isOpen)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? '' : section)
  }

  const NavItem = ({ title, items = [] }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return (
      <div className="relative group">
        <button
          className="flex items-center space-x-1 hover:text-green-600"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span>{title}</span>
          {items.length > 0 && <ChevronDown className="w-4 h-4" />}
        </button>
        {items.length > 0 && isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }

  const MobileNavItem = ({ title, items = [] }) => (
    <div>
      <button
        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100"
        onClick={() => toggleSection(title)}
      >
        <span>{title}</span>
        {items.length > 0 && (
          expandedSection === title ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )
        )}
      </button>
      {expandedSection === title && items.length > 0 && (
        <div className="pl-6 mt-2 space-y-2">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
    <img className="h-8 w-auto" src={logo} alt="Printify" />
    <span className="text-2xl p-4 font-bold text-green-500">Printify</span>
  </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavItem title="Catalog" />
                <NavItem
                  title="How it works"
                  items={[
                    'How Printify Works',
                    'Print On Demand',
                    'Printify Quality Promise',
                    'What to Sell?'
                  ]}
                />
                <NavItem title="Pricing" />
                <NavItem title="Blog" />
                <NavItem
                  title="Services"
                  items={[
                    'Printify studio',
                    'Printify Express Delivery',
                    'Transfer Products',
                    'Order in bulk',
                    'Experts programs'
                  ]}
                />
                <NavItem
                  title="Use-cases"
                  items={[
                    'Merch for fans',
                    'Merch for eCommerce',
                    'Merch for Enterprises',
                    'Grow your store'
                  ]}
                />
                <NavItem title="Need help?" items={['Help center', 'Contacts']} />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600">
                Log in
              </button>
              <button className="ml-3 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">
                Sign up
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem title="Catalog" />
            <MobileNavItem
              title="How it works"
              items={[
                'How Printify Works',
                'Print On Demand',
                'Printify Quality Promise',
                'What to Sell?'
              ]}
            />
            <MobileNavItem title="Pricing" />
            <MobileNavItem title="Blog" />
            <MobileNavItem
              title="Services"
              items={[
                'Printify studio',
                'Printify Express Delivery',
                'Transfer Products',
                'Order in bulk',
                'Experts programs'
              ]}
            />
            <MobileNavItem
              title="Use-cases"
              items={[
                'Merch for fans',
                'Merch for eCommerce',
                'Merch for Enterprises',
                'Grow your store'
              ]}
            />
            <MobileNavItem title="Need help?" items={['Help center', 'Contacts']} />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-100 w-full text-left">
                Log in
              </button>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <button className="block w-full px-3 py-2 text-base font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-700">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}