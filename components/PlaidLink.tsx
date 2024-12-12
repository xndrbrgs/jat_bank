import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { Button } from "./ui/button";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };
    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });

      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);
  return (
    <>
      {variant === "primary" ? (
        <Button className="form-btn" onClick={() => open()} disabled={!ready}>
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          variant="ghost"
          className="form-btn"
          onClick={() => open()}
          disabled={!ready}
        >
          <Image
            src="/icons/connect-bank.svg"
            width={24}
            height={24}
            alt="Connect Bank Icon"
          />
          <p className="text-sm hidden xl:block">Connect Bank</p>
        </Button>
      ) : variant === "link" ? (
        <Button
          variant="link"
          className="hover:brightness-[2] transition duration-150"
          onClick={() => open()}
          disabled={!ready}
        >
          <Image
            src="/icons/connect-bank.svg"
            width={24}
            height={24}
            alt="Connect Bank Icon"
          />
          <p className="text-sm">Connect Bank</p>
        </Button>
      ) : (
        <Button className="form-btn" onClick={() => open()} disabled={!ready}>
          <Image
            src="/icons/connect-bank.svg"
            width={24}
            height={24}
            alt="Connect Bank Icon"
          />
          <p className="text-sm">Connect Bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
