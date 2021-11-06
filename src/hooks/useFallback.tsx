import { useRouter } from "next/dist/client/router";

export const useFallback = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
};
