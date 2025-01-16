function fcc(){
    const body = document.querySelector("body");

    if(body){
        body.style.fontSize = "12px";
    }

    const descriptionContainer = document.querySelector('.description-container');
    console.log(descriptionContainer);
    if(descriptionContainer){
        descriptionContainer.style.maxWidth = "100%";
        descriptionContainer.style.border = "2px solid red";  // Not working
        descriptionContainer.style.fontSize = "12px";  // Not working

        const paragraphs = descriptionContainer.querySelectorAll("p");
        if(paragraphs) {
            paragraphs.forEach(paragraph => {
                paragraph.style.fontSize = "12px";  // Not working
            })
        }
    }
}

document.addEventListener("DOMContentLoaded",function(){
    fcc();
});


fcc();