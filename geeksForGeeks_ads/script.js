document.addEventListener("DOMContentLoaded", () => {
    gfg();
});

function gfg() {
    console.log("In gfg() function.");
    const leftBar = document.querySelector(".leftBar");
    const rightBar = document.querySelector(".rightBar");
    
    const bottomAd = document.querySelector("#GFG_AD_Desktop_Stickyunit_1x1");
    if(rightBar) {
        // console.log("Left Bar detected");
        rightBar.style.display = "none";
        rightBar.parentNode.removeChild(rightBar);
        rightBar.style.border = "2px solid red";
        if(leftBar) {
            // console.log("Right bar detected.")
            leftBar.style.flexBasis = "100%";
            leftBar.style.maxWidth = "100%";
            leftBar.style.border = "2px solid blue";
        }
    }
    
    if(bottomAd) {
        // console.log("Bottom ad bar detected.")
        bottomAd.style.display = "none";
        bottomAd.parentNode.removeChild(bottomAd);
    }
}

gfg();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.message === "runAgain") {  // match the message from popup.js
        console.log("Message 'runAgain' is received in content script");
        const result = gfg();
        sendResponse({result: result});  // Send the result back.
    }
});