import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/react.svg';

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoal
        title="Lern React +TS">
        <p>Lern it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
