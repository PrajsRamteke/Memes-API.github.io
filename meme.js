const meme = document.getElementById("demo-meme");
const title = document.getElementById("title");
const btn = document.getElementById("btn");

//API URl
const apiURL = "https://meme-api.herokuapp.com/gimme/";
//Array of subreddits of your choise
let subreddits =["catmemes","wholesomemems","dogmemes","me_irl"];

let getMeme=()=>{
    let randomSubreddits = subreddits[Math.floor(Math.random()*subreddits.length)];
    // console.log(randomSubreddits);
    fetch(apiURL + randomSubreddits)
    .then((data)=>data.json())
    .then((result)=>{
        // console.log(result);
        let memeImg = new Image();
        //display img
        memeImg.onload =()=>{
            meme.src = result.url;
            title.innerHTML = result.title
        };
        memeImg.src = result.url;
    })

}

btn.addEventListener("click",getMeme);
window.addEventListener("load",getMeme);
