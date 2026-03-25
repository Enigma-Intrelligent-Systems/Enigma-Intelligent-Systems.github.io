import { useState } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SignalDivider from "@/components/shared/SignalDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const interestAreas = [
  "Continuous compliance monitoring",
  "Operational awareness",
  "Video AI and sensing",
  "Safety and risk monitoring",
  "Defence / security intelligence",
  "Industrial intelligence",
  "Custom system design",
  "Strategic partnership",
];

const Contact = () => {
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (area: string) => {
    setInterests((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you. We will be in touch shortly.");
  };

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-4">Contact</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Build your intelligence layer
              </h1>
              <p className="text-muted-foreground text-lg">
                Whether you are exploring continuous compliance, industrial awareness, operational control, or a custom intelligent system — Enigma can help you design the right architecture for your environment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <SignalDivider />

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Left */}
            <AnimatedSection>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  Tell us about your environment, your challenges, and your goals. We will respond with insight, not a sales pitch.
                </p>
                <div className="mb-8">
                  <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">Email</p>
                  <p className="text-foreground text-sm">contact@enigma.systems</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-heading uppercase tracking-wider mb-4">Areas of interest</p>
                  <div className="space-y-3">
                    {interestAreas.map((area) => (
                      <div key={area} className="flex items-center gap-3">
                        <Checkbox
                          id={area}
                          checked={interests.includes(area)}
                          onCheckedChange={() => toggleInterest(area)}
                          className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor={area} className="text-sm text-muted-foreground cursor-pointer">
                          {area}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Full Name</Label>
                    <Input id="name" required className="bg-card border-border text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Company</Label>
                    <Input id="company" required className="bg-card border-border text-foreground" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Role</Label>
                    <Input id="role" className="bg-card border-border text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Work Email</Label>
                    <Input id="email" type="email" required className="bg-card border-border text-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-xs text-muted-foreground uppercase tracking-wider font-heading">Industry</Label>
                  <Input id="industry" className="bg-card border-border text-foreground" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="challenge" className="text-xs text-muted-foreground uppercase tracking-wider font-heading">What challenge are you solving?</Label>
                  <Textarea id="challenge" rows={4} className="bg-card border-border text-foreground resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading h-12">
                  Request a Strategic Demo
                </Button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
