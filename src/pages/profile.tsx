import { NextPage } from "next";
import { Detail } from "src/components/app/profile/detail";
import { Layout } from "src/components/shares/Layout";

const Profile: NextPage = () => {
  return (
    <Layout title="Profile | Skillme">
      <Detail />
    </Layout>
  );
};

export default Profile;
