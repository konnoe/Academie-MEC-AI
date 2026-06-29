type NavItem<T extends string> = { id: T; label: string; icon: string; };

type SidebarProps<T extends string> = {
  currentPage: T;
  items: NavItem<T>[];
  onNavigate: (page: T) => void;
};

export function Sidebar<T extends string>({ currentPage, items, onNavigate }: SidebarProps<T>) {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-logo">🎓</div>
        <div>
          <div className="brand">Académie MEC AI</div>
          <div className="subtitle">ERP d’apprentissage personnel</div>
        </div>
      </div>

      <nav className="nav">
        {items.map((item) => (
          <button key={item.id} className={currentPage === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)}>
            <span>{item.icon}</span>{item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-panel">
        <strong>Sprint actuel</strong>
        <span>V0.2 — Foundation</span>
        <small>Dashboard + Design System</small>
      </div>
    </aside>
  );
}
