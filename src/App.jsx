import Hero3D from './components/Hero3D.jsx';
import Skills from './components/Skills.jsx';
import PortfolioHighlights from './components/PortfolioHighlights.jsx';
import Memberships from './components/Memberships.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter selection:bg-emerald-400/30 selection:text-emerald-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            CyberShield
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#certs" className="hover:text-white">Certificates</a>
            <a href="#achievements" className="hover:text-white">Achievements</a>
            <a href="#memberships" className="hover:text-white">Member Of</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <Hero3D />
        <section id="skills" className="py-20"><Skills /></section>
        <section id="certs" className="py-12 sm:py-16"><PortfolioHighlights /></section>
        <section id="memberships" className="py-16"><Memberships /></section>

        <section id="contact" className="py-20 border-t border-neutral-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">Get in touch</h2>
            <p className="mt-2 text-neutral-400">Open to security engineering, red team, and bug bounty collaborations.</p>
            <div className="mt-6 grid sm:flex gap-3">
              <a href="mailto:youremail@example.com" className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 transition-colors">youremail@example.com</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-200 px-5 py-3 transition-colors">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-200 px-5 py-3 transition-colors">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} CyberShield • Cybersecurity & Ethical Hacking</p>
          <p className="text-neutral-500">Built with React, Tailwind, and Spline</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
