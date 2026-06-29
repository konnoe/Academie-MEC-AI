export type SkillStatus = 'validated' | 'in-progress' | 'review' | 'difficulty';

export type Skill = {
  id: string;
  domain: string;
  title: string;
  priority: 1 | 2 | 3 | 4 | 5;
  level: 'base' | 'bac2';
  mastery: number;
  status: SkillStatus;
  objective: string;
  rule: string;
  mcdoExample: string;
};

export const skills: Skill[] = [
  { id: 'fr-et-est', domain: 'Français', title: 'Différencier et / est', priority: 5, level: 'base', mastery: 35, status: 'difficulty', objective: 'Choisir entre le mot de liaison “et” et le verbe “est”.', rule: '“et” ajoute une idée. “est” vient du verbe être.', mcdoExample: "Le service est rapide et l'équipe reste organisée." },
  { id: 'fr-a-a', domain: 'Français', title: 'Différencier a / à', priority: 5, level: 'base', mastery: 42, status: 'review', objective: 'Choisir entre “a” du verbe avoir et “à” préposition.', rule: '“a” peut se remplacer par “avait”. “à” indique souvent une heure, un lieu ou une destination.', mcdoExample: 'Il a une formation à 14h.' },
  { id: 'fr-ponctuation', domain: 'Français', title: 'Ponctuation et phrases longues', priority: 5, level: 'base', mastery: 28, status: 'difficulty', objective: 'Découper une phrase longue en phrases courtes.', rule: 'Une phrase = une idée principale.', mcdoExample: "Le rush commence. L'équipe se place. Le manager vérifie les priorités." },
  { id: 'gest-pourcentage', domain: 'Gestion', title: 'Calculer un pourcentage', priority: 5, level: 'base', mastery: 64, status: 'in-progress', objective: 'Calculer une part, un coût ou une évolution.', rule: 'Valeur × taux / 100.', mcdoExample: 'CA 12 400 €, coût matière 28 % = 3 472 €.' },
  { id: 'gest-marge', domain: 'Gestion', title: 'Marge et taux de marque', priority: 5, level: 'bac2', mastery: 48, status: 'review', objective: 'Distinguer marge, taux de marge et taux de marque.', rule: 'Marge = prix de vente - coût. Taux de marque = marge / prix de vente × 100.', mcdoExample: 'Vente 10 €, coût 6 €, marge 4 €, taux de marque 40 %.' },
  { id: 'com-reformulation', domain: 'Communication', title: 'Reformuler sans accuser', priority: 5, level: 'bac2', mastery: 58, status: 'in-progress', objective: 'Dire les choses clairement sans attaquer.', rule: 'Fait, impact, action attendue.', mcdoExample: 'Le rythme est trop lent pour le rush. On va voir comment gagner du temps.' }
];

export const todayTasks = [
  { id: 'task-fr', label: 'Français personnalisé', duration: '15 min', detail: 'et / est + ponctuation', status: 'difficulty' as SkillStatus },
  { id: 'task-gestion', label: 'Gestion appliquée', duration: '20 min', detail: 'pourcentages + marge', status: 'in-progress' as SkillStatus },
  { id: 'task-mcdo', label: "Cas McDonald's", duration: '10 min', detail: 'rush lent', status: 'review' as SkillStatus },
  { id: 'task-revision', label: 'Révision espacée', duration: '8 min', detail: 'J+3', status: 'validated' as SkillStatus },
];

export const recentActivities = [
  'Création du projet React / Electron',
  'Ajout du référentiel de compétences initial',
  'Validation de la charte graphique management',
  'Démarrage du Sprint V0.2 Foundation'
];
