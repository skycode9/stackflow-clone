import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer hover:opacity-90 transition-opacity";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass}>
        <Image
          src="/icons/github.svg"
          alt="GitHub logo"
          width={20}
          height={20}
          className="object-contain invert-colors mr-2.5"
        />
        Log in with GitHub
      </Button>

      <Button className={buttonClass}>
        <Image
          src="/icons/google.svg"
          alt="Google logo"
          width={20}
          height={20}
          className="object-contain mr-2.5"
        />
        Log in with Google
      </Button>
    </div>
  );
};

export default SocialAuthForm;
