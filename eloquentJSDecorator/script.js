const article = document.querySelector('article');

if(article){
    // Navigation links
    const navs = article.querySelectorAll("nav");
    navs.forEach((nav) => {
        const anchors = nav.querySelectorAll("a");
        anchors.forEach((anchor) => {
            anchor.style.fontSize = "32px";
            anchor.style.color = "#A1B001";
            anchor.style.marginRight = "8px";
        })
        nav.style.height = "32px";
        nav.style.marginTop = "6px";
    })


    // help buttons
    const helps = article.querySelectorAll(".help strong");
    helps.forEach((help) => {
        help.style.fontSize = "32px";
        help.style.color = "#A1B001";
    })

    // Heading 1
    const h1 = article.querySelectorAll("h1");
    h1.forEach((el) => {
        el.style.backgroundColor = "#898989";
        el.style.paddingLeft = "4px";
    })

    // Blockquotes
    const bQuotes = article.querySelectorAll("blockquote");
    bQuotes.forEach((bQuote) => {
        bQuote.style.border = "2px solid #898989";
        bQuote.style.borderLeft = "16px solid orange";
        bQuote.style.paddingRight = "10px";
    })

    function forHeaders(el) {
        el.style.backgroundColor = "#B9B9B9";
        el.style.paddingLeft = "4px";
    }

    // Heading 2
    const h2 = article.querySelectorAll("h2");
    if(h2) { h2.forEach((el) => forHeaders(el)); }

    // Heading 3
    const h3 = article.querySelectorAll("h3");
    if(h3) { h3.forEach((el) => forHeaders(el)); }

    // Heading 4
    const h4 = article.querySelectorAll("h4");
    if(h4) { h4.forEach((el) => forHeaders(el)); }

    // Heading 5
    const h5 = article.querySelectorAll("h5");
    if(h5) { h5.forEach((el) => forHeaders(el)); }

    // Heading 6
    const h6 = article.querySelectorAll("h6");
    if(h6) { h6.forEach((el) => forHeaders(el)); }

    // code elements
    const codes = article.querySelectorAll("code");
    if(codes) {
        codes.forEach((code) => {
            code.style.paddingLeft = "2px";
            code.style.paddingRight = "2px";
            code.style.backgroundColor = "#a1bebb";
            code.style.borderRadius = "3px";
        })
    }

    // code snippets
    const codeSnippets = article.querySelectorAll(".snippet");
    if(codeSnippets) {
        codeSnippets.forEach((codeSnippet) => {
            codeSnippet.style.border = "2px dashed #a1bebb";
        })
    }
}