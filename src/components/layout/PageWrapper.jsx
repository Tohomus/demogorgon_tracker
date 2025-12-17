import AnimatedBackground from "../common/AnimatedBackground";

export default function PageWrapper({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <AnimatedBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
