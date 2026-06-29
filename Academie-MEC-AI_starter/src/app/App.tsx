import { useMemo, useState } from 'react';
import { skills } from '../data/skills';
import { Dashboard } from '../features/dashboard/Dashboard';
import { SkillsPage } from '../features/skills/SkillsPage';
import { DiagnosticPage } from '../features/diagnostic/DiagnosticPage';
import { McDonaldsPage } from '../features/mcdonalds/McDonaldsPage';
import { RevisionsPage } from '../features/revisions/RevisionsPage';

type Page = 'dashboard' | 'skills' | 'diagnostic' | 'mcdonalds' | 'revisions';

const navItems: { id: Page; label: string }[] = [
  { id: 'dashboard', label: '🎯 Tableau de bord' },
  { id: 'skills', label: '🧭 Compétences' },
  { id: 'diagnostic', label: '🧪 Diagnostic' },
  { id: 'mcdonalds', label: "🍔 Cas McDonald's" },
  { id: 'revisions', label: '🧠 Révisions' },
];

export function App() {
  const [page, setPage] = useState<Page>('dashboard');
  const domains = useMemo(() => Array.from(new Set(skills.map((skill) => skill.domain))), []);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">🎓 Académie MEC AI</div>
        <div className="subtitle">ERP d’apprentissage personnel</div>
        <nav className="nav">
          {navItems.map((item) => (
            <button key={item.id} className={page === item.id ? 'active' : ''} onClick={() => setPage(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="side-card">
          <strong>Domaines</strong>
          {domains.map((domain) => <span key={domain}>{domain}</span>)}
        </div>
      </aside>

      <main className="main">
        {page === 'dashboard' && <Dashboard />}
        {page === 'skills' && <SkillsPage />}
        {page === 'diagnostic' && <DiagnosticPage />}
        {page === 'mcdonalds' && <McDonaldsPage />}
        {page === 'revisions' && <RevisionsPage />}
      </main>
    </div>
  );
}
