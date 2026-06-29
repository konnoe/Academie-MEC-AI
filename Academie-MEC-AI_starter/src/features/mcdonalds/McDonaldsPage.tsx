const cases = [
  'Rush lent : le temps d’attente client augmente pendant le service du midi.',
  'Conflit : deux équipiers se parlent mal devant les autres.',
  'Rupture : un produit important est indisponible au milieu du service.'
];

export function McDonaldsPage() {
  return (
    <>
      <section className="hero">
        <span className="badge">Terrain</span>
        <h1>Cas McDonald’s</h1>
        <p>Transformer le vécu professionnel en compétences Bac+2.</p>
      </section>

      <section className="grid">
        {cases.map((item) => (
          <article className="card" key={item}>
            <h3>{item}</h3>
            <ol>
              <li>Quel est le problème visible ?</li>
              <li>Quelle est la cause possible ?</li>
              <li>Quelle action manager proposes-tu ?</li>
              <li>Quel indicateur suivre ?</li>
            </ol>
          </article>
        ))}
      </section>
    </>
  );
}
