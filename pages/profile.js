import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [{ nickname: '제로' }, { nickname: '나천재' }, { nickname: '노드버드' }];
  const followingList = [{ nickname: '제로' }, { nickname: '나천재' }, { nickname: '노드버드' }];

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  )

}

export default Profile;