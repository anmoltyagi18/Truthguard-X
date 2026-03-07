import Link from "next/link";
import { Shield, Activity, Network, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-6 relative overflow-hidden min-h-[calc(100vh-64px)]">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="text-center max-w-4xl mx-auto space-y-8 z-10 pt-16">
        <div className="inline-flex items-center space-x-2 bg-cyber-panel border border-cyber-panel-border px-4 py-2 rounded-full mb-4 cyber-glass">
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse glow-text-red" />
          <span className="text-sm font-mono text-cyber-text-secondary">System Online • Monitoring Global Feeds</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          AI Intelligence Against <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-accent glow-text pb-2 inline-block">
            The Spread of False Information
          </span>
        </h1>

        <p className="text-lg md:text-xl text-cyber-text-secondary max-w-2xl mx-auto">
          Detect, analyze, and contain misinformation across the internet with military-grade AI. Real-time credibility scoring, propagation tracking, and evidence verification.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Link
            href="/dashboard"
            className="group flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-cyber-accent/10 border border-cyber-accent text-cyber-accent hover:bg-cyber-accent hover:text-black transition-all duration-300 rounded-md font-mono font-bold cyber-glass-glow uppercase tracking-wider"
          >
            <span>Analyze Content</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/radar"
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-cyber-panel border border-cyber-panel-border text-white hover:bg-cyber-panel-border transition-all duration-300 rounded-md font-mono uppercase tracking-wider cyber-glass"
          >
            <Activity className="w-5 h-5" />
            <span>Explore Radar</span>
          </Link>
        </div>
      </div>

      {/* Features preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-6xl mx-auto w-full z-10 pb-16">
        <div className="cyber-glass p-8 rounded-lg text-left border-t-2 border-t-cyber-accent hover:-translate-y-2 transition-transform duration-300">
          <Shield className="w-10 h-10 text-cyber-accent mb-6" />
          <h3 className="text-xl font-bold mb-3">Claim Verification</h3>
          <p className="text-cyber-text-secondary text-sm leading-relaxed">Cross-references statements against trusted knowledge graphs and factual databases in milliseconds.</p>
        </div>
        <div className="cyber-glass p-8 rounded-lg text-left border-t-2 border-t-cyber-cyan hover:-translate-y-2 transition-transform duration-300">
          <Network className="w-10 h-10 text-cyber-cyan mb-6" />
          <h3 className="text-xl font-bold mb-3">Propagation Maps</h3>
          <p className="text-cyber-text-secondary text-sm leading-relaxed">Visualizes the spread of false narratives through complex network analysis and tracking nodes.</p>
        </div>
        <div className="cyber-glass p-8 rounded-lg text-left border-t-2 border-t-cyber-red hover:-translate-y-2 transition-transform duration-300">
          <Activity className="w-10 h-10 text-cyber-red mb-6" />
          <h3 className="text-xl font-bold mb-3">Threat Radar</h3>
          <p className="text-cyber-text-secondary text-sm leading-relaxed">Global monitoring dashboard identifying emerging emotional manipulation and propaganda campaigns.</p>
        </div>
      </div>
    </div>
  );
}
