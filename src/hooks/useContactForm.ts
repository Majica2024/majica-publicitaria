import type { FormData } from "@/types/sections";
import { type ChangeEvent, useState } from "react";

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    socialNetwork: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      socialNetwork: "",
    });
  };

  return {
    formData,
    handleChange,
    resetForm,
  };
};
