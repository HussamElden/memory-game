import React, { useState, useEffect } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./components/cards";
import Scoreboard from "./components/scoreboard";

function App() {
  const [Score, setScore] = useState(0);
  const [cards, setcard] = useState([
    ["beth.png", "Beth", 0],
    ["Birdperson.png", "Bird Person", 0],
    ["devil.png", "Devil", 0],
    ["evilmorty.jpg", "Evil Morty", 0],
    ["Goldenfold.png", "Mr. Goldenfold", 0],
    ["Morty.png", "Morty", 0],
    ["PrinceNebulon.png", "Prince Nebulon", 0],
    ["Rick.png", "Rick", 0],
    ["ScaryTerry.png", "Scary Terry", 0],
    ["Snuffles.jpg", "Snuffles", 0],
    ["Squanchy.png", "Squanchy", 0],
    ["Summer.jpg", "Summer", 0],
    ["Tammy.jpg", "Tammy", 0],
    ["zeep.jpg", "zeep", 0],
  ]);

  var counter = 0;

  const clicked = ({ target }) => {
    var itemid = target.id;
    console.log(cards[itemid][2] + " item " + itemid);
    if (cards[itemid][2] > 0) {
      fail();
    } else {
      let arrayc = [...cards];
      arrayc[itemid][2] = 1;
      setcard(shuffle(arrayc));
      setScore(Score + 1);
    }
  };
  const fail = () => {
    console.log("failed");
    let arrayc = [...cards];
    arrayc = arrayc.map((x) => {
      let y = x;
      y[2] = 0;
      return y;
    });
    setcard(arrayc);
    setScore(0);
  };

  useEffect(() => {
    counter = 0;

    console.log(cards + " After shuffel");
  }, [cards]);
  return (
    <div>
      <div>
        <Scoreboard Score={Score} />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {cards.map((carda) => (
              <Grid item>
                <Card
                  Simg={"./images/" + carda[0]}
                  Aname={carda[1]}
                  count={counter++}
                  click={clicked}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export default App;
