import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { Control, FieldPath } from "react-hook-form";

import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface FormInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  id?: string; // Optional id prop
}

const FormInput = ({
  control,
  name,
  label,
  placeholder,
  id,
}: FormInputProps) => {
  const inputId = id || `${name}-form-item`;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={inputId}
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message" />
          </div>
        </div>
      )}
    />
  );
};

export default FormInput;
