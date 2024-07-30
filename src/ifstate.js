import React from 'react';

 function MissedGoal() {
	return <h1>MISSED GOAL!</h1>;
}

 function MadeGoal() {
	return <h1>GOAL!</h1>;
}

export default function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal isGoal={false} />);

              