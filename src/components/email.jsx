import emailjs from "@emailjs/browser";

export function sendContactEmail(form) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  console.log("Service ID:", serviceId);
  console.log("Template ID:", templateId);

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS is not configured. Check your .env file."
    );
  }

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    phone: form.phone,
    project_type: form.type,
    reply_to: form.email,
  };

  console.log("Template Params:", templateParams);

  return emailjs.send(
    serviceId,
    templateId,
    templateParams,
    {
      publicKey: publicKey,
    }
  );
}