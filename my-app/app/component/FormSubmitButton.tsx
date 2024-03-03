"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

export default function FormSubmitButton({
  children,
  className,
  ...props
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={` mt-8 text-white btn btn-outline btn-accent hover:bg-blue-800 font-medium text-sm px-5 py-3 text-center
      ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-dots" />}
      {children}
    </button>
  );
}
