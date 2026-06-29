import { skills } from '../../data/skills';

export function SkillsPage() {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    acc[skill.domain] ??= [];
    acc[skill.domain].push(skill);
    return acc;
  }, {});

  return (
    <>
      <section className="hero">
        <span className="badge">Référentiel</span>
        <h1>Compétences</h1>
        <p>Chaque compétence est une brique : objectif, règle, exemple terrain.</p>
      </section>

      {Object.entries(grouped).map(([domain, list]) => (
        <section className="panel" key={domain}>
          <h2>{domain}</h2>
          <div className="grid">
            {list.map((skill) => (
              <article className="card" key={skill.id}>
                <span className="badge">Priorité {skill.priority}/5</span>
                <h3>{skill.title}</h3>
                <p>{skill.objective}</p>
                <strong>Règle simple</strong>
                <p>{skill.rule}</p>
                <strong>Exemple McDonald's</strong>
                <p>{skill.mcdoExample}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
