document.addEventListener("DOMContentLoaded", () => {
    const again = document.getElementById("again");

    if(again) {
        again.addEventListener("click", () => {
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                if(tabs && tabs[0]) {  // check if tab exist
                    chrome.tabs.sendMessage(tabs[0].id, {message: "runAgain"}, (response) => {
                        if(chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError.message);
                        } else {
                            console.log("Response from content script: \n", response.result);
                        }
                    });
                } else {
                    console.error("No active tabs found");
                }
            });
        });
    } else {
        console.error("Button with ID 'again' not found!!!")
    }
})