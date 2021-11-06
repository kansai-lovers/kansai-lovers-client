import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Member } from "src/@types/generate/models";
import { Detail } from "src/components/app/profile/detail";
import { Layout } from "src/components/shares/Layout";
import { useFallback } from "src/hooks/useFallback";
import { api } from "src/lib/api";

type Props = {
  member: Member;
};

const Profile: NextPage<Props> = ({ member }) => {
  useFallback();

  return (
    <Layout title="Profile | Skillme">
      <Detail member={member} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api().getMembers();

  const paths = data.map((member) => ({
    params: { id: String(member.id) },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = String(params?.id);
  const response = await api().getMemberById(id);
  const member = response.data;

  return {
    props: {
      member,
    },
    revalidate: 60,
  };
};

export default Profile;
