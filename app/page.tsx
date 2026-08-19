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
<p>21.08.2026 18:30Uhr </p>
</div>  

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">📅 Anmeldeschluss</h3>
<p>10.08.2026 </p>
</div>  
    

   

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">📍 Ort</h3>
<p>Bauwagen Laub / Dorfstraße 1</p>
</div>

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">💰 Startgebühr </h3>
<p>20€</p>
</div>

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">🏆 Preise</h3>
<p>je nach Teilnehmer Zahl</p>
</div>

<div className="bg-zinc-900 rounded-2xl p-6">
<h3 className="text-2xl font-bold mb-4">📅 Infos</h3>
<p>Angemeldete Teams müssen um 18:00Uhr vor Ort sein</p>
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

<h3 className="text-2xl font-bold text-yellow-400">
🏓 Allgemeine Spielregeln
</h3>

<p>• In der Vorrunde werden alle Mannschaften in <strong>4er-Gruppen</strong> eingeteilt.</p>
<p>• Jede Mannschaft bestreitet <strong>3 Gruppenspiele</strong> (Jeder gegen Jeden). Anschließend folgt die K.-o.-Phase.</p>
<p>• Die zwei besten Teams jeder Gruppe qualifizieren sich für die K.-o.-Phase. Zusätzlich qualifizieren sind die vier besten Drittplazierten aller Gruppen</p>
<p>• Jedes Spiel dauert maximal <strong>15 Minuten</strong>.</p>
<p>• Versenkt ein Team alle Becher des Gegners, erhält es <strong>3 Punkte</strong>.</p>
<p>• Sind nach Ablauf der Zeit auf beiden Seiten noch Becher vorhanden, gewinnt das Team mit den meisten Treffern und erhält <strong>2 Punkte</strong>.</p>
<p>• Bei einem Unentschieden erhält jedes Team <strong>1 Punkt</strong>.</p>
<p>• Reihenfolge in der Tabelle: Punkte → Becherdifferenz → mehr getroffene Becher → direkter Vergleich → Entscheidungswurf.</p>
<p>• Gespielt wird mit <strong>Bier, Radler oder Weinschorle</strong>. Das Getränk wird in die Becher gefüllt.</p>

<h3 className="text-2xl font-bold text-yellow-400 mt-10">
🏆 K.-o.-Phase
</h3>

<p>• In der K.-o.-Phase gibt es <strong>keine Unentschieden</strong>. Steht es nach 15 Minuten gleich, entscheidet ein <strong>Sudden-Death-Wurf</strong> (je 1 Wurf pro Team, bis eine Entscheidung fällt).</p>

<h3 className="text-2xl font-bold text-yellow-400 mt-10">
🎯 Ablauf & Wurfregeln
</h3>

<p>• Die erstgenannte Mannschaft beginnt.</p>
<p>• Beide Teammitglieder werfen abwechselnd.</p>
<p>• Werden beide Bälle eines Teams in einer Runde versenkt, darf das Team erneut werfen.</p>
<p>• Becher bleiben stehen, bis beide Bälle geworfen wurden.</p>
<p>• Der Ellenbogen darf beim Wurf nicht über die Tischkante ragen.</p>
<p>• Aufsetzer dürfen vom Gegner weggeschlagen werden. Trifft der Ball dennoch, zählt der Treffer doppelt.</p>
<p>• Trifft eine <strong>Bombe</strong> (beide Bälle im selben Becher), müssen insgesamt <strong>3 Becher</strong> getrunken werden.</p>
<p>• Steht ein Becher wackelig an der Kante, darf er nach Rücksprache mit dem Gegner wieder auf die Markierung gestellt werden.</p>
<p>• Fällt ein Becher nach einem Wurf um, wird er wieder aufgestellt und befüllt. Der Wurf zählt, der Becher jedoch nicht als getroffen.</p>
<p>•Wenn ein Team seine eigenen Becher umwirft, gelten diese Becher als getroffen und werden nicht wieder aufgestellt.</p>
<p>• Ein kreisender Ball im Becher darf nicht ausgepustet werden.</p>
<p>• Bounce Shots und Trickshots sind nicht erlaubt.</p>
<p>• Beim letzten Becher gibt es keinen Nachwurf.</p>
<p>• Sobald nur noch <strong>5 Becher</strong> stehen, dürfen diese einmal neu zusammengestellt werden.</p>
<p>• Ein getroffener Becher muss direkt ausgetrunken werden, erst nachdem der Becher ausgetrunken wurde, darf der nächst Wurf erfolgen.</p>

<h3 className="text-2xl font-bold text-yellow-400 mt-10">
🍺 Getränke & Becher
</h3>

<p>• Jede Mannschaft erhält eigene Becher und nutzt diese während des gesamten Turniers.</p>
<p>• Wer möchte, kann seine Becher an der Bar ausspülen lassen.</p>
<p>• Getroffene Becher werden neben dem Tisch platziert.</p>
<p>• Das unterlegene Team muss die restlichen Becher des Siegerteams nicht austrinken.</p>

<h3 className="text-2xl font-bold text-yellow-400 mt-10">
🤝 Ergebnisse & Fairplay
</h3>

<p>• Jedes Team meldet sein Spielergebnis eigenständig bei der Turnierleitung.</p>
<p>• Entscheidungen der Turnierleitung sind verbindlich.</p>
<p>• Fairness und Respekt stehen jederzeit an erster Stelle.</p>
<p>• Viel Erfolg und viel Spaß beim BW Laub Bierpongturnier 2026! 🍻</p>

</div>


</section>

</main>
);
}
