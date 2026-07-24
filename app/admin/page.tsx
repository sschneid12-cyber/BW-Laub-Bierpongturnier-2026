"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Admin() {

const [teams, setTeams] = useState<any[]>([]);

useEffect(() => {
ladeTeams();
}, []);

async function ladeTeams() {

const { data, error } = await supabase
.from("teams")
.select("*")
.order("created_at", { ascending: true });

if (!error) {
setTeams(data || []);
}

}

return (

<main className="min-h-screen bg-zinc-900 text-white p-10">

<h1 className="text-4xl font-bold text-yellow-400 mb-8">

🍺 Angemeldete Teams

</h1>

<table className="w-full">

<thead>

<tr className="border-b border-zinc-600">

<th className="text-left p-3">Team</th>

<th className="text-left p-3">Spieler 1</th>

<th className="text-left p-3">Spieler 2</th>

<th className="text-left p-3">Getränk</th>

<th className="text-left p-3">E-Mail</th>

<th className="text-left p-3">Telefon</th>

</tr>

</thead>

<tbody>

{teams.map((team) => (

<tr key={team.id} className="border-b border-zinc-700">

<td className="p-3">{team.team_name}</td>

<td className="p-3">{team.player1}</td>

<td className="p-3">{team.player2}</td>

<td className="p-3">{team.drink}</td>

<td className="p-3">{team.email}</td>

<td className="p-3">{team.phone}</td>

</tr>

))}

</tbody>

</table>

</main>

);

}
