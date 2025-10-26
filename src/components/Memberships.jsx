import { Users, ShieldCheck, Globe } from 'lucide-react';

const groups = [
  {
    name: 'OWASP Foundation',
    role: 'Active Member',
    link: 'https://owasp.org',
    note: 'Community projects, ASVS/Cheat Sheets',
  },
  {
    name: '(ISC)²',
    role: 'Candidate / Member',
    link: 'https://www.isc2.org',
    note: 'Security leadership & certifications',
  },
  {
    name: 'EC-Council',
    role: 'Member',
    link: 'https://www.eccouncil.org',
    note: 'Ethical hacking and blue team training',
  },
  {
    name: 'HackerOne',
    role: 'Security Researcher',
    link: 'https://hackerone.com',
    note: 'Bug bounty programs and VDPs',
  },
  {
    name: 'DEF CON Groups',
    role: 'Local Chapter Attendee',
    link: 'https://defcongroups.org',
    note: 'Talks, workshops, and CTFs',
  },
];

export default function Memberships() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-8 flex items-center gap-2">
        <Users className="h-5 w-5 text-emerald-400" />
        <h2 className="text-2xl font-semibold">Member of</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <a key={g.name} href={g.link} target="_blank" rel="noreferrer" className="group rounded-2xl border border-neutral-800 hover:border-neutral-700 bg-neutral-950/60 p-5 transition-colors block">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium group-hover:text-white">{g.name}</p>
                <p className="text-sm text-neutral-400">{g.role}</p>
              </div>
              <div className="shrink-0 rounded-md border border-neutral-800 bg-neutral-900 p-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
            </div>
            <p className="mt-3 text-sm text-neutral-400 flex items-center gap-2">
              <Globe className="h-4 w-4 text-neutral-500" /> {g.note}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
