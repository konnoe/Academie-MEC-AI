import { Card } from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';

const questions = [
  ['Français — ponctuation', 'Réécris correctement : ok peux tu cree des onglet deronlant sur sa ?', 'Ok, peux-tu créer des onglets déroulants sur ça ?'],
  ['Gestion — pourcentage', 'CA 12 400 €, coût matière 28 %. Calcule le coût matière.', '12 400 × 28 / 100 = 3 472 €'],
  ['Management — conflit', 'Deux équipiers se disputent pendant un rush. Que fais-tu en 5 lignes maximum ?', 'Séparer si nécessaire, écouter brièvement, rappeler le cadre, décider d’une action immédiate, faire un point après le rush.']
];

export function DiagnosticPage() {
  return (
    <>
      <Header title="Diagnostic personnalisé" subtitle="Des exercices ciblés sur tes lacunes réelles, pas des exercices génériques." />
      <section className="dashboard-grid">
        {questions.map(([title, prompt, correction]) => (
          <Card key={title}>
            <h3>{title}</h3>
            <p>{prompt}</p>
            <textarea placeholder="Ta réponse..." />
            <details><summary>Voir la correction possible</summary><p>{correction}</p></details>
          </Card>
        ))}
      </section>
    </>
  );
}
