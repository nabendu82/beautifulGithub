
function listenForClicks() {
  document.addEventListener("click", (event) => {

      function colorify(tabs) {
        let result = event.target.textContent;
        console.log('result is ', result);

        browser.tabs.sendMessage(tabs[0].id, {
          command: "colorify",
          colorCode: result
        });

      }

      function reportError(error) {
        console.error(`Could not colorify: ${error}`);
      }

      if (event.target.classList.contains("beast")) {
        console.error(`Inside classList.contains:`);

        browser.tabs.query({active: true, currentWindow: true})
        .then(colorify)
        .catch(reportError);
      }
  });
}




function reportExecuteScriptError(error) {
  console.error(`Failed to execute colorify content script: ${error.message}`);
}

browser.tabs.executeScript({file: "cs.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);

