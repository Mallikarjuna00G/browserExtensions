const article = document.querySelector('article');

// `document.querySelector` may return null if the selector doesn't match anything.
if(article){
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;  // Regular expression
    const word = text.matchAll(wordMatchRegExp);
    // match all returns an iterator, convert to array to get word count
    const wordCount = [...word].length;
    
    const readTimeDiv = document.createElement("div");
    readTimeDiv.id = "readTimeDiv";
    const badge = document.createElement("p");
    
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.innerHTML = `⏱️ <span id="i_readingTime">0</span> min read at <input id="i_readingSpeed" name="wpm" type="number" min="20" max="350" maxlength="3" value="150" style="width: 6ch; height: 1.2em"> wpm`;
    readTimeDiv.appendChild(badge);
    badge.style.fontSize = "0.8em";

    const i_readingTime = readTimeDiv.querySelector("#i_readingTime");
    const i_readingSpeed = readTimeDiv.querySelector("#i_readingSpeed");
    i_readingTime.textContent = Math.round(wordCount / parseInt(i_readingSpeed.value, 10));
    // console.log(i_readingTime.innertext);
    // support for API reference docs
    const heading = article.querySelector("h1");

    heading.insertAdjacentElement("afterend", readTimeDiv);
    
    i_readingSpeed.addEventListener("change", updateReadingTimeData);
    
    function updateReadingTimeData() {
        let a = Math.max(20, Math.min(350, parseInt(i_readingSpeed.value, 10)));  // Keeping in the range
        i_readingSpeed.value = a;
        i_readingTime.textContent = Math.round(wordCount / a);
        // console.log(i_readingSpeed.value);
    }
}
