import Link from "next/link";

export default function Home() {
return (
<main className="min-h-screen bg-zinc-950 text-white">

<section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

<h1 className="text-6xl font-extrabold text-yellow-400">
🏆 BW Laub
</h1>

<h2 className="mt-4 text-4xl font-bold">
Bierpongturnier 2026
</h2>

<p className="mt-6 max-w-2xl text-xl text-zinc-300">
Melde dein Team an und kämpft gemeinsam um den Turniersieg.
</p>

<div className="mt-12 rounded-2xl bg-zinc-900 p-8 shadow-xl">
<p className="text-lg text-zinc-400">
Countdown bis zum Turnier
</p>

<h3 className="mt-3 text-5xl font-bold text-yellow-400">
folgt
</h3>
</div>

<Link
href="/anmelden"
className="mt-12 rounded-xl bg-yellow-500 px-10 py-4 text-xl font-bold text-black transition hover:bg-yellow-400"
>
Jetzt Team anmelden
</Link>

</section>

</main>
);
}
