import Link from "next/link";

const projects = ["Project One", "Project Two", "Project Three"];

export default function ProjectsPage() {
	return (
		<main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900">
			<section className="mx-auto max-w-3xl">
				<h1 className="text-3xl font-bold">Projects</h1>
				<p className="mt-4 text-slate-600">
					Add your best projects here with links and short descriptions.
				</p>

				<ul className="mt-6 space-y-2">
					{projects.map((project) => (
						<li key={project} className="rounded-md border border-slate-200 bg-white p-3">
							{project}
						</li>
					))}
				</ul>

				<nav className="mt-8 flex flex-wrap gap-3">
					<Link href="/" className="text-sm font-medium underline">
						Home
					</Link>
					<Link href="/about" className="text-sm font-medium underline">
						About
					</Link>
					<Link href="/contact" className="text-sm font-medium underline">
						Contact
					</Link>
				</nav>
			</section>
		</main>
	);
}
