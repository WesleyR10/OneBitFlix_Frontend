import FeaturedSection from "@/components/homeAuth/featuresSection"
import Head from "next/head"

const HomeAuth = () => {
  return (
    <>
      <Head>
        <title>Onebitflix - Home</title>
        <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
      </main>
    </>
  )
}

export default HomeAuth