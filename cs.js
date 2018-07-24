function letsDoThis(data){
    console.log('Inside CS ', data);
    switch(data.colorCode) {
        case 'blue': document.body.style["background"]="linear-gradient(135deg, #E0FFFF 0%,#AFEEEE 48%,#40E0D0 100%)";
                    break;
        case 'brown': document.body.style["background"]="linear-gradient(135deg, #FFF8DC 0%,#FFEBCD 48%,#FFE4C4 100%)";
                    break;
        case 'purple': document.body.style["background"]="linear-gradient(135deg, #E6E6FA 0%,#DDA0DD 48%,#EE82EE 100%)";
                        break;
        case 'yellow': document.body.style["background"]="linear-gradient(135deg, #FFFFE0 0%,#FFFACD 48%,#FFFF00 100%)";
                        break;
        default: document.body.style["background"]="white";      

    }
}

browser.runtime.onMessage.addListener(letsDoThis)

