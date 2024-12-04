import AuthForm from "@/components/AuthForm";
import React from "react";

function SignUp() {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center w-full size-full max-sm:px-6">
        <AuthForm type="sign-up" />
      </div>
    </div>
  );
}

export default SignUp;
