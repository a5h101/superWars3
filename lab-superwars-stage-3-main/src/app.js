const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    let i=0;
    detailedPlayers=players.map((x)=>{
        i++;
    return {
        name : x,
        image : `images/super-${i}.png`,
        strength : getRandomStrength(),
        type : i%2==1?"hero":"villan"
    }
})
    // Instead of forloop use Map method
    // Code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment=players.map((playerIndex) => {
    return (`<div class="player">
            <img src="${playerIndex.image}" alt="">
            <div class="name">${playerIndex.name}</div>
            <div class="strength">${playerIndex.strength}</div>
            </div>`
            )
    })
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}