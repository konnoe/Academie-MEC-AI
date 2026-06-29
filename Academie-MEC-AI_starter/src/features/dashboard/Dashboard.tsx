import { Badge } from '../../components/Badge/Badge';
import { Card } from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { StatisticCard } from '../../components/StatisticCard/StatisticCard';
import { recentActivities, skills, todayTasks } from '../../data/skills';

export function Dashboard() {
  const averageMastery = Math.round(skills.reduce((total, skill) => total + skill.mastery, 0) / skills.length);
  const highPriority = skills.filter((skill) => skill.priority >= 5);
  const difficultyCount = skills.filter((skill) => skill.status === 'difficulty').length;

  return (
    <>
      <Header title="Bonjour Mathieu 👋" subtitle="Aujourd’hui, on avance avec des séances courtes, concrètes et reliées au terrain." />

      <section className="dashboard-grid stats-grid">
        <StatisticCard icon="📈" label="Progression globale" value={`${averageMastery}%`} helper="Moyenne des compétences actives" />
        <StatisticCard icon="🔥" label="Priorités hautes" value={String(highPriority.length)} helper="Compétences à travailler en premier" />
        <StatisticCard icon="⚠️" label="Difficultés" value={String(difficultyCount)} helper="Points à renforcer cette semaine" />
        <StatisticCard icon="⏱️" label="Séance conseillée" value="25 min" helper="Format court adapté TDAH" />
      </section>

      <section className="dashboard-layout">
        <Card className="main-card">
          <div className="section-title"><div><Badge status="ai">Coach IA</Badge><h2>Séance du jour</h2></div><span className="muted">≈ 53 min au total</span></div>
          <div className="task-list">
            {todayTasks.map((task) => (
              <article className="task-item" key={task.id}>
                <div><Badge status={task.status}>{task.duration}</Badge><h3>{task.label}</h3><p>{task.detail}</p></div>
                <button className="ghost-button">Commencer</button>
              </article>
            ))}
          </div>
        </Card>

        <Card>
          <div className="section-title"><div><Badge status="neutral">Objectif</Badge><h2>Semaine</h2></div></div>
          <div className="weekly-goals">
            <ProgressBar value={35} label="Orthographe" />
            <ProgressBar value={64} label="Gestion" />
            <ProgressBar value={58} label="Communication" />
            <ProgressBar value={28} label="Ponctuation" />
          </div>
        </Card>
      </section>

      <section className="dashboard-layout">
        <Card>
          <div className="section-title"><div><Badge status="difficulty">Priorités</Badge><h2>Compétences à travailler</h2></div></div>
          <div className="skill-list">
            {highPriority.map((skill) => (
              <article className="skill-row" key={skill.id}>
                <div><strong>{skill.title}</strong><span>{skill.domain} • {skill.level}</span></div>
                <ProgressBar value={skill.mastery} />
              </article>
            ))}
          </div>
        </Card>

        <Card>
          <div className="section-title"><div><Badge status="validated">Activité</Badge><h2>Derniers événements</h2></div></div>
          <ul className="activity-list">{recentActivities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
        </Card>
      </section>
    </>
  );
}
