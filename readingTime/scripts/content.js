const article = document.querySelector('article');

// `document.querySelector` may return null if the selector doesn't match anything.
if(article){
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g;  // Regular expression
    const word = text.matchAll(wordMatchRegExp);
    // match all returns an iterator, convert to array to get word count
    const wordCount = [...word].length;
    const readingSpead = 150;
    const readingTime = Math.round(wordCount / readingSpead);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

    // support for API reference docs
    const heading = article.querySelector("h1");

    heading.insertAdjacentElement("afterend", badge)
}