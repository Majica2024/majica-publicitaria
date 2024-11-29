import type { FormData } from "@/types/sections";
import { type ChangeEvent, useState } from "react";

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      message: "",
    });
  };

  return {
    formData,
    handleChange,
    resetForm,
  };
};
