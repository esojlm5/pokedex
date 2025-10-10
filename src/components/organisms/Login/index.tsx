"use client";
import { useEffect } from "react";
import Form from "@/components/molecules/Form";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginOrganism = () => {
  const { login, isLoggedIn } = useAuthStore();
  const router = useRouter();

  // this should be handled by a middleware because the session should comes from some auth services, but for now it's ok
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);

  const handleSubmit = (e) => {
    login();
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 mt-3.5 grid grid-cols-2">
      <div className="flex justify-center items-center relative h-[800] rounded-xl overflow-hidden">
        <Image
          src="/images/all-pokemon-pictures.jpg"
          className="object-cover -z-10 h-full"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="mt-20 pl-5">
        <Form handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default LoginOrganism;
