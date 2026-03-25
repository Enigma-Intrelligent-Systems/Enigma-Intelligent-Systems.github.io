import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SignalDivider from "@/components/shared/SignalDivider";

const capabilities = [
  {
    title: "Video Intelligence",
    desc: "AI-driven analysis of live and recorded video feeds for detection, classification, and behavioural interpretation.",
    inputs: "CCTV, IP cameras, drone feeds, bodycam",
    outputs: "Detections, alerts, event classification, evidence logs",
    value: "Transform passive surveillance into active operational awareness.",
  },
  {
    title: "Sensor & IoT Integration",
    desc: "Unified ingestion and interpretation of signals from sensors, IoT devices, SCADA, and telemetry systems.",
    inputs: "Temperature, vibration, gas, pressure, motion, proximity",
    outputs: "Anomaly flags, threshold alerts, trend analysis",
    value: "Turn scattered signals into coherent operational intelligence.",
  },
  {
    title: "Enterprise Systems Integration",
    desc: "Connect to ERP, HRIS, asset management, and workflow systems to extend intelligence across the enterprise.",
    inputs: "SAP, Oracle, ServiceNow, custom APIs",
    outputs: "Enriched context, cross-system correlation",
    value: "Intelligence that understands the full operational picture.",
  },
  {
    title: "Anomaly Detection",
    desc: "Multi-modal anomaly detection across video, sensor, log, and operational data streams.",
    inputs: "Any time-series or event data",
    outputs: "Ranked anomalies, root cause suggestions",
    value: "Catch what humans miss before it becomes a crisis.",
  },
  {
    title: "Predictive Risk & Failure Detection",
    desc: "Machine learning models that forecast equipment failure, safety incidents, and compliance drift.",
    inputs: "Historical data, real-time signals",
    outputs: "Risk scores, failure probability, maintenance triggers",
    value: "Shift from reactive to predictive operations.",
  },
  {
    title: "Continuous Compliance Monitoring",
    desc: "Automated control monitoring, evidence collection, and compliance state tracking in real time.",
    inputs: "Policy frameworks, control libraries, operational data",
    outputs: "Control status, evidence logs, audit reports",
    value: "Always-on compliance without manual overhead.",
  },
  {
    title: "Multi-Agent Reasoning",
    desc: "Distributed AI agents that collaborate to reason across complex, multi-signal environments.",
    inputs: "Multiple data streams and context layers",
    outputs: "Synthesised insights, coordinated actions",
    value: "Intelligence that scales with complexity.",
  },
  {
    title: "Operational Decision Support",
    desc: "AI-powered recommendations and decision frameworks for operators and commanders.",
    inputs: "Live situation data, historical patterns",
    outputs: "Prioritised options, risk-weighted recommendations",
    value: "Better decisions, faster, under pressure.",
  },
  {
    title: "Automated Escalation & Workflow Control",
    desc: "Rules-based and AI-driven escalation paths, workflow triggers, and intervention sequences.",
    inputs: "Event triggers, severity scores, context",
    outputs: "Automated notifications, workflow executions, audit trails",
    value: "The right response at the right time, every time.",
  },
  {
    title: "Evidence, Audit & Traceability",
    desc: "Immutable evidence capture, chain-of-custody logs, and full operational traceability.",
    inputs: "All system events, detections, actions",
    outputs: "Audit-ready records, evidence packages, compliance reports",
    value: "Complete accountability and regulatory confidence.",
  },
];

const Capabilities = () => (
  <Layout>
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-4">Capabilities</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Built around awareness, intelligence, and control
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Enigma combines perception, reasoning, and control into deployable systems for complex enterprise environments.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <SignalDivider />
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="space-y-6">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.title} delay={i * 0.05}>
              <div className="border border-border rounded-lg p-8 bg-card hover:border-glow-red transition-all duration-500">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{cap.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-primary font-heading uppercase tracking-wider">Inputs</span>
                    <p className="text-muted-foreground mt-1">{cap.inputs}</p>
                  </div>
                  <div>
                    <span className="text-primary font-heading uppercase tracking-wider">Outputs</span>
                    <p className="text-muted-foreground mt-1">{cap.outputs}</p>
                  </div>
                  <div>
                    <span className="text-primary font-heading uppercase tracking-wider">Value</span>
                    <p className="text-muted-foreground mt-1">{cap.value}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Capabilities;
