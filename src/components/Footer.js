export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Integrations</h2>
            <ul className="space-y-2">
              {['Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTok Shop', 'PrestaShop', 'BigCommerce', 'Wix', 'WooCommerce', 'Squarespace', 'Printify API', 'Printify Pop-Up Store', 'Shutterstock'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Discover</h2>
            <ul className="space-y-2">
              {['Blog', 'Guides', 'Products', 'Etsy print-on-demand', 'Shopify print-on-demand', 'Woocommerce print-on-demand', 'Wix print-on-demand', 'Squarespace print-on-demand', 'Make Your Own Shirt', 'Brands', 'Pricing', 'Shipping Rates', 'Mockup Generator'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Start selling</h2>
            <ul className="space-y-2">
              {['Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks', 'Custom Branding', 'Sell on Etsy', 'Sell on Social Media', 'Free T-shirt Designs', 'Custom Products', 'Custom All-Over-Print Hoodies', 'Start a Clothing Line', 'Start POD Business', 'Bulk Orders'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Printify</h2>
            <ul className="space-y-2">
              {['Print on Demand', 'Print Providers', 'Experts Program', 'Printify Express Delivery', 'Become a Partner', 'About', 'Printify Quality Promise', 'Jobs', 'Webinars', 'Printing Profits Podcast', 'Contact Us', 'Affiliate', 'Contact Sales', 'POD Glossary', 'Network Fulfillment Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
