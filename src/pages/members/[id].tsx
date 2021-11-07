import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Member, SkillScore } from "src/@types/generate/models";
import { Detail } from "src/components/app/profile/detail";
import { Layout } from "src/components/shares/Layout";
import { useFallback } from "src/hooks/useFallback";
import { api } from "src/lib/api";

type Props = {
  // MEMO: API都合で配列で返ってくる
  member: Member[];
  skillScore: SkillScore;
};

const Profile: NextPage<Props> = ({ member, skillScore }) => {
  useFallback();

  return (
    <Layout title="Profile | Skillme">
      <Detail member={member[0]} skillScore={skillScore} />
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
  const memberResponse = await api().getMemberById(id);
  const member = memberResponse.data;

  const skillScoreResponse = await api().getMemberSkillScoreById(id);
  const skillScore = skillScoreResponse.data;

  return {
    props: {
      member,
      skillScore,
    },
    revalidate: 60,
  };
};

export default Profile;
