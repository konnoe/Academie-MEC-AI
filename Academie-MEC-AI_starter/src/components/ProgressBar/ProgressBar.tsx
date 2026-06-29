type ProgressBarProps = { value: number; label?: string; };
export function ProgressBar({ value, label }: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value));
  return (
    <div className="progress-block">
      {label && <div className="progress-label"><span>{label}</span><strong>{safeValue}%</strong></div>}
      <div className="progress-track"><div className="progress-fill" style={{ width: `${safeValue}%` }} /></div>
    </div>
  );
}
