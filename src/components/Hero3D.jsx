import Spline from '@splinetool/react-spline';
import { ShieldCheck, Lock, Trophy } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative">
      <div className="relative h-[72vh] sm:h-[78vh] lg:h-[86vh] overflow-hidden">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-neutral-950/30 to-neutral-950" />
        <div className="absolute inset-0 flex items-end sm:items-center justify-center">
          <div className="max-w-6xl w-full px-4 sm:px-6">
            <div className="pointer-events-auto bg-neutral-950/40 backdrop-blur rounded-2xl border border-emerald-500/20 p-5 sm:p-8 shadow-[0_0_40px_-10px_rgba(16,185,129,0.35)]">
              <p className="text-emerald-400 text-xs sm:text-sm font-medium tracking-wider uppercase">Cybersecurity • Ethical Hacking</p>
              <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
                Fortify. Test. Trust.
              </h1>
              <p className="mt-3 sm:mt-4 text-neutral-300 max-w-2xl">
                I help organizations harden their systems through offensive testing and defensive engineering. Red teaming, vulnerability research, and secure-by-design pipelines.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 transition-colors">
                  <ShieldCheck className="h-5 w-5" /> Start a security review
                </a>
                <a href="#skills" className="inline-flex items-center gap-2 rounded-md border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-200 px-5 py-3 transition-colors">
                  <Lock className="h-5 w-5" /> Explore skills
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /><span>Security by design</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-emerald-400" /><span>Zero trust mindset</span></div>
                <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-emerald-400" /><span>CTF & bug bounty track</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
