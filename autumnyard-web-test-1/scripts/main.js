
// # --- Changing h1 text, and adding a button to change it in runtime. Storing it in localStorage
const answerElement = document.querySelector("#answer");
const myButton = document.querySelector("button");

function keyPressed(keyPressed) {
    answerElement.textContent = `Has pulsado la tecla ${keyPressed}`;
}

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        answerElement.textContent = `Hola, ${myName}`;
    }
}

document.onkeydown = e => keyPressed(e.key);
myButton.onclick = setUserName;


const galleryDisplay = {
    viewer: document.querySelector("img"),
    set: function (picturePath) {
        this.viewer.setAttribute("src", picturePath);
    },
};

const galleryData = {
    path: "media/",
    walls: [
        "pai2gooygwa81.jpg",
        "6bgu92i0h4c91.png",
        "vf9a9spimmg81.jpg",
        "yyaulhhjmmg81.jpg"
    ],
    getPicture: function (index) {
        return `${this.path}${this.walls[index]}`;
    },
};

const galleryState = {
    index: 0,
    next: function (maxValue) {
        if (this.index++ >= maxValue - 1)
            this.index = 0;
        return this.index;
    }
};

function toggleNextWallpaper() {
    index = galleryState.next(galleryData.walls.length);
    const picturePath = galleryData.getPicture(index);
    galleryDisplay.set(picturePath);
};

galleryDisplay.viewer.onclick = toggleNextWallpaper;
