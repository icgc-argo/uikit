export default function Template({ className, children }: { className?: any; children?: any }) {
  return <div className={className}>x{children}</div>;
}
