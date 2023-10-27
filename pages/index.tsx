import Head from "next/head";
import { Poppins } from "next/font/google";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import Store from "@/components/home/store";
import Hero from "@/components/home/hero";
import Overlay from "@/components/layouts/Overlay";
import SideBar from "@/components/layouts/SideBar";
import { useAppSelector } from "@/store/hooks";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  const { showOverlay, showSideBar } = useAppSelector(
    (state) => state.restaurant
  );
  return (
    <>
      <Head>
        <title>Hey food</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={poppins.className}
        style={{ fontFamily: poppins.style.fontFamily, position: "relative" }}
      >
        <Hero />
        <Store />
      </main>
    </>
  );
};

Home.getLayout = (page: any) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
