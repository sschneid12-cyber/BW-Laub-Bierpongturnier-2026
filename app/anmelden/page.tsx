"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
export default function Anmeldung() {

const [teamName, setTeamName] = useState("");
const [player1, setPlayer1] = useState("");
const [player2, setPlayer2] = useState("");
const [drink, setDrink] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const handleSubmit = async (e: any) => {
e.preventDefault();

const { error } = await supabase.from("teams").insert([
{
team_name: teamName,
player1,
player2,
drink,
email,
phone,
},
]);

if (error) {
alert("Fehler: " + error.message);
} else {
alert("Team erfolgreich angemeldet!");
setTeamName("");
setPlayer1("");
setPlayer2("");
setDrink("");
setEmail("");
setPhone("");
}
};
return (
<main className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
<div className="w-full max-w-xl rounded-2xl bg-zinc-800 p-8 shadow-xl">

<h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
🍺 Team anmelden
</h1>

<form onSubmit={handleSubmit} className="space-y-5">

<div>
<label className="block mb-2">Teamname</label>
<input
required
className="w-full rounded-lg bg-zinc-700 p-3"
placeholder="z.B. Bierkönige"
value={teamName}
onChange={(e) => setTeamName(e.target.value)}
/>
</div>

<div>
<label className="block mb-2">Spieler 1</label>
<input
required
className="w-full rounded-lg bg-zinc-700 p-3"
placeholder="Name"
value={player1}
onChange={(e) => setPlayer1(e.target.value)}
/>
</div>

<div>
<label className="block mb-2">Spieler 2</label>
<input
required
className="w-full rounded-lg bg-zinc-700 p-3"
placeholder="Name"
value={player2}
onChange={(e) => setPlayer2(e.target.value)}
/>
</div>

<div>
<label className="block mb-2">Getränk</label>

<select
required
className="w-full rounded-lg bg-zinc-700 p-3"
value={drink}
onChange={(e) => setDrink(e.target.value)}
>
<option value="">Bitte auswählen</option>
<option value="Bier">Bier</option>
<option value="Radler">Radler</option>
<option value="Weißweinschorle">Weißweinschorle</option>
</select>
</div>

<div>
<label className="block mb-2">E-Mail</label>

<input
required
type="email"
className="w-full rounded-lg bg-zinc-700 p-3"
placeholder="beispiel@mail.de"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</div>

<div>
<label className="block mb-2">Telefon</label>

<input
required
type="tel"
className="w-full rounded-lg bg-zinc-700 p-3"
placeholder="0151 12345678"
value={phone}
onChange={(e) => setPhone(e.target.value)}
/>
</div>



<button
type="submit"
className="w-full rounded-xl bg-yellow-500 py-4 font-bold text-black hover:bg-yellow-400"
>
Team anmelden
</button>

</form>
</div>
</main>
);
}