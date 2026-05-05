import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-abyss text-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-32 w-auto text-paper" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fog">
              Oceangate International Shipping. A maritime agency standing at
              the crossroads of the Red Sea and the Gulf of Aden.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Office</p>
            <p className="mt-5 text-sm leading-relaxed text-paper">
              Héron, Djibouti
              <br />
              Horizon Building
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Contact</p>
            <div className="mt-5 space-y-2 text-sm">
              <a href="tel:+25377814853" className="block text-paper hover:text-copper transition-colors">
                +253 77 81 48 53
              </a>
              <a href="tel:+25377327924" className="block text-paper hover:text-copper transition-colors">
                +253 77 32 79 24
              </a>
              <a href="mailto:info@oceangateshipping.com" className="block text-fog hover:text-copper transition-colors">
                info@oceangateshipping.com
              </a>
              <a href="mailto:commercial@oceangateshipping.com" className="block text-fog hover:text-copper transition-colors">
                commercial@oceangateshipping.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Navigation</p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                ["Mission", "#mission"],
                ["Djibouti", "#djibouti"],
                ["Services", "#services"],
                ["Heritage", "#heritage"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-paper hover:text-copper transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs tracking-wide text-muted">
            © {new Date().getFullYear()} Oceangate International Shipping (OGIS). All rights reserved.
          </p>
          <p className="text-xs tracking-[0.18em] uppercase text-muted">
            From the world to Djibouti
          </p>
        </div>
      </div>
    </footer>
  );
}
