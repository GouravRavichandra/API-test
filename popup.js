let scraper = document.getElementById('Scrape');
scraper.addEventListener("click",async () => {
    let[tab] = await chrome.tabs.query({
        active:true,
        currentWindow: true
    });

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeFromPage,
    });
})

function scrapeFromPage(){
        const apiUrl = "https://icanhazdadjoke.com/";
        const headers = {
            Accept: "application/json",
        };
    
        fetch(apiUrl, { headers })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch a dad joke.");
                }
            })
            .then((data) => {
                alert(data.joke);
            })
            .catch((error) => {
                alert(error.message);
            });
        }