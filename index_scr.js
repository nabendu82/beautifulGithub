var form = document.querySelector("form");

form.addEventListener("submit", sendColor, false);

function sendColor(tab) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[1];
  };

  browser.tabs.sendMessage(tab.id, {userColor: `${output}`})

  event.preventDefault();
}


  // browser.runtime.sendMessage({
  //   userColor: `${output}`
  // })

