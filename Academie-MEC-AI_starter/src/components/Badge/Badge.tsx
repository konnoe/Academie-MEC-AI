import type { SkillStatus } from '../../data/skills';

type BadgeProps = {
  status?: SkillStatus | 'ai' | 'neutral';
  children: React.ReactNode;
};

const labelByStatus = {
  validated: 'badge-success',
  'in-progress': 'badge-primary',
  review: 'badge-warning',
  difficulty: 'badge-danger',
  ai: 'badge-ai',
  neutral: 'badge-neutral',
};

export function Badge({ status = 'neutral', children }: BadgeProps) {
  return <span className={`badge ${labelByStatus[status]}`}>{children}</span>;
}
