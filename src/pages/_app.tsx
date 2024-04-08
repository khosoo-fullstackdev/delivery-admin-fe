import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { CustomContextProvider } from "@/components/context/Context";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CustomContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomContextProvider>
  );
};

export default App;
