import { useRouter } from "next/router";
import { useEffect } from "react";
import { gsap } from "gsap";
import Button from "@components/Button";
import Container from "@components/Container";
import Layout from "@components/Layout";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    gsap.from("#pageNotFound", {
      opacity: 0,
      y: 40,
      ease: "power3.out",
      duration: 1,
      delay: 0.3,
    });
  }, []);
  return (
    <Layout title="404: Not Found | Ng Gerald">
      <Container>
        <div
          id="pageNotFound"
          style={{ minHeight: "90vh" }}
          className="flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <h1 className="mb-4 font-mono text-5xl font-semibold text-primary-light sm:text-6xl md:text-7xl lg:text-8xl">
              404
            </h1>
            <p className="font-medium sm:text-lg md:text-xl lg:text-2xl">
              Oops! There&apos;s nothing here!
            </p>
            <Button
              onClick={() => router.push("/")}
              margin="mx-auto my-16"
              padding="py-3 px-8 sm:py-4 sm:px-12"
            >
              Return To Homepage
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFound;
