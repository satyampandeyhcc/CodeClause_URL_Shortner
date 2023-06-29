

copyButton.onclick = () => {
    newURL.select();

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(newURL.value)
            .then(() => {
               
                console.log("URL copied to clipboard.");
            })
            .catch((error) => {
               
                console.error("Failed to copy URL to clipboard:", error);
            });
    } else {
     
        console.error("Clipboard API not available.");
    }
};
