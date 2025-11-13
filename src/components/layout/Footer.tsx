import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

const Footer = () => {
  return (
    <footer className="w-full border-t border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="font-headline text-2xl font-bold">
              Ginim Narang
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Software Developer & Tech Enthusiast
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div className="lg:col-start-2">
              <p className="font-semibold">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Contact</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:ginim654@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    ginim654@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ginim Narang. Made with ❤️ + Code.
          </p>
          <div className="mt-4 sm:mt-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
