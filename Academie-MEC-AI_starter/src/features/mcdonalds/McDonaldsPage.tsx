import { Card } from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';

const cases = [
  'Rush lent : le temps d’attente client augmente pendant le service du midi.',
  'Conflit : deux équipiers se parlent mal devant les autres.',
  'Rupture : un produit important est indisponible au milieu du service.'
];

export function McDonaldsPage() {
  return (
    <>
      <Header title="Cas McDonald’s" subtitle="Transformer ton vécu professionnel en compétences Bac+2." />
      <section className="dashboard-grid">
        {cases.map((item) => (
          <Card key={item}>
            <h3>{item}</h3>
            <ol><li>Quel est le problème visible ?</li><li>Quelle est la cause possible ?</li><li>Quelle action manager proposes-tu ?</li><li>Quel indicateur suivre ?</li></ol>
          </Card>
        ))}
      </section>
    </>
  );
}
