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
<h2>Vielen Dank für deine Anmeldung!</h2>
<p>Team: ${body.team_name}</p>
<p>Spieler 1: ${body.player1}</p>
<p>Spieler 2: ${body.player2}</p>
`,
});
console.log("Resend:", result);
return NextResponse.json(result);
} catch (error) {
return NextResponse.json({ error }, { status: 500 });
}
}
