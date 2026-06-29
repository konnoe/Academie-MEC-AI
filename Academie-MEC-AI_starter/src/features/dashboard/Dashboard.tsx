import { skills } from '../../data/skills';

export function Dashboard() {
  const highPriority = skills.filter((skill) => skill.priority >= 5);

  return (
    <>
      <section className="hero">
        <span className="badge">V0.1</span>
        <h1>Tableau de bord</h1>
        <p>Base React/Electron prête pour GitHub.</p>
      </section>

      <section className="grid">
        <div className="card"><h2>{skills.length}</h2><p>compétences créées</p></div>
        <div className="card"><h2>{highPriority.length}</h2><p>priorités hautes</p></div>
        <div className="card"><h2>25 min</h2><p>format de séance conseillé</p></div>
      </section>

      <section className="panel">
        <h2>Priorités de départ</h2>
        <ul>
          {highPriority.map((skill) => <li key={skill.id}><strong>{skill.domain}</strong> — {skill.title}</li>)}
        </ul>
      </section>
    </>
  );
}
