alert(`Welcome to my playlist! If you want to listen to the songs, just click on the links :) Hope you like em!`);

const playlist = [
 ['Heart Break Anniversary', 'Giveon', '3:18'],
 ["Heard 'Em Say", 'Kanye West', '3:23'],
 ['Baby, You Make Me Crazy', 'Sam Smith', '3:27'],
 ['Dynamite', 'BTS', '3:43'],
 ['Save Your Tears', 'The Weeknd', '3:35'],
 ['STAY', 'The Kid LAROI & Justin Bieber', '2:21'],
 ['Wrong Places', 'H.E.R.', '3:17'] 
];
  
const links = [
  ["https://youtu.be/nja_0BaQcNg"],
  ["https://youtu.be/elVF7oG0pQs"],
  ["https://youtu.be/m87vQBwgGo8"],
  ["https://youtu.be/gdZLi9oWNZg"],
  ["https://youtu.be/u6lihZAcy4s"],
  ["https://youtu.be/kTJczUoc26U"],
  ["https://youtu.be/_QZ1vzOxicQ"]
];

const buttonTitle = [
  ['Want to listen to Giveon?'],
  ['Want to listen to Kanye West?'],
  ['Want to listen to Sam Smith?'],
  ['Want to listen to BTS?'],
  ['Want to listen to The Weeknd?'],
  ['Want to listen to The Kid Laroi?'],
  ['Want to listen to H.E.R.?']
];
  

//const myArtists = `${playlist[0][1]}, ${playlist[1][1]}, ${playlist[5][1]}`;
//console.log(myArtists);

function createListItems( arr, title, link) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
    items += `<li>${ arr[i][0] }, by ${ arr[i][1] } - ${ arr[i][2] }</li><a href=${link[i]}>${title[i]}</a>`
  }
  return items;
}

document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(playlist, buttonTitle, links)}
  </ol>
`;
