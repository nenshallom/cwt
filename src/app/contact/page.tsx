import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ"; 

export const metadata = {
  title: "Contact Us | Code Warriors Tech",
  description: "Get in touch with Code Warriors Tech. We'd love to hear from you and discuss how we can help your business.",
};

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ContactFAQ /> 
    </>
  );
}