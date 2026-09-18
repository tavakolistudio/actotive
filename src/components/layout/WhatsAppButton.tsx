import { contactDetails } from "@/data/actotive";

export function WhatsAppButton() {
  return <a className="whatsapp-button" href={contactDetails.whatsappHref} target="_blank" rel="noreferrer" aria-label="Contact ACTOTIVE on WhatsApp"><span>◔</span><b>WhatsApp</b></a>;
}
