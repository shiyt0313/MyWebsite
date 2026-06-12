export const metadata = {
  title: "Research"
};

const areas = [
  {
    title: "Human-AI Collaboration",
    description: "Interactive systems where AI acts as a partner in decision-making, creation, and everyday support."
  },
  {
    title: "Ubiquitous Computing",
    description: "Embedded and context-aware computing that adapts to users, environments, and long-term routines."
  },
  {
    title: "Wearable Sensing",
    description: "Body-adjacent sensing pipelines for on-device inference, low-friction interaction, and health applications."
  },
  {
    title: "Smart Home HAR",
    description: "Activity recognition in domestic settings with robust multimodal sensing and deployable system design."
  },
  {
    title: "Health Sensing",
    description: "Human-centered sensing systems that support wellbeing, accessibility, and responsible data use."
  }
];

export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
        <p className="text-sm uppercase tracking-[0.28em] text-accent">Research</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">Themes and directions</h1>
        <p className="mt-6 max-w-3xl leading-8 text-slate">
          Organize your research narrative by topic instead of chronology. This makes it easier for faculty, recruiters, and
          collaborators to understand your agenda at a glance.
        </p>
      </section>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {areas.map((area) => (
          <article key={area.title} className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
            <p className="text-sm uppercase tracking-[0.28em] text-gold">Area</p>
            <h2 className="mt-3 font-serif text-2xl text-ink">{area.title}</h2>
            <p className="mt-4 leading-8 text-slate">{area.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
