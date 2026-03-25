import { Link } from "react-router-dom";
import epsilonLogo from "@/assets/epsilon-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={epsilonLogo} alt="Enigma" className="w-8 h-8 invert" />
              <span className="font-heading font-semibold text-foreground tracking-tight text-lg">
                ENIGMA
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Enigma Intelligent Systems — We build systems that think.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-3">
              {["Capabilities", "Industries", "Solutions", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contact@enigma.systems</li>
              <li>Johannesburg, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Enigma Intelligent Systems. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            The intelligence layer between reality and action.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
