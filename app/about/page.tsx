export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
        <p className="text-sm uppercase tracking-[0.28em] text-accent">About</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">Academic profile</h1>
        <p className="mt-6 leading-8 text-slate">
          This page is structured for a research-focused portfolio: concise biography, academic trajectory, and the core
          questions that connect your projects, publications, and ongoing work.
        </p>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
          <h2 className="font-serif text-2xl text-ink">Education</h2>
          <p className="mt-4 leading-8 text-slate">
            PhD student in Computer Science at Georgia Tech. This section is structured so you can add your prior degrees,
            expected graduation timeline, and any cross-disciplinary training without changing the page layout.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
          <h2 className="font-serif text-2xl text-ink">Research Background</h2>
          <p className="mt-4 leading-8 text-slate">
            My work sits at the intersection of ubiquitous computing and AI. I build interactive sensing systems and study
            how intelligent models can collaborate with users in context-aware, deployable environments.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
          <h2 className="font-serif text-2xl text-ink">Advisor and Lab</h2>
          <p className="mt-4 leading-8 text-slate">
            Advised by Dr. Thomas Ploetz. You can extend this block with lab affiliation, department links, and collaborators
            while keeping the page static and easy to maintain.
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-panel">
          <h2 className="font-serif text-2xl text-ink">Academic Interests</h2>
          <p className="mt-4 leading-8 text-slate">
            Focus areas can include human-AI collaboration, situated intelligence, multimodal sensing, everyday health
            technologies, and deployable ubiquitous systems.
          </p>
        </div>
      </section>
    </div>
  );
}
