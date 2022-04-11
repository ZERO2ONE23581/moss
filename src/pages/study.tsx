import { StudyComponents } from 'src/components/StudyMain/Container';
import { StudyBanner } from 'src/components/StudyMain/StudyBanner';

export default function StudyPage() {
  return (
    <>
      <StudyBanner
        logo="./images/StudyLogo.png"
        category="카테고리"
        title="React 스터디"
        des="혼자 코딩하기 싫은 개발자들 모여라! 누구나 자유롭게 모여서 각자 코딩해요"
        hashtag="#개발"
        member={7}
        link="#"
      />
      <StudyComponents />
      {/* <Record />
      <TodoList />
      <Notice /> */}
    </>
  );
}
