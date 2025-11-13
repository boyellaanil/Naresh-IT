import React, { useState } from 'react';
import TaskDisplay from './TaskDisplay.jsx';
import Buttons from './Buttons.jsx';

const App = () => {
  let [dataState, setDataState] = useState(true);

  const tasks = [
    { id: 1, task: "Complete React state practice", completed: true },
    { id: 2, task: "Review JavaScript ES6 concepts", completed: false },
    { id: 3, task: "Read about React props", completed: true },
    { id: 4, task: "Build a simple to-do app", completed: false },
    { id: 5, task: "Practice conditional rendering", completed: true },
    { id: 6, task: "Watch React hooks tutorial", completed: false },
    { id: 7, task: "Fix bugs in personal project", completed: false },
    { id: 8, task: "Refactor component structure", completed: true },
    { id: 9, task: "Add CSS styles to app", completed: false },
    { id: 10, task: "Work on portfolio website", completed: true },
    { id: 11, task: "Learn about useEffect hook", completed: false },
    { id: 12, task: "Implement dark mode feature", completed: true },
    { id: 13, task: "Clean up unused variables", completed: true },
    { id: 14, task: "Update GitHub README file", completed: false },
    { id: 15, task: "Read React documentation", completed: false },
    { id: 16, task: "Try API integration with fetch", completed: true },
    { id: 17, task: "Write code comments", completed: true },
    { id: 18, task: "Create a contact form", completed: false },
    { id: 19, task: "Validate form inputs", completed: false },
    { id: 20, task: "Optimize images in project", completed: true },
  ];

  let completedData = tasks.filter((value) => value.completed === true);
  let inCompleteData = tasks.filter((value) => value.completed === false);

  return (
    <div>
      <Buttons setDataState={setDataState} />
      <article>
        {dataState ? (
          <TaskDisplay data={completedData} />
        ) : (
          <TaskDisplay data={inCompleteData} />
        )}
      </article>
    </div>
  );
};

export default App;
