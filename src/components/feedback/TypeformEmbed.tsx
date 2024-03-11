"use client";
import React, { useEffect } from "react";

interface TypeformEmbedProps {
  formId: string;
}

export const TypeformEmbed: React.FC<TypeformEmbedProps> = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <div data-tf-live={formId}></div>
    </div>
  );
};
