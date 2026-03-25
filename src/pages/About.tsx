import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SignalDivider from "@/components/shared/SignalDivider";

const principles = [
  { title: "Clarity over hype", desc: "We say what we mean and build what we promise." },
  { title: "Systems over gimmicks", desc: "We design complete operational systems, not feature demos." },
  { title: "Control over chaos", desc: "We bring structure, visibility, and command to complex environments." },
  { title: "Deployment over theatre", desc: "We measure success by what runs in production, not what runs in presentations." },
  { title: "Intelligence with consequence", desc: "Every system we build is designed to make a measurable difference." },
];

const About = () => (
  <Layout>
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-4">About</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              We do not build software for its own sake.
              <br />
              <span className="text-gradient-red">We build intelligence where it matters.</span>
            </h1>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <SignalDivider />

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          <AnimatedSection>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Enigma Intelligent Systems is focused on designing AI-native systems for awareness, control, and autonomous operations in complex environments. We operate at the intersection of machine intelligence, operational technology, and enterprise trust.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Philosophy</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe the future of enterprise technology is not passive software. It is intelligent systems that can perceive reality, interpret signals, support human judgment, and trigger action. The environments that matter most — mines, facilities, borders, control rooms, compliance frameworks — demand systems that think alongside the people who operate them.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Principles</h2>
              <div className="space-y-4">
                {principles.map((p, i) => (
                  <div key={p.title} className="flex gap-4 items-start border border-border rounded-lg p-6 bg-card">
                    <span className="text-primary font-heading font-bold text-sm mt-0.5">0{i + 1}</span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                      <p className="text-muted-foreground text-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center py-12">
              <p className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                We build systems that think — because the environments that matter most
                <span className="text-gradient-red"> can no longer afford to be blind.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
