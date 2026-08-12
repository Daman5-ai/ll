
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "All fields are required." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // TODO: replace with a verified domain sender
      to: process.env.CONTACT_TO_EMAIL ?? "",
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: message,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json({ error: "Message failed to send. Please try again." }, { status: 500 });
  }
}
