const generatebtn=document.querySelector(".btn");
const img=document.querySelector("img");
const memetitle=document.querySelector("H3");
const memeauthor=document.querySelector("p");

const updateDetails=(url,title,author)=>{
    img.setAttribute("src",url);
    memetitle.innerHtml=`title`;
    memeauthor.innerHTML=`Meme by: ${author}`;

};

const generatemems=()=>{
        fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>response.json())
        .then((data)=>{
            updateDetails(data.url,data.title,data.author);
        })
};
generatemems();
generatebtn.addEventListener("click",generatemems);