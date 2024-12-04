import AuthForm from "@/components/AuthForm";
import React from "react";

function SignIn() {
  return (
    <div className="flex justify-center w-full max-sm:px-6">
      <AuthForm type='sign-in' />
    </div>
  );
}

export default SignIn;
