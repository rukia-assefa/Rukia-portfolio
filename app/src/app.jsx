import About from "./components/about";
import Experience from "./components/experience";
import Sidebar from "./components/sidebar";
import Skills from "./components/skills";
import "./App.css";
import Contact from "./components/contact";
import Projects from "./components/projects";

function App() {
  return (
    <div
      className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900"
      data-new-gr-c-s-check-loaded="14.1162.0"
      data-gr-ext-installed=""
    >
      <div id="__next">
        <div className="__variable_20b187 group/spotlight relative">
          <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
              background:
                "radial-gradient(600px at 1116px 189px, rgba(29, 78, 216, 0.15), transparent: 80%)",
            }}
          ></div>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Sidebar />
              <main id="content" className="lg:w-1/2 lg:pb-24 lg:pt-0">
                <section
                  id="writing"
                  className="mb scroll-mt-16 md:mb-24  lg:scroll-mt-24"
                  aria-label="Blog posts"
                ></section>
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </main>

              <div>
                <button
                  className="hover:-text-teal-300 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:R4l6:"
                  data-state="closed"
                >
                  <span className="sr-only">Click to time travel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
