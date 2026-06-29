export type Skill = {
  id: string;
  domain: string;
  title: string;
  priority: 1 | 2 | 3 | 4 | 5;
  level: 'base' | 'bac2';
  objective: string;
  rule: string;
  mcdoExample: string;
};

export const skills: Skill[] = [
  {
    id: 'fr-et-est',
    domain: 'Français',
    title: 'Différencier et / est',
    priority: 5,
    level: 'base',
    objective: 'Choisir entre le mot de liaison “et” et le verbe “est”.',
    rule: '“et” ajoute une idée. “est” vient du verbe être.',
    mcdoExample: "Le service est rapide et l'équipe reste organisée."
  },
  {
    id: 'fr-a-a',
    domain: 'Français',
    title: 'Différencier a / à',
    priority: 5,
    level: 'base',
    objective: 'Choisir entre “a” du verbe avoir et “à” préposition.',
    rule: '“a” peut se remplacer par “avait”. “à” indique souvent une heure, un lieu ou une destination.',
    mcdoExample: 'Il a une formation à 14h.'
  },
  {
    id: 'fr-ponctuation',
    domain: 'Français',
    title: 'Ponctuation et phrases longues',
    priority: 5,
    level: 'base',
    objective: 'Découper une phrase longue en phrases courtes.',
    rule: 'Une phrase = une idée principale.',
    mcdoExample: "Le rush commence. L'équipe se place. Le manager vérifie les priorités."
  },
  {
    id: 'gest-pourcentage',
    domain: 'Gestion',
    title: 'Calculer un pourcentage',
    priority: 5,
    level: 'base',
    objective: 'Calculer une part, un coût ou une évolution.',
    rule: 'Valeur × taux / 100.',
    mcdoExample: 'CA 12 400 €, coût matière 28 % = 3 472 €.'
  },
  {
    id: 'gest-marge',
    domain: 'Gestion',
    title: 'Marge et taux de marque',
    priority: 5,
    level: 'bac2',
    objective: 'Distinguer marge, taux de marge et taux de marque.',
    rule: 'Marge = prix de vente - coût. Taux de marque = marge / prix de vente × 100.',
    mcdoExample: 'Vente 10 €, coût 6 €, marge 4 €, taux de marque 40 %.'
  },
  {
    id: 'com-reformulation',
    domain: 'Communication',
    title: 'Reformuler sans accuser',
    priority: 5,
    level: 'bac2',
    objective: 'Dire les choses clairement sans attaquer.',
    rule: 'Fait, impact, action attendue.',
    mcdoExample: 'Le rythme est trop lent pour le rush. On va voir comment gagner du temps.'
  }
];
