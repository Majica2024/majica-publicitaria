import {
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_TO_EMAIL,
} from "@/environment";
import type { FormData, SubmitStatus } from "@/types/sections";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

export const useEmailSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    message: "",
    isError: false,
  });

  useEffect(() => {
    if (NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const submitEmail = async (formData: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ message: "", isError: false });

    if (!NEXT_PUBLIC_EMAILJS_SERVICE_ID || !NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      setSubmitStatus({
        message:
          "Error de configuración del servicio. Por favor, contacta al administrador.",
        isError: true,
      });
      setIsSubmitting(false);
      return false;
    }

    const templateParams = {
      to_email: NEXT_PUBLIC_TO_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      social_network: formData.socialNetwork,
      message: `Nuevo contacto de ${formData.name}:
        \nTeléfono: ${formData.phone}
        \nRed Social: ${formData.socialNetwork}`,
    };

    try {
      await emailjs.send(
        NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      setSubmitStatus({
        message: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
        isError: false,
      });

      return true;
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        message:
          "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
        isError: true,
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    submitStatus,
    submitEmail,
  };
};
