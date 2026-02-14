type ContactPayload = {
	name: string
	email: string
	message: string
}

export async function sendContactEmail(payload: ContactPayload) {
	// TODO: Choose transport (SMTP, provider API, etc.).
	// TODO: Map payload to email template.
	// TODO: Send email and handle provider errors.
	// TODO: Return a result or throw on failure.
	void payload
}
