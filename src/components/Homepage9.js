import { logo } from "../assets";

export default function Component() {
    return (
      <header className="bg-white p-12 shadow-sm">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
          <img className="h-8 w-auto" src={logo} />
              
            <span className="text-2xl p-4 font-bold text-green-500">Printify</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-green-500 hover:text-green-600" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24H12.81V14.708H9.692V11.08h3.118V8.554c0-3.098 1.891-4.788 4.654-4.788 1.323 0 2.458.099 2.788.143v3.232l-1.915.001c-1.501 0-1.791.713-1.791 1.759v2.308h3.582l-.467 3.628h-3.115V24h6.105c.732 0 1.324-.592 1.324-1.324V1.325C24 .592 23.408 0 22.675 0z" />
              </svg>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.011 3.585-.069 4.851c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.851.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.174 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85C2.296 5.784 2.566 4.517 3.542 3.542c.975-.975 2.242-1.246 3.608-1.308C8.416 2.174 8.796 2.163 12 2.163zm0-2C8.735 0 8.353.012 7.07.07 5.365.153 3.9.577 2.764 1.713 1.628 2.849 1.204 4.314 1.07 6.018.012 8.353 0 8.735 0 12s.012 3.647.07 5.982c.134 1.704.558 3.169 1.693 4.305 1.136 1.136 2.701 1.56 4.405 1.693C8.353 23.988 8.735 24 12 24s3.647-.012 5.982-.07c1.704-.134 3.169-.558 4.305-1.693 1.136-1.136 1.56-2.701 1.693-4.405C23.988 15.647 24 15.265 24 12s-.012-3.647-.07-5.982c-.134-1.704-.558-3.169-1.693-4.305C20.27 1.584 18.805 1.16 17.101 1.027 15.265.988 15.882 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.325 6.162 6.162 0 0 0 0-12.325zm0 10.664a4.502 4.502 0 1 1 0-9.005 4.502 4.502 0 0 1 0 9.005zm5.656-10.664a1.44 1.44 0 1 1 0 2.879 1.44 1.44 0 0 1 0-2.879z" />
              </svg>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600" aria-label="LinkedIn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.017 3.003c-.76 0-1.474.293-2.017.823-.544.529-.836 1.213-.836 1.963v.25c0 .882.291 1.633.867 2.232.578.6 1.366.91 2.211.91h.005c.763 0 1.473-.293 2.016-.823.542-.53.836-1.213.836-1.963v-.25c0-.882-.291-1.633-.867-2.232-.578-.6-1.366-.91-2.211-.91h-.005zM15.828 9c-.591 0-1.033-.454-1.033-1.036 0-.584.442-1.036 1.033-1.036s1.033.453 1.033 1.036c0 .582-.442 1.036-1.033 1.036zm-6.038 1H8.636V24h3.153V11zm3.679-1H8.636V11h4.871zm2.92 0V24h3.153V11h-3.153zM3.012 9H0V24h3.012V9z" />
              </svg>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57c-.885.392-1.83.654-2.825.775 1.014-.607 1.794-1.564 2.163-2.724-.951.564-2.004.975-3.127 1.2C19.958 2.94 18.467 2 16.812 2c-3.241 0-5.873 2.658-5.873 5.933 0 .465.052.922.154 1.362-4.885-.246-9.21-2.578-12.113-6.132-.504.863-.791 1.86-.791 2.92 0 2.014 1.021 3.785 2.575 4.82-.948-.029-1.835-.292-2.606-.726v.073c0 2.814 2.006 5.16 4.659 5.685-.487.133-.997.205-1.524.205-.373 0-.738-.036-1.094-.106.738 2.307 2.887 3.977 5.425 4.025-1.98 1.548-4.46 2.465-7.164 2.465-.467 0-.927-.027-1.384-.079 2.608 1.663 5.7 2.633 9.004 2.633 10.817 0 16.731-8.95 16.731-16.704 0-.254-.006-.507-.017-.759C22.188 6.596 23.066 5.655 23.953 4.57z" />
              </svg>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.54 6.42c-.373-1.334-1.469-2.334-2.94-2.6C17.337 3 12 3 12 3S6.663 3 4.4 3.82C3.03 4.09 2.04 5.09 1.66 6.42 1.2 7.576 1 9.003 1 12s.2 4.424.4 5.58c.38 1.33 1.37 2.33 2.74 2.6C6.663 21 12 21 12 21s5.337 0 7.6-.82c1.47-.26 2.56-1.26 2.94-2.6.38-1.156.4-2.584.4-5.58s-.02-4.424-.4-5.58zm-13.08 8.58V9.43l6.48 3.29-6.48 3.29z" />
              </svg>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600" aria-label="TikTok">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm-.001 18.002c-1.23 0-2.211-.43-2.904-1.15-.691-.724-1.098-1.817-1.098-3.27V9.75H9.5V6.5h2.499V9.75h1.75v2.563H11.001v5.689c0 1.092.37 1.927 1.004 2.513.64.57 1.536.78 2.883.78V18h-1.5c-1.047 0-1.855-.371-2.491-1.031-.633-.662-.974-1.611-.974-2.815v-2.563h2.5V6.5h-1.5v2.563H8.5v2.563c0 1.092.371 1.927 1.005 2.513.635.57 1.533.78 2.883.78V18h-1.5c-1.046 0-1.854-.371-2.491-1.031-.633-.662-.974-1.611-.974-2.815v-5.689H9.5v2.562H7.5V12c0 1.217.36 2.242 1.026 2.979.68.732 1.663 1.15 2.658 1.15v1.854c-2.474 0-4.5-2.026-4.5-4.5v-1.428H8.5v-3h-2V6.5h1.5V4.5h2v2H9.5v1.75h2.5v2.5H11v2.563c0 1.092.371 1.927 1.005 2.513.635.57 1.533.78 2.883.78V18h-1.5z" />
              </svg>
            </a>
            <a href="#" className="text-green-500 hover:text-green-600" aria-label="Reddit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22.5c-5.845 0-10.5-4.655-10.5-10.5S6.155 1.5 12 1.5 22.5 6.155 22.5 12 17.845 22.5 12 22.5zm-3.843-5.303c-.39 0-.765-.147-1.047-.418-1.78-1.478-3.062-3.308-3.404-5.239-.156-.803.02-1.685.44-2.417.418-.736 1.092-1.336 1.911-1.336 1.07 0 1.76.693 2.105 1.527.367.889.44 1.792.183 2.68-.05.215-.182.4-.406.4H9.556c-.227 0-.355-.184-.407-.403-.167-.822-.171-1.727-.02-2.682.146-.85.52-1.637 1.049-2.184.08-.085.192-.147.313-.147.122 0 .232.062.308.147.257.272.467.594.617.948.09.226.14.454.158.684h2.707c.022-.243.079-.465.158-.684.15-.354.36-.676.617-.948.075-.085.186-.147.308-.147.121 0 .233.062.313.147.528.547.903 1.334 1.049 2.184.151.955.148 1.86-.02 2.682-.052.219-.181.403-.407.403h-.891c-.224 0-.356-.184-.406-.4-.257-1.888-.4-1.791-.59-2.682-.45-.49-1.055-.73-1.711-.73-.822 0-1.684.374-2.361 1.01-1.043.921-1.672 2.22-1.618 3.439.03.55.242 1.072.678 1.527 1.166 1.157 2.568 1.733 4.124 1.733.397 0 .779-.017 1.158-.05-.02-.196-.048-.392-.085-.585-.222-1.077-.899-2.199-2.088-2.199-.878 0-1.374.43-1.459.861-.083.434.176.794.615 1.174.38.327.966.63 1.88.63.397 0 .779-.017 1.158-.05-.02-.196-.048-.392-.085-.585-.222-1.077-.899-2.199-2.088-2.199-.878 0-1.374.43-1.459.861-.083.434.176.794.615 1.174.38.327.966.63 1.88.63.447 0 .88-.052 1.292-.153.37-.09.724-.225 1.059-.406-.084.299-.173.603-.273.895-.167.432-.408.831-.702 1.161-.142.166-.306.313-.493.432-.277.177-.626.283-.98.283z" />
              </svg>
            </a>
          </nav>
        </div>
      </header>
    );
  }
  