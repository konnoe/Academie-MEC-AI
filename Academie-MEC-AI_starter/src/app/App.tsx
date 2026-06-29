import { useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Dashboard } from '../features/dashboard/Dashboard';
import { SkillsPage } from '../features/skills/SkillsPage';
import { DiagnosticPage } from '../features/diagnostic/DiagnosticPage';
import { McDonaldsPage } from '../features/mcdonalds/McDonaldsPage';
import { RevisionsPage } from '../features/revisions/RevisionsPage';

type Page = 'dashboard' | 'skills' | 'diagnostic' | 'mcdonalds' | 'revisions';

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Tableau de bord', icon: '📊' },
  { id: 'skills', label: 'Compétences', icon: '🎯' },
  { id: 'diagnostic', label: 'Diagnostic', icon: '🧪' },
  { id: 'mcdonalds', label: "McDonald's", icon: '🍔' },
  { id: 'revisions', label: 'Révisions', icon: '🧠' },
];

export function App() {
  const [page, setPage] = useState<Page>('dashboard');

  return (
    <div className="app-shell">
      <Sidebar currentPage={page} items={navItems} onNavigate={setPage} />
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
