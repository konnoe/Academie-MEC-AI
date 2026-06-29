import { Card } from '../Card/Card';

type StatisticCardProps = { label: string; value: string; helper: string; icon: string; };

export function StatisticCard({ label, value, helper, icon }: StatisticCardProps) {
  return (
    <Card className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div><span>{label}</span><strong>{value}</strong><p>{helper}</p></div>
    </Card>
  );
}
