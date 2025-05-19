import * as React from "react";
import { Toaster as Sonner } from "sonner";
import "sonner/dist/styles.css";

export function Toaster() {
  return (
    <Sonner
      className="sonner"
      toastOptions={{
        className: "sonner-toast",
        descriptionClassName: "sonner-description",
      }}
    />
  );
}
