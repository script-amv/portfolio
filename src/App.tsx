import Section from "./Section";

function App() {
  return (
    <main className="mx-auto max-w-7xl border-x border-zinc-200 bg-white px-24 flex flex-col gap-[40vh] py-[40vh]">
      <Section
        title="Hello, I'm Dmitrii — Web Developer."
        description="Based in Tokyo and available for new opportunities, I build thoughtful, reliable web applications across both frontend and backend. Explore my projects and experience, or get in touch to discuss an opportunity."
      />

      <Section
        title="Technologies I use, tools I trust, and qualifications I've earned."
        description="I work across frontend and backend development to build fast, accessible, and reliable web experiences. Here's a focused overview of the technologies I reach for, the tools that support my workflow, and the qualifications that have shaped my professional development."
      />
      
      <Section
        title="Projects I've built, problems I've solved, and ideas I've brought to life."
        description="I approach each project with a focus on thoughtful decisions, reliable implementation, and a clear purpose. Here's a selection of work that shows how I turn ideas and requirements into polished web applications across the stack."
      />
    </main>
  )
}

export default App
