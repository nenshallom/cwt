export interface FormData {
  name: string;
  message: string;
  email: string;
  phone: string;
}

export const sendMessage = async (formData: FormData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return response;
};
