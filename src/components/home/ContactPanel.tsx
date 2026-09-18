"use client";

import { FormEvent } from "react";
import { contactDetails } from "@/data/actotive";

export function ContactPanel() {
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `ACTOTIVE enquiry from ${form.get("name")}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Company: ${form.get("company") || "Not provided"}`,
      "",
      "Project / requirement:",
      form.get("message"),
    ].join("\n");
    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <div className="contact-experience"><form className="contact-form" onSubmit={submitContact}><label>Full name<input name="name" autoComplete="name" required /></label><label>Email address<input type="email" name="email" autoComplete="email" required /></label><label>Phone number<input type="tel" name="phone" autoComplete="tel" /></label><label>Company<input name="company" autoComplete="organization" /></label><label className="contact-message">Tell us about your project<textarea name="message" required rows={6} placeholder="Part number, requirement, quantity or delivery destination" /></label><button className="button primary" type="submit">Send enquiry <span>↗</span></button><p>Submitting opens your email application with the request details prepared for our sales team.</p></form><aside className="contact-aside"><div className="office-address"><span>Office address</span><strong>{contactDetails.address}</strong><a href="https://maps.google.com/?q=Bah%C3%A7elievler%20Mah.%20Turhan%20Ko%C3%A7al%20Cad.%2050%2F2%20Yalova" target="_blank" rel="noreferrer">Open in Maps ↗</a></div><iframe title="ACTOTIVE office location in Yalova" src={contactDetails.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="contact-mini"><a href={contactDetails.phoneHref}><span>Call center</span><strong>{contactDetails.phone}</strong></a><a href={contactDetails.whatsappHref} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contactDetails.phone}</strong></a><a href={`mailto:${contactDetails.email}`}><span>Email</span><strong>{contactDetails.email}</strong></a></div></aside></div>;
}
