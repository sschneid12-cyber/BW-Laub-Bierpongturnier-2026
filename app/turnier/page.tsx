export default function TurnierPage() {
return (
<main className="min-h-screen bg-zinc-950 text-white px-6 py-10">
<div className="max-w-6xl mx-auto space-y-10">

{/* Kopf */}
<section className="text-center space-y-4">
<h1 className="text-5xl font-extrabold text-yellow-400">
🏆 Turnieroberfläche
</h1>
<p className="text-zinc-300 text-lg">
Gruppenphase • 16 Teams • 8 Tische
</p>
</section>

{/* Aktuelle Runde */}
<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-3xl font-bold text-yellow-400">Aktuelle Runde</h2>
<span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
Runde 1
</span>
</div>

<div className="grid md:grid-cols-2 gap-4">
{[
["Tisch 1", "Bierkönige", "Pong Panthers"],
["Tisch 2", "Cup Crushers", "Bauwagen Elite"],
["Tisch 3", "Hopfen Helden", "Ball Baller"],
["Tisch 4", "Team 7", "Team 8"],
["Tisch 5", "Team 9", "Team 10"],
["Tisch 6", "Team 11", "Team 12"],
["Tisch 7", "Team 13", "Team 14"],
["Tisch 8", "Team 15", "Team 16"],
].map(([tisch, a, b]) => (
<div key={tisch} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
<div className="flex justify-between items-center mb-4">
<span className="text-yellow-400 font-bold">{tisch}</span>
<span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">Läuft</span>
</div>

<div className="space-y-3 text-center">
<div className="text-lg font-semibold">{a}</div>
<div className="text-zinc-500">VS</div>
<div className="text-lg font-semibold">{b}</div>
</div>
</div>
))}
</div>
</section>

{/* Tabellen */}
<section className="space-y-6">
<h2 className="text-3xl font-bold text-yellow-400 text-center">
Gruppentabellen
</h2>

<div className="grid md:grid-cols-2 gap-6">
{[
"Gruppe A",
"Gruppe B",
"Gruppe C",
"Gruppe D",
].map((gruppe) => (
<div key={gruppe} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xl font-bold text-yellow-400">{gruppe}</h3>
<span className="text-xs bg-green-700 px-2 py-1 rounded-full">
Top 2 weiter
</span>
</div>

<table className="w-full text-sm">
<thead className="text-zinc-400 border-b border-zinc-700">
<tr>
<th className="text-left py-2">Team</th>
<th className="py-2">Pkt</th>
<th className="py-2">+/-</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-zinc-800">
<td className="py-2 font-medium">Bierkönige</td>
<td className="text-center">0</td>
<td className="text-center">0</td>
</tr>
<tr className="border-b border-zinc-800">
<td className="py-2 font-medium">Pong Panthers</td>
<td className="text-center">0</td>
<td className="text-center">0</td>
</tr>
<tr className="border-b border-zinc-800">
<td className="py-2 font-medium">Cup Crushers</td>
<td className="text-center">0</td>
<td className="text-center">0</td>
</tr>
<tr>
<td className="py-2 font-medium">Bauwagen Elite</td>
<td className="text-center">0</td>
<td className="text-center">0</td>
</tr>
</tbody>
</table>
</div>
))}
</div>
</section>

{/* Nächste Phase */}
<section className="space-y-6">
<h2 className="text-3xl font-bold text-yellow-400 text-center">
K.-o.-Phase
</h2>

<div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
<div className="grid md:grid-cols-2 gap-4 text-center">
<div className="bg-zinc-800 rounded-xl p-4">A1 vs D2</div>
<div className="bg-zinc-800 rounded-xl p-4">B1 vs C2</div>
<div className="bg-zinc-800 rounded-xl p-4">C1 vs B2</div>
<div className="bg-zinc-800 rounded-xl p-4">D1 vs A2</div>
</div>
</div>
</section>

</div>
</main>
);
}
