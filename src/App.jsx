import { useState } from 'react'
import { MoonIcon } from '@heroicons/react/24/outline'
import { SunIcon } from '@heroicons/react/24/outline'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode && (savedMode === 'true') !== darkMode) {
    setDarkMode(savedMode === 'true')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-content min-h-screen transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 bg-background shadow-md z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/images/logo.svg" alt="Logo" className="w-12 h-12 mr-4" />
              <h1 className="text-2xl font-outfit font-bold">Abhi Ramachandran</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-primary hover:text-secondary transition-colors font-geist-mono">About</a>
              <a href="#projects" className="text-primary hover:text-secondary transition-colors font-geist-mono">Projects</a>
              <a href="#work" className="text-primary hover:text-secondary transition-colors font-geist-mono">Work</a>
              <a href="#contact" className="text-primary hover:text-secondary transition-colors font-geist-mono">Contact</a>
            </nav>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className=" text-content px-4 py-2 rounded hover:bg-content hover:text-background transition-colors duration-300"
            >
              {darkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section id="about" className="text-center mb-16">
            <img 
              src="/images/30271627.jpeg" 
              alt="Abhiram Ramachandran" 
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h2 className="text-4xl font-outfit font-bold mb-4">Hello! I'm Abhi</h2>
            <p className="text-lg font-geist-mono max-w-2xl mx-auto leading-relaxed">
              I'm an Honors student at Drexel studying Computer Science with concentrations in AI/ML and 
              Systems Architecture. I'm also minoring in Business Analytics. Most of my work experiences are in Software 
              Development and AI/ML Engineering.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <h2 className="text-3xl font-outfit font-bold mb-8 text-center">Projects</h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-center mb-6 font-geist-mono italic">
                Link to <a href="http://cs.drexel.edu/~bls96/" target="_blank" className="text-primary hover:text-secondary">CS 164 Website</a> (Check it out, Dr. Stuart is pretty cool)
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Labs */}
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-outfit font-semibold mb-4">Labs</h3>
                  <ul className="space-y-2 font-geist-mono">
                    <li><a href="/cs164/labs/boolean.html" className="text-primary hover:text-secondary">Lab 2 - Boolean Algebra</a> (9/30/22)</li>
                    <li><a href="/cs164/labs/numbers.html" className="text-primary hover:text-secondary">Lab 3 - Running the Numbers</a> (10/7/22)</li>
                    <li><a href="/cs164/labs/compare.html" className="text-primary hover:text-secondary">Lab 4 - Full Comparator</a> (10/18/22)</li>
                  </ul>
                </div>

                {/* Projects */}
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-outfit font-semibold mb-4">Projects</h3>
                  <ul className="space-y-2 font-geist-mono">
                    <li><a href="/cs164/tranq/fsm.html" className="text-primary hover:text-secondary">Finite State Machine - Project 1</a> (10/28/22)</li>
                    <li>
                      <a href="/cs164/tranq/vpet.html" className="text-primary hover:text-secondary">Virtual Pe(s)t Project - Project 2</a> (12/4/22)
                      <ul className="ml-4 mt-1">
                        <li><a href="/cs164/tranq/docs/vpet_docs.html" className="text-primary hover:text-secondary">Documentation</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Tranquility */}
              <div className="mt-8 bg-content/5 p-6 rounded-lg">
                <h3 className="text-2xl font-outfit font-semibold mb-4">Tranquility!</h3>
                <p className="font-geist-mono italic mb-4">
                  Tranquility is Dr. Stuart's own programming language designed to help us understand how computing works.
                </p>
                <ul className="space-y-2 font-geist-mono">
                  <li><a href="/cs164/tranq/hello.html" className="text-primary hover:text-secondary">hello.t</a> (10/25/22)</li>
                  <li><a href="/cs164/tranq/3x1.html" className="text-primary hover:text-secondary">3x1.t</a> (10/25/22)</li>
                  <li><a href="/cs164/tranq/cubes.html" className="text-primary hover:text-secondary">cubes.t (Lab 6)</a> (10/28/22)</li>
                  <li><a href="/cs164/tranq/lab7.html" className="text-primary hover:text-secondary">lab7.t (Lab 7)</a> (10/28/22)</li>
                  <li><a href="/cs164/tranq/lab8.html" className="text-primary hover:text-secondary">lab8.t (Lab 8)</a> (10/28/22)</li>
                </ul>
              </div>

              {/* CI 102 */}
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-outfit font-bold">
                  <a href="/ci102/index.html" className="text-primary hover:text-secondary">CI 102</a>
                </h2>
              </div>
            </div>
          </section>

          {/* Font Test Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-outfit font-bold mb-6 text-center">Font Test</h2>
            <div className="space-y-4 text-center">
              <p className="font-outfit text-xl">This is Outfit font (headings)</p>
              <p className="font-geist-mono text-lg">This is Geist Mono font (body text)</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-content/5 mt-16 py-8">
          <section id="contact" className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-outfit font-bold mb-6">Contact</h2>
            <div className="space-y-2 font-geist-mono">
              <p>Email: <a href="mailto:ar3855@drexel.edu" className="text-primary hover:text-secondary">abhiram.ramachandran@drexel.edu (school)</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/abhiramramachandran" target="_blank" className="text-primary hover:text-secondary">Abhiram Ramachandran</a></p>
              <p>Github: <a href="https://www.github.com/theabhiramr" target="_blank" className="text-primary hover:text-secondary">@theabhiramr</a></p>
            </div>
          </section>
        </footer> 
      </div>
    </div>
  )
}



export default App
