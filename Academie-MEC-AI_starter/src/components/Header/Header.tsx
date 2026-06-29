import { Badge } from '../Badge/Badge';

type HeaderProps = { title: string; subtitle: string; };

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="page-header">
      <div>
        <Badge status="ai">V0.2 Foundation</Badge>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="header-action"><span>🎯 Apprendre. Comprendre. Manager.</span></div>
    </header>
  );
}
