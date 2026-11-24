//the user clicks the button and creates a new messge in the cookies
function postMsg() {
    //get the message from the text element
    let textEle = document.getElementById('msgInput');
    if (textEle) {
        console.log('aw shit here we go again.')
        let userText = textEle.value;
        if (userText != '') {
            let userName = getUserName();
            CreateCookie('MsgPost/' + userName + '/' + new Date().toISOString(), userText);
            window.alert('Message posted');
        }
    }
}

//apply loaded messages to the UI
function loadMsgs() {
    let Msgs = getMsgs();
    //get container element.
    let ctnEle = document.getElementById('divMsgOutput');
    for (i=0;i<Msgs.length;i++) {
        let key = Msgs[i][0];
        let userName = key.split(':')[0];
        let dt = key.split(':')[1];
        let val = Msgs[i][1];
        val = decodeURIComponent(val);
        ctnEle.innerHTML += '<div class="msgItem"><h1 class="titleItem">' + userName + ' (@' + dt +  ')' + '</h1>' + val + ' </div>'
    }
}

//get the messages from the cookie store
function getMsgs() {
    //always return results
    results = [];
    //get all cookies related to the message board.
    let allCookies = document.cookie.split('; ');
    //split the cookie several times to get the proper data.
    for (i=0; i < allCookies.length;i++) {
        let curCookie = allCookies[i];
        //let key = curCookie.split('=')[0];
        //let val = curCookie.split('=')[1];
        //console.log('key= ' + key + 'val= ' + val);
        console.log('curCookie=' + curCookie);
        if (curCookie.indexOf('MsgPost') != -1) {
            let splitCookie = curCookie.split('%2F');
            //console.log('what data do we have?' + splitCookie);
            //[0]MsgPost, [1]FirstLast, [2]2026-11-24T16%3A22%3A11.488Z=Should%20be%201022AM
            let userName = splitCookie[1];
            let dateStr = splitCookie[2].split('=')[0];
            dateStr = cleanseISODt(dateStr);
            
            let val = splitCookie[2].split('=')[1];
            results.push([userName+':'+dateStr,val]);
        }
    }
    //always return results
    return results
}


function cleanseISODt(DtStr) {
//need to turn 2026-11-24T16%3A22%3A11.488Z
//into this: 2026-11-24T17:33:14.779Z
DtStr = DtStr.replaceAll('%3A',':');
return DtStr
}

loadMsgs();