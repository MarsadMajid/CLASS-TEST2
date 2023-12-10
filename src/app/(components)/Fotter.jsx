import React from 'react'
import Link from 'next/link'
const Fotter = () => {
  return (
    <div>
    
    <footer className="bg-gray-800 text-white ">
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
            {/* Footer Logo and Text */}
            <div className="mb-8">
              <Link href="#" className="text-lg font-semibold flex items-center">
                <span>M</span>
                <span>Medimoor</span>
              </Link>
              <p className="text-gray-300">Medimoor provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
              <p className="text-gray-300">&copy; Medimoor PTY LTD 2023. All rights reserved.</p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="footer-links">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Find a doctor</Link></li>
                <li><Link href="#">Apps</Link></li>
              </ul>
            </div>

            {/* Region Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Region</h3>
              <ul className="footer-links">
                <li><Link href="#">Indonesia</Link></li>
                <li><Link href="#">Singapore</Link></li>
                <li><Link href="#">Hongkong</Link></li>
                <li><Link href="#">Canada</Link></li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="footer-links">
                <li><Link href="#">Help center</Link></li>
                <li><Link href="#">Contact support</Link></li>
                <li><Link href="#">Instructions</Link></li>
                <li><Link href="#">How it works</Link></li>
              </ul>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Fotter