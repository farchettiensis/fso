const Header = ({ course: { name } }) => (
  <h1>{name}</h1>
);

const Content = ({ course: { parts } }) => {
  const [part1, part2, part3] = parts;

  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises}/>
      <Part name={part2.name} exercises={part2.exercises}/>
      <Part name={part3.name} exercises={part3.exercises}/>
    </div>
  );
};

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
);

const Total = ({ course: { parts } }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>Number of exercises {total}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  };

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
};

export default App;
