'use client'
export default function About() {
  const handleDownload = () => {
    const pdfUrl = "Rukia-Assefa-Resume.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <div className="mb-4">
          Results-driven Full Stack Developer with over one year of professional
          experience specializing in React, Node.js, and MongoDB. Adept at
          designing, building, and maintaining high-performance front-end
          applications, ensuring adherence to best practices and design
          patterns.
          <p className="mb-4">
            Well-versed in HTML5, CSS, and JavaScript, with a focus on creating
            user interfaces using relevant technologies. Proven experience in
            collaborating with cross-functional teams, ensuring robust,
            maintainable, and reusable code.
          </p>
        </div>
      </div>

      <div className="pt-8">
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <div
            title="Get quote now"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
            onClick={handleDownload}
          >
            Download my resume
          </div>
        </div>
      </div>
    </section>
  );
}
