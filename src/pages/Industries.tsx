import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SignalDivider from "@/components/shared/SignalDivider";
import { Pickaxe, Factory, Shield, Radio, Building2, Truck } from "lucide-react";

const industriesData = [
  {
    icon: Pickaxe,
    title: "Mining",
    pain: "High-risk environments with distributed assets, regulatory pressure, and safety-critical operations.",
    sees: "Worker location, equipment status, zone violations, environmental conditions.",
    interprets: "Safety anomalies, production trends, compliance gaps, equipment failure patterns.",
    enables: "Real-time safety enforcement, predictive maintenance, operational visibility.",
    cases: ["Worker safety monitoring", "Equipment anomaly detection", "Zone compliance", "Production intelligence"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    pain: "Complex production lines with quality, safety, and efficiency demands across multiple shifts.",
    sees: "Machine telemetry, production metrics, workforce activity, environmental sensors.",
    interprets: "Quality deviations, downtime patterns, safety risks, process bottlenecks.",
    enables: "Predictive quality control, automated safety alerts, throughput optimisation.",
    cases: ["Quality anomaly detection", "Predictive maintenance", "Safety compliance", "Shift intelligence"],
  },
  {
    icon: Shield,
    title: "Governance, Risk & Compliance",
    pain: "Manual control monitoring, evidence gaps, audit fatigue, and evolving regulatory landscapes.",
    sees: "Control states, policy adherence, operational evidence, system logs.",
    interprets: "Compliance drift, control failures, risk concentrations, audit readiness.",
    enables: "Continuous control monitoring, automated evidence capture, real-time risk visibility.",
    cases: ["Continuous compliance monitoring", "Policy enforcement", "Audit readiness", "Risk intelligence"],
  },
  {
    icon: Radio,
    title: "Defence & Security",
    pain: "Persistent threats, vast perimeters, information overload, and mission-critical decision windows.",
    sees: "Camera feeds, radar, sensor arrays, signal data, geospatial information.",
    interprets: "Threat patterns, anomalous movement, perimeter breaches, signal intelligence.",
    enables: "Autonomous surveillance, threat detection, command support, signal interpretation.",
    cases: ["Perimeter awareness", "Threat detection", "Command decision support", "Multi-sensor fusion"],
  },
  {
    icon: Truck,
    title: "Logistics & Infrastructure",
    pain: "Distributed assets, complex supply chains, infrastructure aging, and operational blind spots.",
    sees: "Fleet telemetry, infrastructure sensors, logistics systems, environmental data.",
    interprets: "Route anomalies, asset degradation, supply chain disruptions, operational risks.",
    enables: "Predictive infrastructure management, fleet intelligence, supply chain visibility.",
    cases: ["Fleet monitoring", "Infrastructure health", "Supply chain intelligence", "Site awareness"],
  },
  {
    icon: Building2,
    title: "Enterprise Operations",
    pain: "Fragmented visibility across facilities, workforce, and processes with siloed decision-making.",
    sees: "Facility systems, workforce patterns, process data, environmental conditions.",
    interprets: "Operational bottlenecks, safety risks, resource inefficiencies, compliance status.",
    enables: "Unified operational awareness, intelligent facility management, workforce safety.",
    cases: ["Facility intelligence", "Workforce awareness", "Process oversight", "Operational control"],
  },
];

const Industries = () => (
  <Layout>
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-4">Industries</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              One intelligence architecture, multiple mission-critical environments
            </h1>
            <p className="text-muted-foreground text-lg">
              Built for environments where awareness, compliance, and decision quality matter.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <SignalDivider />
    <section className="py-16">
      <div className="container mx-auto px-6 space-y-8">
        {industriesData.map((ind, i) => (
          <AnimatedSection key={ind.title} delay={i * 0.05}>
            <div className="border border-border rounded-lg p-8 lg:p-12 bg-card hover:border-glow-red transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <ind.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                <h2 className="font-heading text-2xl font-bold text-foreground">{ind.title}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-8 max-w-3xl">{ind.pain}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "What Enigma Sees", content: ind.sees },
                  { label: "What Enigma Interprets", content: ind.interprets },
                  { label: "What Enigma Enables", content: ind.enables },
                ].map((col) => (
                  <div key={col.label}>
                    <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">{col.label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{col.content}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {ind.cases.map((c) => (
                  <span key={c} className="text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-sm">{c}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </Layout>
);

export default Industries;
