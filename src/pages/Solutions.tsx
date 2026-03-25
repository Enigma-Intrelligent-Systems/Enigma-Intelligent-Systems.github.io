import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SignalDivider from "@/components/shared/SignalDivider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const solutionsData = [
  {
    name: "Enigma Sentinel",
    tagline: "Continuous awareness and control for operational environments",
    problem: "Operational environments lack real-time visibility, leading to delayed responses and undetected risks.",
    audience: "Operations leaders, site managers, safety officers",
    features: ["Real-time environmental monitoring", "Multi-sensor fusion", "Automated alerting", "Incident response workflows", "Operational dashboards"],
    deployment: "Cloud, on-premise, or hybrid deployment",
  },
  {
    name: "Enigma Control",
    tagline: "Control monitoring, compliance intelligence, and audit readiness",
    problem: "Manual compliance monitoring is expensive, error-prone, and always behind the curve.",
    audience: "GRC teams, compliance officers, internal audit, risk managers",
    features: ["Continuous control monitoring", "Automated evidence collection", "Policy enforcement engine", "Audit-ready reporting", "Risk scoring and trending"],
    deployment: "Cloud-native with enterprise integration",
  },
  {
    name: "Enigma Vision",
    tagline: "Video AI and environmental awareness systems",
    problem: "Video data is abundant but underutilised — too much footage, too few insights.",
    audience: "Security teams, safety officers, operations managers",
    features: ["Real-time video analytics", "Object and behaviour detection", "Zone monitoring", "Evidence capture", "Multi-camera orchestration"],
    deployment: "Edge, cloud, or hybrid processing",
  },
  {
    name: "Enigma Command",
    tagline: "Decision support, threat interpretation, and action orchestration",
    problem: "High-stakes decisions are made with incomplete information and fragmented systems.",
    audience: "Command teams, defence operators, critical infrastructure managers",
    features: ["Situational awareness engine", "Threat assessment", "Decision recommendation", "Action orchestration", "Multi-domain fusion"],
    deployment: "Secure on-premise or sovereign cloud",
  },
  {
    name: "Custom Systems",
    tagline: "Purpose-built intelligent systems for specialised environments",
    problem: "Off-the-shelf solutions cannot address the unique complexity of your operational environment.",
    audience: "Enterprises with specialised or mission-critical requirements",
    features: ["Bespoke system architecture", "Custom AI model development", "Integration engineering", "Operational embedding", "Ongoing evolution"],
    deployment: "Tailored to environment requirements",
  },
];

const Solutions = () => (
  <Layout>
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-4">Solutions</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What we build
            </h1>
            <p className="text-muted-foreground text-lg">
              Intelligent systems architected for awareness, compliance, and autonomous control.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <SignalDivider />
    <section className="py-16">
      <div className="container mx-auto px-6 space-y-8">
        {solutionsData.map((sol, i) => (
          <AnimatedSection key={sol.name} delay={i * 0.05}>
            <div className="border border-border rounded-lg p-8 lg:p-12 bg-card hover:border-glow-red transition-all duration-500">
              <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">Solution</p>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-2">{sol.name}</h2>
              <p className="text-muted-foreground text-lg mb-6">{sol.tagline}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{sol.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">For</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{sol.audience}</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">Deployment</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{sol.deployment}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {sol.features.map((f) => (
                  <span key={f} className="text-xs text-muted-foreground bg-secondary px-3 py-1.5 rounded-sm">{f}</span>
                ))}
              </div>

              <Button asChild variant="outline" className="font-heading border-border text-foreground hover:bg-secondary">
                <Link to="/contact">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  </Layout>
);

export default Solutions;
