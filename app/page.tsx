"use client";
import Link from "next/link";
import{ useEffect, useState } from "react";

export default function Home() {
    const tournamentDate = new Date("2026-08-21T18:30:00");

const [timeLeft, setTimeLeft] = useState({
days: 0,
hours: 0,
minutes: 0,
seconds: 0,
});

useEffect(() => {
const timer = setInterval(() => {
const difference = tournamentDate.getTime() - new Date().getTime();

if (difference <= 0) return;

setTimeLeft({
days: Math.floor(difference / (1000 * 60 * 60 * 24)),
hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
minutes: Math.floor((difference / 1000 / 60) % 60),
seconds: Math.floor((difference / 1000) % 60),
});
}, 1000);

return () => clearInterval(timer);
}, []);

return (
<main className="min-h-screen bg-zinc-950 text-white">
<nav className="w-full fixed top-0 left-0 bg-black/70 backdrop-blur-md border-b border-zinc-800 z-50">
<div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
<h1 className="text-yellow-400 font-bold text-xl">
🏆 BW Laub
</h1>

<div className="flex gap-6 text-sm">
<a href="#infos" className="hover:text-yellow-400">Infos</a>
<a href="#regelwerk" className="hover:text-yellow-400">Regelwerk</a>
<a href="/anmelden" className="hover:text-yellow-400">Anmelden</a>
</div>
</div>
</nav>

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

<h3 className="mt-3 text-5xl font-bold text-yellow-400">
{timeLeft.days} Tage
</h3>

<p className="mt-2 text-xl text-zinc-300">
{timeLeft.hours} Std • {timeLeft.minutes} Min • {timeLeft.seconds} Sek
</p>

</div>

<Link
href="/anmelden"
className="mt-12 rounded-xl bg-yellow-500 px-10 py-4 text-xl font-bold text-black transition hover:bg-yellow-400"
>
Jetzt Team anmelden
</Link>

</section>
<section
id="infos"
className="max-w-5xl mx-auto px-6 py-24 space-y-12"
>
<h2 className="text-4xl font-bold text-yellow-400 text-center">
📍 Turnierinformationen
</h2>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">📅 Datum</h3>
<p>21.08.206
    <br />
    <strong>Turnierbeginn:</strong> 18:30 Uhr 
   <strong>Anmeldung vor Ort:</strong> 17:30 Uhr  </p>
</div>

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">📍 Ort</h3>
<p>Bauwagen Laub />Dorfstraße 1</p>
</div>

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">💰 Startgebühr</h3>
<p>folgt</p>
</div>

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">🏆 Preise</h3>
<p>folgt</p>
</div>

</div>
</section>
<section
id="regelwerk"
className="max-w-5xl mx-auto px-6 pb-24"
>
<h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
📖 Regelwerk
</h2>

<div className="bg-zinc-900 rounded-2xl p-8 space-y-4">
<p>🏓 Gespielt wird 2 gegen 2.</p>
<p>🥤 10 Becher pro Team.</p>
<p>🎯 Trifft ein Ball einen Becher, muss dieser getrunken werden.</p>
<p>🔁 Jeder Ball zählt nur einmal.</p>
<p>🏆 Gespielt wird im K.-o.-System.</p>
<p>🍺 Fair Play steht an erster Stelle.</p>
</div>
</section>

</main>
);
}
