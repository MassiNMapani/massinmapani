"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      organization: String(formData.get("organization") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setStatus("Message failed to send. Please try again.");
      return;
    }

    event.currentTarget.reset();
    setStatus("Message sent. Thank you.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-stone">
          Name
          <input
            name="name"
            type="text"
            required
            className="w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
          />
        </label>
        <label className="space-y-2 text-sm text-stone">
          Email
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-stone">
        Organization
        <input
          name="organization"
          type="text"
          className="w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
        />
      </label>
      <label className="space-y-2 text-sm text-stone">
        Brief
        <textarea
          name="message"
          required
          rows={6}
          className="w-full rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
        />
      </label>
      <button
        type="submit"
        className="rounded-2xl bg-rose px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
      >
        Send message
      </button>
      {status ? <p className="text-sm text-stone">{status}</p> : null}
    </form>
  );
}
