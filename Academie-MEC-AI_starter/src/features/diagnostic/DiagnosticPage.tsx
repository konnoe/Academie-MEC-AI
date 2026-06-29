const questions = [
  ['Français — ponctuation', 'Réécris correctement : ok peux tu cree des onglet deronlant sur sa ?', 'Ok, peux-tu créer des onglets déroulants sur ça ?'],
  ['Gestion — pourcentage', 'CA 12 400 €, coût matière 28 %. Calcule le coût matière.', '12 400 × 28 / 100 = 3 472 €'],
  ['Management — conflit', 'Deux équipiers se disputent pendant un rush. Que fais-tu en 5 lignes maximum ?', 'Séparer si nécessaire, écouter brièvement, rappeler le cadre, décider d’une action immédiate, faire un point après le rush.']
];

export function DiagnosticPage() {
  return (
    <>
      <section className="hero">
        <span className="badge">Diagnostic</span>
        <h1>Diagnostic personnalisé</h1>
        <p>Première base pour repérer les lacunes réelles.</p>
      </section>

      <section className="panel">
        {questions.map(([title, prompt, correction]) => (
          <article className="exercise" key={title}>
            <h3>{title}</h3>
            <p>{prompt}</p>
            <textarea placeholder="Ta réponse..." />
            <details><summary>Voir la correction possible</summary><p>{correction}</p></details>
          </article>
        ))}
      </section>
    </>
  );
}
