import Head from "next/head";
import { useRouter } from "next/router";

const SEO = () => {
  const router = useRouter();

  return (
    <Head>
      <meta
        name="description"
        content={
          "Gloppa users provides startups with the ability to gain initial user base in order to test market fit and grow inital popularity of the startup."
        }
      />
      <meta
        name="keywords"
        content={
          "Fun, Startups, Videogames, Games, Company, Tasks, Todolist, Strategy, Gloppa, Users, Market, Market Fit, Fit"
        }
      />
      <title>Gloppa Users - Helping with market fit and users</title>
      <meta
        property="og:title"
        content={"Gloppa Users - Helping with market fit and users"}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={
          "Gloppa users provides startups with the ability to gain initial user base in order to test market fit and grow inital popularity of the startup."
        }
      />
      <meta
        property="og:site_name"
        content={"Gloppa Users - Helping with market fit and users"}
      />
    </Head>
  );
};

export default SEO;
