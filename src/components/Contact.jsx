import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-[#F4F8D3] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A6F1E0] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#F7CFD8] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="section-container relative z-10">
        <h2 className="section-title text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 text-center mb-12 leading-relaxed">
            I'm always open to discussing opportunities in AI, ML, and data
            science. Whether you're working on LLM applications, NLP systems,
            or building data-driven products, let's connect.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-white border-[#73C7C7]/30 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#73C7C7] flex items-center justify-center text-3xl shadow-lg">
                ✉️
              </div>
              <h3 className="text-sm font-display font-semibold text-gray-600 uppercase tracking-wide mb-3">
                Email
              </h3>
              <a
                href="mailto:priyasowmi94@gmail.com"
                className="text-base md:text-lg text-[#73C7C7] hover:text-[#5fb3b3] transition-all font-display font-semibold break-all"
              >
                priyasowmi94@gmail.com
              </a>
            </div>

            <div className="card bg-white border-[#A6F1E0]/30 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#A6F1E0] flex items-center justify-center text-3xl shadow-lg">
                📍
              </div>
              <h3 className="text-sm font-display font-semibold text-gray-600 uppercase tracking-wide mb-3">
                Location
              </h3>
              <p className="text-base md:text-lg text-gray-900 font-display font-semibold">
                Paris, France
              </p>
            </div>

            <div className="card bg-white border-[#F7CFD8]/30 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F7CFD8] flex items-center justify-center text-3xl shadow-lg">
                📞
              </div>
              <h3 className="text-sm font-display font-semibold text-gray-600 uppercase tracking-wide mb-3">
                Phone
              </h3>
              <a
                href="tel:+33755167896"
                className="text-base md:text-lg text-[#73C7C7] hover:text-[#5fb3b3] transition-all font-display font-semibold"
              >
                +33 7 55 16 78 96
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-[#73C7C7] text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Sowmipriya Rajendiran. All rights
            reserved.
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Contact

