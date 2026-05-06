// LinkedIn URL — replace [JE COMPLETE] when ready
const LINKEDIN_URL = "";

export function MeetHakim() {
  return (
    <div className="space-y-7 text-[17px] leading-[1.8] text-paper-dim">
      <p className="font-display text-2xl leading-snug text-paper lg:text-3xl">
        Born and raised in Djibouti, Hakim Nagy has spent the last decade moving
        between two coasts — the Gulf of Tadjoura and the English Channel — to
        learn how a great maritime gateway is actually built.
      </p>

      <p>
        After graduating from secondary school in Djibouti, Hakim left for
        France to pursue his higher education. He earned a Master&apos;s in Port
        and Maritime Management at <strong className="text-paper">EM Normandie</strong>{" "}
        in <strong className="text-paper">Le Havre</strong> — one of Europe&apos;s
        leading programs for the shipping industry, set right inside one of its
        busiest port cities.
      </p>

      <p>
        Throughout the curriculum, he completed operational internships at the
        ports of <strong className="text-paper">Le Havre</strong> and{" "}
        <strong className="text-paper">Marseille</strong> — two of the most
        demanding maritime environments in Europe. There, on the quaysides and
        inside the operations rooms, he learned the discipline of international
        shipping: the choreography between agents, terminals, customs,
        shipowners, and crews that turns a port call into a clean, profitable
        operation.
      </p>

      <h2 className="font-display pt-6 text-3xl leading-tight text-paper lg:text-4xl">
        Coming home with a plan
      </h2>

      <p>
        After completing his Master&apos;s, Hakim made the decision that quietly
        defines the company today: he came back to Djibouti. Not for a desk at
        a multinational — but to found his own house.{" "}
        <strong className="text-paper">Oceangate International Shipping</strong>{" "}
        was born from a simple belief: that the rigor of international maritime
        practice and the deep, intimate knowledge of the Djiboutian terrain
        belong in the same agency, under the same roof, served to clients as
        one offering.
      </p>

      <p>
        As Founder &amp; CEO, Hakim has built Oceangate around three
        commitments: <strong className="text-paper">precision</strong> in every
        operation, <strong className="text-paper">transparency</strong> with
        every partner, and <strong className="text-paper">presence</strong> —
        twenty-four hours a day, in six languages, at the gateway of the Red
        Sea.
      </p>

      <figure className="my-12 border-l-2 border-copper pl-8">
        <blockquote className="font-display text-2xl italic leading-snug text-paper lg:text-3xl">
          &ldquo;Djibouti isn&apos;t just a port — it&apos;s a gateway. My
          ambition with Oceangate is to make it the most efficient, the most
          human, and the most modern gateway of world maritime trade.&rdquo;
        </blockquote>
        <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-copper">
          Hakim Nagy — Founder &amp; CEO
        </figcaption>
      </figure>

      <h2 className="font-display pt-6 text-3xl leading-tight text-paper lg:text-4xl">
        From the world to Djibouti
      </h2>

      <p>
        That phrase — <em className="text-paper">from the world to Djibouti</em>{" "}
        — is more than a tagline. It captures the route Hakim himself
        travelled, and the route Oceangate offers to every shipowner, charterer,
        and operator calling on the Port of Djibouti: a single, modern partner
        bringing international standards into one of the most strategic
        maritime hubs of the Horn of Africa.
      </p>

      {LINKEDIN_URL ? (
        <p className="pt-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-copper hover:text-paper transition-colors"
          >
            Connect with Hakim on LinkedIn →
          </a>
        </p>
      ) : null}
    </div>
  );
}
