import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
const body = await req.json();

try {
const result = await resend.emails.send({
from: "onboarding@resend.dev",
to: body.email,
subject: "Anmeldung Bierpongturnier",
html: `
<div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
<h2 style="color:#f59e0b;">🏆 Vielen Dank für eure Anmeldung!</h2>

<p>Hallo <strong>${body.team_name}</strong>,</p>

<p>eure Anmeldung zum <strong>BW Laub Bierpongturnier 2026</strong> ist erfolgreich eingegangen.</p>

<hr>

<p><strong>Team:</strong> ${body.team_name}</p>
<p><strong>Spieler 1:</strong> ${body.player1}</p>
<p><strong>Spieler 2:</strong> ${body.player2}</p>

<hr>

<p>
Alle Informationen zum Turnier findet ihr auf unserer Website:
</p>

<p>
<a href="https://DEINE-WEBSITE.de"
style="background:#f59e0b;color:white;padding:12px 20px;
text-decoration:none;border-radius:6px;display:inline-block;">
Zur Turnier-Website
</a>
</p>

<br>

<p>Wir freuen uns auf euch! 🍻</p>

<p><strong>BW Laub Team</strong></p>
</div>
`

});
console.log("Resend:", result);
return NextResponse.json(result);
} catch (error) {
return NextResponse.json({ error }, { status: 500 });
}
}
