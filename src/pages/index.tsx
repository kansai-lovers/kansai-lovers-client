import { NextPage } from "next";
import { Layout } from "src/components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home | Skillme">
      <p>Hello World</p>
    </Layout>
  );
};

export default Home;
