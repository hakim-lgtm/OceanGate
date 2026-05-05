import { LogoA, LogoB, LogoC, LogoD, LogoE, LogoF } from "@/components/logo-variants";

const variants = [
  { id: "A", name: "Monogram OG · Medallion", Comp: LogoA, note: "Cercle gravé, monogramme entrelacé. Très luxe, type maison de couture." },
  { id: "B", name: "Compass Rose", Comp: LogoB, note: "Rose des vents minimale, lien direct au maritime." },
  { id: "C", name: "Wave Gate", Comp: LogoC, note: "Une vague qui passe sous une porte — symbolise le nom OceanGate." },
  { id: "D", name: "Wordmark serif premium", Comp: LogoD, note: "Pas de symbole. Typo serif éditoriale, le plus discret et chic." },
  { id: "E", name: "Anchor monoline", Comp: LogoE, note: "Ancre stylisée trait fin. Classique maritime, contemporain." },
  { id: "F", name: "OG Diamond", Comp: LogoF, note: "Monogramme dans un losange. Plus digital, plus tech." },
];

export default function LogosPage() {
  return (
    <main className="min-h-screen bg-ink py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-copper">Logo concepts</span>
          <h1 className="font-display mt-4 text-5xl tracking-tight text-paper lg:text-6xl">
            Six directions.
            <br />
            <span className="italic text-copper">Choisis ta préférée.</span>
          </h1>
          <p className="mt-6 max-w-xl text-fog">
            Chaque concept est en SVG vectoriel — on pourra l&apos;ajuster (couleur, taille, espacement, version monochrome) une fois ton choix fait.
          </p>
        </div>

        <div className="grid gap-px bg-line lg:grid-cols-2">
          {variants.map(({ id, name, Comp, note }) => (
            <div key={id} className="bg-ink p-12 lg:p-16">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-copper">{id}</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-fog">{name}</span>
              </div>

              {/* Dark preview */}
              <div className="mt-12 flex h-48 items-center justify-center border border-line bg-ink">
                <Comp className="h-20 w-auto text-paper" />
              </div>

              {/* Light preview */}
              <div className="mt-px flex h-48 items-center justify-center border border-line bg-paper">
                <Comp className="h-20 w-auto text-ink" />
              </div>

              <p className="mt-8 text-sm leading-relaxed text-fog">{note}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10 text-sm text-fog">
          <p>Une fois ta préférence donnée (ex: &quot;je prends le C&quot;), je l&apos;intègre dans la nav, le footer et je génère le favicon.</p>
        </div>
      </div>
    </main>
  );
}
