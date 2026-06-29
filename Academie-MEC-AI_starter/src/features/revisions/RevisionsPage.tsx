const steps = [
  ['J+1', 'Relire la règle + refaire 1 exercice'],
  ['J+3', 'Faire un exercice sans aide'],
  ['J+7', 'Utiliser la notion dans un cas McDonald’s'],
  ['J+14', 'Expliquer la notion à l’oral'],
  ['J+30', 'Mini-test de validation']
];

export function RevisionsPage() {
  return (
    <>
      <section className="hero">
        <span className="badge">Mémoire</span>
        <h1>Révisions espacées</h1>
        <p>Revoir peu, mais au bon moment.</p>
      </section>

      <section className="panel">
        <table>
          <thead><tr><th>Moment</th><th>Action</th></tr></thead>
          <tbody>{steps.map(([when, action]) => <tr key={when}><td>{when}</td><td>{action}</td></tr>)}</tbody>
        </table>
      </section>
    </>
  );
}
