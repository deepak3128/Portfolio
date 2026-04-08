import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import { PortfolioPage } from "@/pages/PortfolioPage";

export default function App() {
  return (
    <>
      <Layout>
        <PortfolioPage />
      </Layout>
      <Toaster />
    </>
  );
}
