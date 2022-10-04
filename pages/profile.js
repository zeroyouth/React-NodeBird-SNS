import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import { useSelector } from "react-redux";

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.FollowingList} />
        <FollowList header="팔로워" data={me.FollowerList} />
      </AppLayout>
    </>
  )

}

export default Profile;