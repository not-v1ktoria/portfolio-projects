const bodyEl = document.querySelector("body");
const emojis = ["https://img.icons8.com/?size=100&id=undefined&format=png&color=000000", "https://img.icons8.com/?size=100&id=undefined&format=png&color=000000","https://img.icons8.com/?size=100&id=undefined&format=png&color=000000" , "https://img.icons8.com/?size=100&id=r3B0yvsHZix4&format=png&color=000000" , "https://img.icons8.com/?size=100&id=HlwD8zZo3kq2&format=png&color=000000" , "https://img.icons8.com/?size=100&id=l3fbqmoBnzBF&format=png&color=000000" , "https://img.icons8.com/?size=100&id=UKWS90W7z4vi&format=png&color=000000" , "https://img.icons8.com/?size=100&id=UKWS90W7z4vi&format=png&color=000000", "https://img.icons8.com/?size=100&id=MSByQtBJfsPv&format=png&color=000000", "https://img.icons8.com/?size=100&id=dKjAZULRJlO7&format=png&color=000000"];

bodyEl.addEventListener('mousemove', (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top= yPos + "px";
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    spanEl.style.backgroundImage=`url(${randomEmoji})`;
    const size = Math.random() * 120;
    spanEl.style.width = size  + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 2000);
})