const centerArticle = document.querySelector(".center-article");
const btns = document.querySelectorAll(".tab-btn");
const texts = document.querySelectorAll(".content");

centerArticle.addEventListener("click",function(e){
    id = e.target.dataset.id;
    if(id)
    {
        btns.forEach(function(btn){
            btn.classList.remove("active");
            if(btn.dataset.id === id)
                btn.classList.add("active");
        })
        texts.forEach(function(text){
            text.classList.remove("active");
            if(text.id === id)
                text.classList.add("active");
        })
    }
})