import { Button } from "@mui/material";
import { NextPage } from "next";
import { getHello } from "../lib/api";

type Props = {
  data: { value: string };
};

const Home: NextPage<Props> = ({ data }) => {
  return <Button>{data.value}</Button>;
};

export const getStaticProps = async () => {
  const data = await getHello();

  return {
    props: {
      data,
    },
  };
};

export default Home;
