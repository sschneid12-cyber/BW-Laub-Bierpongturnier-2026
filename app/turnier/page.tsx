 'use client'
 import { createClient } from '@supabase/supabase-js'
 import { useEffect, useState } from 'react'
    export default function TurnierPage() {
        const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
  const [matches, setMatches] = useState<any[]>([])

useEffect(() => {
  loadMatches()
}, [])

async function loadMatches() {
  const { data, error } = await supabase
    .from('tournament_matches')
    .select('*')
    .order('table_number')

  if (!error && data) {
    setMatches(data)
    console.log(data)
  }
}
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
{matches.map((match) => (
  <div
    key={match.id}
    className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800"
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-yellow-400 font-bold">
        Tisch {match.table_number}
      </span>

      <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
        {match.match_played ? 'Fertig' : 'Läuft'}
      </span>
    </div>

    <div className="space-y-3 text-center">
      <div className="text-lg font-semibold">
        {match.team_a}
      </div>

      <div className="text-zinc-500">VS</div>

      <div className="text-lg font-semibold">
        {match.team_b}
      </div>
    </div>
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
