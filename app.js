var activeHeroModel;

var heroesModels = [
    {
        imageUrl: "captain-america",
        label: "Captain America",
        clicksCount: 0
    },
    {
        imageUrl: "iron-man",
        label: "Iron Man",
        clicksCount: 0
    },
    {
        imageUrl: "hulk",
        label: "Hulk",
        clicksCount: 0
    },
];

function init() {
    let heroesListElement = document.getElementById("heroesList");
    heroesModels.forEach((h, i) => {
        let imgElem = document.createElement("img");
        imgElem.src = `assets/${h.imageUrl}.png`;
        imgElem.addEventListener("click", () => { selectImage(i) });
        heroesListElement.appendChild(imgElem);
    });
}

function selectImage(index) {
    console.log(index);
    activeHeroModel = heroesModels[index];
    render();
}

function incrementActiveHeroClicks() {
    activeHeroModel.clicksCount++;
    render();
}

function render() {
    document.getElementById("activeImage").src = `assets/${activeHeroModel.imageUrl}.png`;
    document.getElementById("activeImage").alt = activeHeroModel.label;
    document.getElementById("activeImageLabel").innerText = activeHeroModel.label;
    document.getElementById("clickCount").innerText = activeHeroModel.clicksCount;
}

init();