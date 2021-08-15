import "./App.css";

function App() {
  const imgWidth = 500;

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
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

  // Used like so

  const imgNumbers = [
    "0741",
    "0761",
    "0767",
    "0804",
    "0805",
    "0877",
    "0878",
    "0879",
    "0880",
    "0883",
    "0884",
    "0885",
    "0886",
    "0887",
    "0888",
    "0889",
    "0890",
    "0982",
    "0983",
    "0984",
    "1007",
    "1008",
    "1015",
    "1016",
    "1017",
  ];

  shuffle(imgNumbers);

  let itemList = [];
  imgNumbers.forEach((item, index) => {
    itemList.push(<img src={`/Sunsets/IMG_${item}.jpeg`} key={index} />);
  });

  // const textArray = [
  //   "Hi, my name is Dan",
  //   "I saw these sunsets and liked them",
  //   "I hope you enjoy them too",
  // ];

  // let textList = [];
  // textArray.forEach((item, index) => {
  //   textList.push(<h1 key={index}>{item}</h1>);
  // });

  return (
    <div className="App">
      <h1 id="one">Hi, my name is Dan</h1>
      <h1 id="two">I saw these sunsets and liked them</h1>
      <h1 id="three">I hope you enjoy them too</h1>
      {itemList}
    </div>
  );
}

export default App;
