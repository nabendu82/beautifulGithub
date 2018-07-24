function letsDoThis(data){
    console.log('Inside CS ', data);
    document.body.style.border=`20px solid ${data.colorCode}`
}

browser.runtime.onMessage.addListener(letsDoThis)

