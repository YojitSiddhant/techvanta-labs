export default function Loading() {
  return (
    <div className="route-loader" role="status" aria-live="polite">
      <div className="global-loader__mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="global-loader__copy">
        <strong>TechVanta Labs</strong>
        <span>Loading your experience</span>
      </div>
    </div>
  );
}
