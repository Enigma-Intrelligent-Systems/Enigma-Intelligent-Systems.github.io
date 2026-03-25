import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SignalDivider from "@/components/shared/SignalDivider";
import { Eye, Brain, Zap, Shield, Factory, Building2, Pickaxe, Radio, ArrowRight, Layers, Target, Lock, Video, Wifi, Activity, Cpu, Thermometer, ScanSearch, Fingerprint, Gauge, TrendingUp, Bot, BellRing, ArrowUpRight, Workflow, ShieldCheck, Terminal } from "lucide-react";
import Layout from "@/components/layout/Layout";

/* ─── Hero Background ─── */
const HeroGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Grid */}
    <div className="absolute inset-0 opacity-[0.04]" style={{
      backgroundImage: `linear-gradient(hsl(270 53% 45% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(270 53% 45% / 0.3) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />
    {/* Radial glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
    {/* Signal nodes */}
    {[
      { top: '20%', left: '15%', delay: 0 },
      { top: '60%', left: '80%', delay: 1.5 },
      { top: '40%', left: '60%', delay: 3 },
      { top: '75%', left: '25%', delay: 2 },
    ].map((node, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
        style={{ top: node.top, left: node.left }}
        animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
        transition={{ duration: 4, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

/* ─── Hero Section ─── */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20">
    <HeroGrid />
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-8"
        >
          Enigma Intelligent Systems
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.95] tracking-tight mb-8"
        >
          We build systems
          <br />
          <span className="text-gradient-red">that think.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-body"
        >
          AI-native intelligent systems that observe, understand, and act across enterprise environments — enabling real-time awareness, continuous compliance, and operational control in complex, high-stakes industries.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading px-8 h-12">
            <Link to="/contact">Request a Strategic Demo</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary font-heading px-8 h-12">
            <Link to="/capabilities">Explore Capabilities</Link>
          </Button>
        </motion.div>
      </div>
    </div>
    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

/* ─── Trust Strip ─── */
const trustPillars = [
  { icon: Eye, title: "Observe", desc: "Real-time sensing across cameras, systems, devices, and enterprise environments." },
  { icon: Brain, title: "Understand", desc: "AI reasoning, risk interpretation, anomaly detection, and compliance intelligence." },
  { icon: Zap, title: "Act", desc: "Operational alerts, decision support, workflow triggers, and autonomous responses." },
];

const TrustStrip = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trustPillars.map((pillar, i) => (
          <AnimatedSection key={pillar.title} delay={i * 0.1}>
            <div className="group relative rounded-lg border border-border bg-card p-8 hover:border-glow-red hover:shadow-glow-red transition-all duration-500">
              <pillar.icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── What Enigma Is ─── */
const WhatSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Not software. Not consulting.<br />
            <span className="text-gradient-red">Intelligent systems.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We build AI-native systems that integrate perception, reasoning, and action inside real business environments. These systems do not merely report — they help organisations understand what is happening, identify what matters, and respond with speed and precision.
          </p>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Beyond Dashboards", desc: "We do not just visualise data. We create systems that interpret it." },
          { title: "Beyond Automation", desc: "We do not just automate tasks. We build systems that reason across signals and context." },
          { title: "Beyond Consulting", desc: "We do not just advise. We design deployable intelligence embedded into operations." },
        ].map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="border border-border rounded-lg p-8 bg-card">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Intelligence Stack ─── */
const stackLayers = [
  {
    title: "Awareness",
    subtitle: "Perceive the environment",
    icon: Eye,
    items: [
      { label: "Video AI", icon: Video },
      { label: "IoT Sensing", icon: Wifi },
      { label: "Telemetry", icon: Activity },
      { label: "Machine Signals", icon: Cpu },
      { label: "Environmental Monitoring", icon: Thermometer },
    ],
    glowOpacity: "0.15",
  },
  {
    title: "Intelligence",
    subtitle: "Reason across signals",
    icon: Brain,
    items: [
      { label: "Anomaly Detection", icon: ScanSearch },
      { label: "Pattern Recognition", icon: Fingerprint },
      { label: "Risk Scoring", icon: Gauge },
      { label: "Predictive Models", icon: TrendingUp },
      { label: "Multi-Agent Reasoning", icon: Bot },
    ],
    glowOpacity: "0.25",
  },
  {
    title: "Control",
    subtitle: "Act with precision",
    icon: Zap,
    items: [
      { label: "Alerting", icon: BellRing },
      { label: "Escalation", icon: ArrowUpRight },
      { label: "Workflow Activation", icon: Workflow },
      { label: "Compliance Enforcement", icon: ShieldCheck },
      { label: "Command Support", icon: Terminal },
    ],
    glowOpacity: "0.35",
  },
];

const StackSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-4">Architecture</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Enigma Intelligence Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three integrated layers that turn enterprise environments into intelligent systems.
          </p>
        </div>
      </AnimatedSection>
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical connector line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-6">
          {stackLayers.map((layer, i) => (
            <AnimatedSection key={layer.title} delay={i * 0.15}>
              <div className="relative rounded-xl border border-border bg-card overflow-hidden group hover:border-primary/40 transition-all duration-500">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                {/* Corner glow */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary blur-[80px] transition-opacity duration-500 group-hover:opacity-30"
                  style={{ opacity: layer.glowOpacity }}
                />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <layer.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{layer.title}</h3>
                      <p className="text-xs text-muted-foreground font-body">{layer.subtitle}</p>
                    </div>
                    <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 font-heading hidden sm:block">
                      Layer {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Items grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {layer.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2.5 bg-secondary/50 border border-border/50 rounded-lg px-3 py-2.5 hover:border-primary/30 hover:bg-secondary transition-all duration-300"
                      >
                        <item.icon className="w-3.5 h-3.5 text-primary/70 shrink-0" strokeWidth={1.5} />
                        <span className="text-xs text-muted-foreground font-body whitespace-nowrap">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Flow arrow between layers */}
              {i < stackLayers.length - 1 && (
                <div className="flex justify-center py-2 relative z-10">
                  <motion.div
                    className="w-8 h-8 rounded-full border border-primary/20 bg-card flex items-center justify-center"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-primary/50 rotate-90" />
                  </motion.div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Industries ─── */
const industries = [
  { icon: Pickaxe, title: "Mining & Industrial", desc: "Worker safety, equipment oversight, zone compliance, production visibility, anomaly detection." },
  { icon: Shield, title: "Governance, Risk & Compliance", desc: "Continuous control monitoring, policy enforcement, evidence capture, audit readiness, risk visibility." },
  { icon: Radio, title: "Defence & Security", desc: "Perimeter awareness, surveillance intelligence, threat detection, command support, signal interpretation." },
  { icon: Building2, title: "Enterprise Operations", desc: "Facility intelligence, logistics visibility, workforce awareness, operational control, process oversight." },
];

const IndustriesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for complex, high-stakes environments
          </h2>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {industries.map((ind, i) => (
          <AnimatedSection key={ind.title} delay={i * 0.1}>
            <div className="group border border-border rounded-lg p-8 bg-card hover:border-glow-red transition-all duration-500 h-full">
              <ind.icon className="w-6 h-6 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{ind.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection delay={0.3}>
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="font-heading border-border text-foreground hover:bg-secondary">
            <Link to="/industries">Explore All Industries <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Solutions ─── */
const solutions = [
  { title: "Continuous Compliance Intelligence", desc: "AI systems that monitor controls, evidence, and operational compliance in real time." },
  { title: "Operational Awareness Systems", desc: "Intelligent systems that make operations visible, interpretable, and actionable." },
  { title: "Safety & Risk Monitoring", desc: "AI-powered systems for detecting unsafe states, violations, and emerging threats." },
  { title: "Autonomous Control Workflows", desc: "Systems that trigger alerts, workflows, and interventions based on live conditions." },
  { title: "Video AI & Sensing", desc: "Integrated perception systems using cameras, sensors, logs, and machine signals." },
  { title: "Custom Intelligent Systems", desc: "Bespoke intelligent system design for specialised enterprise environments." },
];

const SolutionsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">What we build</h2>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((sol, i) => (
          <AnimatedSection key={sol.title} delay={i * 0.08}>
            <div className="border border-border rounded-lg p-8 bg-card hover:border-glow-red transition-all duration-500 h-full">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{sol.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{sol.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Why Enigma ─── */
const whyItems = [
  { icon: Layers, title: "System Thinking", desc: "We design intelligence as an operational layer, not a disconnected feature." },
  { icon: Target, title: "Real-World Deployment", desc: "We focus on environments where signals, machines, compliance, and human decision-making meet." },
  { icon: Zap, title: "High-Stakes Relevance", desc: "We are built for contexts where speed, precision, and awareness matter." },
  { icon: Lock, title: "Enterprise-Grade Mindset", desc: "We think in systems, controls, risk, resilience, and operational trust." },
];

const WhySection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16">Why Enigma</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {whyItems.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="flex gap-5 p-6">
              <item.icon className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Signature Statement ─── */
const SignatureSection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            The intelligence layer<br />
            <span className="text-gradient-red">between reality and action.</span>
          </p>
          <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto">
            Enigma helps organisations see what matters, understand what is changing, and act with greater control.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── CTA Section ─── */
const CTASection = () => (
  <section className="py-24 border-t border-border">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Build your intelligence layer
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Whether you are exploring continuous compliance, industrial awareness, operational control, or a custom intelligent system — Enigma can help you design the right architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading px-8 h-12">
              <Link to="/contact">Request a Strategic Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary font-heading px-8 h-12">
              <Link to="/contact">Talk to Enigma</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── Home Page ─── */
const Index = () => (
  <Layout>
    <HeroSection />
    <SignalDivider />
    <TrustStrip />
    <SignalDivider />
    <WhatSection />
    <SignalDivider />
    <StackSection />
    <SignalDivider />
    <IndustriesSection />
    <SignalDivider />
    <SolutionsSection />
    <SignalDivider />
    <WhySection />
    <SignatureSection />
    <CTASection />
  </Layout>
);

export default Index;
