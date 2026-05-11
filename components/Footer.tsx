export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-black">
      <style>{`
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); font-weight: 500; }
          50% { transform: scale(1.08); font-weight: 600; }
        }
        .footer-link { transition: all 0.3s ease; }
        .footer-link:hover { animation: pulse-scale 0.6s ease-in-out; font-weight: 600; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── Mobile layout ── */}
        <div className="flex flex-col md:hidden gap-8">

          {/* Logo centred */}
          <div className="flex justify-center">
            <a href="/">
              <img src="/Asset6.png" alt="HEARD Home Care Logo" className="h-24 w-auto" />
            </a>
          </div>

          {/* Quick Links | Services — edges align with bottom bar */}
          <div className="flex justify-between px-2">
            <div>
              <h3 className="font-semibold text-base mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/services" className="footer-link">Services</a></li>
                <li><a href="/about" className="footer-link">About Us</a></li>
                <li><a href="/careers" className="footer-link">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="footer-link">Assisted Living</a></li>
                <li><a href="#" className="footer-link">Companionship</a></li>
                <li><a href="#" className="footer-link">Personal Care</a></li>
                <li><a href="#" className="footer-link">24/7 Support</a></li>
              </ul>
            </div>
          </div>

          {/* Contact — centred with login button */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-base mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>(919) 659-5991</li>
              <li>team@heardhome.com</li>
              <li className="pt-2">
                <a href="/auth/login" className="inline-block w-full bg-[#332885] hover:bg-[#2a2375] text-white px-6 py-2 rounded-lg font-medium transition-colors text-center">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Desktop layout (unchanged) ── */}
        <div className="hidden md:flex md:items-end md:justify-between w-full">
          <div className="flex justify-start items-end md:w-1/3">
            <a href="/">
              <img src="/Asset6.png" alt="HEARD Home Care Logo" className="h-36 lg:h-40 w-auto" />
            </a>
          </div>
          <div className="flex-1 flex flex-col justify-end md:pl-16">
            <div className="grid grid-cols-3 gap-16 text-left w-full items-start">
              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="footer-link">Home</a></li>
                  <li><a href="/services" className="footer-link">Services</a></li>
                  <li><a href="/about" className="footer-link">About Us</a></li>
                  <li><a href="/careers" className="footer-link">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="footer-link">Assisted Living</a></li>
                  <li><a href="#" className="footer-link">Companionship</a></li>
                  <li><a href="#" className="footer-link">Personal Care</a></li>
                  <li><a href="#" className="footer-link">24/7 Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>(919) 659-5991</li>
                  <li>team@heardhome.com</li>
                  <li className="pt-2">
                    <a href="/auth/login" className="inline-block w-full bg-[#332885] hover:bg-[#2a2375] text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors text-center">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-sm text-gray-400 -mt-2">
          <div className="flex flex-col items-center md:items-start w-full md:flex-1">
            <span>&copy; {new Date().getFullYear()} HEARD Home Care</span>
            <span className="text-xs mt-1">150 North Wiget Lane STE 100, Walnut Creek, CA 94598</span>
          </div>
          {/* Terms + Back to top: row on mobile, separate on desktop */}
          <div className="flex items-center justify-between w-full md:contents gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors md:flex-1 md:text-center">
              Terms of Service
            </a>
            <a href="#top" className="hover:text-white transition-colors flex items-center gap-2 md:flex-1 md:justify-end">
              Back to top <span className="inline-block border border-gray-400 rounded p-1 text-xs">↑</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
