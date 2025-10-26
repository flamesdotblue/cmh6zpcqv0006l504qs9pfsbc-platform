import { Award, Trophy, ExternalLink } from 'lucide-react';

const certificates = [
  { name: 'CompTIA Security+', org: 'CompTIA', id: 'Credential ID: XXXX-XXXX', url: '#' },
  { name: 'Certified Ethical Hacker (CEH)', org: 'EC-Council', id: 'Credential ID: XXXX-XXXX', url: '#' },
  { name: 'eJPT', org: 'INE Security', id: 'Credential ID: XXXX-XXXX', url: '#' },
  { name: 'AWS Security Specialty', org: 'Amazon Web Services', id: 'Credential ID: XXXX-XXXX', url: '#' },
];

const achievements = [
  { title: 'Top 5% on HackerOne signal', detail: 'High-signal reports across web and cloud targets' },
  { title: 'CTF podium finishes', detail: 'Placed in multiple regional CTFs (Web, Forensics, Crypto)' },
  { title: 'Open-source security contributions', detail: 'Rules for Sigma/YARA and tooling improvements' },
  { title: 'Threat modeling at scale', detail: 'Led org-wide threat modeling initiative for 20+ services' },
];

export default function PortfolioHighlights() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-400" />
            <h2 className="text-xl font-semibold">Certificates</h2>
          </div>
          <ul className="mt-5 space-y-4">
            {certificates.map((c) => (
              <li key={c.name} className="rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-neutral-400">{c.org} • {c.id}</p>
                  </div>
                  <a href={c.url} className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm">
                    View credential <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="achievements" className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-emerald-400" />
            <h2 className="text-xl font-semibold">Achievements</h2>
          </div>
          <ul className="mt-5 grid sm:grid-cols-2 gap-4">
            {achievements.map((a) => (
              <li key={a.title} className="rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors p-4">
                <p className="font-medium">{a.title}</p>
                <p className="text-sm text-neutral-400 mt-1">{a.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
