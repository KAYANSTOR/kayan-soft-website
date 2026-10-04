export const contactInfo = {
  whatsappNumber: "967773303455",
  whatsappDisplay: "+967 77 330 3455",
  email: "hello@kayan-soft.online",
  location: "صنعاء، الجمهورية اليمنية — فريق رقمي متكامل",
};

export function buildWhatsAppUrl(message = "") {
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${contactInfo.whatsappNumber}${query}`;
}

export function openWhatsApp(message = "") {
  const url = buildWhatsAppUrl(message);
  if (typeof window === "undefined") return url;

  const popup = window.open(url, "_blank", "noopener,noreferrer");
  if (!popup) window.location.assign(url);
  return url;
}
