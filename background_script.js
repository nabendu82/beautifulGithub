function handleFormSelection(data){
  browser.notifications.create({
      "type": "basic",
      "iconUrl": browser.extension.getURL('icons/logo_64.png'),
      "title": "Updated Color Page",
      "message": data.userColor.toUpperCase()
  })
  console.log(data.userColor);
}

browser.runtime.onMessage.addListener(handleFormSelection);

browser.browserAction.onClicked.addListener(sendData)

function sendData(tab){
    browser.tabs.sendMessage(tab.id, {data:'dummyData'})
}
