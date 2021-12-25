import React, { useState, useEffect }  from "react";

const Scoreboard = ({Score}) => {
  // const [Score, setScore] = useState(0);
  const [hscore, setHScore] = useState(0);
  useEffect(() => {
      (hscore < Score) ? setHScore(Score) : setHScore(hscore);
    }, [Score]);
//   const incScore = ;
// () => {
//   setScore(Score + 1);
//   (hscore < Score) ? setHScore(Score) : setHScore(hscore);
// }
  return (
    <div>
      <h2>Current score {Score}</h2>
      <h2>Highest Score {hscore}</h2>
    </div>
  );
};
export default Scoreboard;
