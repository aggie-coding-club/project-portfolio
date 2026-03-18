import Link from "next/link";

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-slate-50 px-6 py-20 text-slate-900">
			<section className="mx-auto max-w-3xl">
				<h1 className="text-3xl font-bold">Contact</h1>
				<p className="mt-4 text-slate-600">Email: yourname@email.com</p>
				<p className="mt-1 text-slate-600">LinkedIn: linkedin.com/in/yourname</p>
				<p className="mt-1 text-slate-600">GitHub: github.com/yourname</p>

				<nav className="mt-8 flex flex-wrap gap-3">
					<Link href="/" className="text-sm font-medium underline">
						Home
					</Link>
					<Link href="/about" className="text-sm font-medium underline">
						About
					</Link>
					<Link href="/projects" className="text-sm font-medium underline">
						Projects
					</Link>
				</nav>
			</section>
		</main>
	);
}
