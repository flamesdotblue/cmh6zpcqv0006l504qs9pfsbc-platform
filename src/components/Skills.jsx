import { Shield, Bug, Code2, Cloud, Database, Network, Terminal } from 'lucide-react';

const skills = [
  {
    title: 'Offensive Security',
    icon: Bug,
    items: [
      'Red Team & Adversary Emulation',
      'Web App Pentesting (OWASP ASVS/Top 10)',
      'Network & Infra Assessment',
      'Social Engineering & Phishing Simulation',
      'Wireless & Mobile Testing',
    ],
  },
  {
    title: 'Defensive Engineering',
    icon: Shield,
    items: [
      'Threat Modeling & Risk Analysis',
      'Purple Teaming & Detection Engineering',
      'SIEM, EDR, and Log Hardening',
      'Security Policy & Compliance (ISO27001, SOC2)',
      'Incident Response Playbooks',
    ],
  },
  {
    title: 'Cloud & DevSecOps',
    icon: Cloud,
    items: [
      'IaC Security (Terraform, Kubernetes)',
      'AWS/Azure Hardening & IAM Design',
      'Supply Chain Security (SAST/DAST/SBOM)',
      'Secrets Mgmt & Zero Trust',
      'CI/CD Security Gates',
    ],
  },
  {
    title: 'Programming & Scripting',
    icon: Code2,
    items: [
      'Python, Go, Bash, PowerShell',
      'Exploit Dev Basics & PoC Automation',
      'API Security Testing',
      'Reverse Engineering Fundamentals',
      'Secure Code Review',
    ],
  },
];

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">Core skills</h2>
        <p className="mt-2 text-neutral-400">A blend of offensive testing, defensive engineering, and secure software delivery.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group) => (
          <div key={group.title} className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-5 hover:border-neutral-700 transition-colors">
            <div className="flex items-center gap-3">
              <group.icon className="h-5 w-5 text-emerald-400" />
              <h3 className="font-medium">{group.title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-neutral-400">
        <Badge icon={Network} label="Network" />
        <Badge icon={Database} label="Databases" />
        <Badge icon={Terminal} label="CLI-first" />
        <Badge icon={Cloud} label="Cloud-native" />
      </div>
    </div>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950/60 px-3 py-2">
      <Icon className="h-4 w-4 text-emerald-400" />
      <span>{label}</span>
    </div>
  );
}
