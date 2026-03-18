import Link from "next/link";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900">
			<section className="mx-auto max-w-3xl">
				<h1 className="text-3xl font-bold">About</h1>
				<p className="mt-4 text-slate-600">
					Write a short introduction about yourself, your background, and what
					you enjoy building.
				</p>

				<nav className="mt-8 flex flex-wrap gap-3">
					<Link href="/" className="text-sm font-medium underline">
						Home
					</Link>
					<Link href="/projects" className="text-sm font-medium underline">
						Projects
					</Link>
					<Link href="/contact" className="text-sm font-medium underline">
						Contact
					</Link>
				</nav>
			</section>
		</main>
	);
}
