const Header = ({ course }) => (
  <h1>{course}</h1>
);

const Content = ({ part1, part2, part3 }) => (
  <>
    <Part name={part1.name} exercises={part1.exercises}></Part>
    <Part name={part2.name} exercises={part2.exercises}></Part>
    <Part name={part3.name} exercises={part3.exercises}></Part>
  </>
);

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
);

const Total = ({ total }) => (
  <p>Number of exercises {total}</p>
);

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };
  const total = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header course={course}/>
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total total={total}/>
    </div>
  );
};

export default App;
