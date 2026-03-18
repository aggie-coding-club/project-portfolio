import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="mt-4 text-lg text-slate-600">
          I build simple, useful web apps. Welcome to my portfolio.
        </p>

        <nav className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100"
          >
            Contact
          </Link>
        </nav>
      </section>
    </main>
  );
}
