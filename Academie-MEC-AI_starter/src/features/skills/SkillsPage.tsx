import { Badge } from '../../components/Badge/Badge';
import { Card } from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';
import { ProgressBar } from '../../components/ProgressBar/ProgressBar';
import { skills } from '../../data/skills';

export function SkillsPage() {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    acc[skill.domain] ??= [];
    acc[skill.domain].push(skill);
    return acc;
  }, {});

  return (
    <>
      <Header title="Compétences" subtitle="Le référentiel central : chaque compétence alimente les cours, exercices, révisions et cas terrain." />
      {Object.entries(grouped).map(([domain, list]) => (
        <section className="panel" key={domain}>
          <div className="section-title"><h2>{domain}</h2></div>
          <div className="dashboard-grid">
            {list.map((skill) => (
              <Card key={skill.id}>
                <Badge status={skill.status}>Priorité {skill.priority}/5</Badge>
                <h3>{skill.title}</h3>
                <p>{skill.objective}</p>
                <ProgressBar value={skill.mastery} label="Maîtrise" />
                <strong>Exemple McDonald's</strong>
                <p>{skill.mcdoExample}</p>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
