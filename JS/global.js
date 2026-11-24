// 🌍🌎Global Javascript!!!🌏🌐 
// Let's reduce repeat code by standardizing error messages, etc.
const LoginStatusCookieName = "LoggedInStatus"
const LoginDisplayEleID = "LoginMsg"

//Pass an display element/error message combo, can show error on any page
function ShowError(DisplayEle, ErrorMsg) {
  if (DisplayEle) {
    DisplayEle.innerText = ErrorMsg;
    DisplayEle.classList.add('Error');
  }
}
//Pass an display element/error message combo, can show message on any page
function ShowMsg(DisplayEle, Message) {
    if (DisplayEle) {
        DisplayEle.innerText = Message;
    }
}

//hides the form tag
function HideForm() {
    let FormEle = document.getElementsByTagName('form');
    if (FormEle[0]) {
        FormEle[0].classList.add('d-none');
    }
}
//shows the form tag
function ShowForm() {
    let FormEle = document.getElementsByTagName('form');
    if (FormEle[0]) {
        if (FormEle[0].classList.contains('d-none')) {
        FormEle[0].classList.remove('d-none');
        }
    }
}

//create a cookie
function CreateCookie(name, value) {
    //make sure user doesn't already exist
    if (document.cookie.indexOf(name) !== -1) {
        //console.log('Cookie exists already.');
    } else {
        //console.log('Cookie does not exist, creating...');
        const maxAge = 400 * 24 * 60 * 60;
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax;`;
    }
}

//get cookie value
function GetCookieValue(name) {
let result = '';
  if (document.cookie.indexOf(name) !== -1) {
        let allCookies = document.cookie.split('; ');
        for (let i = 0; i < allCookies.length; i++) {
            let CurCookie = allCookies[i];
            //console.log('Cookie was: ' + CurCookie);
            if (CurCookie.startsWith(name + "=")) {
                //console.log('Cookie found successfully.')
                result = CurCookie.split('=')[1];
            }
        }
    }
    //console.log('GetCookieValue result: ' + result);
return result;
}

//pass in a value, delete that cookie
function DeleteCookie(CookieName) {
document.cookie = CookieName + "=; max-age=0; path=/;";
}


//add global audio file to any page that is loaded.
function addMainAudio() {
    let ele = document.getElementsByTagName('body');
    let body = ele[0];
    if (body) {
        body.innerHTML = body.innerHTML + `<audio autoplay loop>
        <source src='Audio/MainTheme.mp3' type='audio/mp3' >
        </audio>`;
    }
}


//---Global login status, etc (Called on every page to check login status)
//call on every page
function checkLoginStatus() {
    result = false;
    let LoggedInUserName = GetCookieValue(LoginStatusCookieName);
    
    if (LoggedInUserName !== "") {
       //console.log('Someone is logged in.')
       result = true;
       //show logout button and show calendar link, etc.
       ShowLoggedInPageStatus();
    } else 
    {
        ShowLoggedOutPageStatus();
    }
    return result;
}

function ShowLoggedInPageStatus() {

    let loginLink = document.getElementById("LoginLink");
    let newUserLink = document.getElementById("NewUserLink");
    let logoutBtn = document.getElementById('LogoutBtn');
    //hide login link and new user link. (you are logged in already.)
    loginLink.classList.add('d-none');
    newUserLink.classList.add('d-none');
    //show the logout button when logged in
    logoutBtn.classList.remove('d-none');
    //show welcome message
    ShowLoginMsg();

    //show the calendar and message board links
    let calLink = document.getElementById('MyCalendarLink');
    let msgBoardLink = document.getElementById('MessageBoardLink');
    calLink.classList.remove('d-none');
    msgBoardLink.classList.remove('d-none');
    //debug
    //console.log('ShowLoggedInPageStatus() has finished...');
    
}

function ShowLoggedOutPageStatus() {
    let loginLink = document.getElementById("LoginLink");
    let newUserLink = document.getElementById("NewUserLink");
    let logoutBtn = document.getElementById('LogoutBtn');
    //show the login link and new user link, (you are logged out)
    loginLink.classList.remove('d-none');
    newUserLink.classList.remove('d-none');
    //show logout button when user is logged in
    logoutBtn.classList.add('d-none');
    ClearLoginMsg();
   //hide the calendar and message board links
   let calLink = document.getElementById('MyCalendarLink');
   let msgBoardLink = document.getElementById('MessageBoardLink');
   calLink.classList.add('d-none');
   msgBoardLink.classList.add('d-none');
   //console.log('ShowLoggedOutPage status has ran');

   //The user has logged out, so we redirect them away from pages that require login.
   let curLocation = window.location.href;
   if (curLocation.indexOf('calendar.html') != -1 || curLocation.indexOf('messageboard.html') != -1) {
    window.location.href = 'index.html';
   }

}

function ShowLoginMsg() {
    //console.log('LoginStatusCookieName was: ' + LoginStatusCookieName);
    let LoggedInUserName = GetCookieValue(LoginStatusCookieName);
    if (LoggedInUserName !== "") {
        //console.log('LoggedInUserName = ' + LoggedInUserName);
        LoggedInUserName = LoggedInUserName.split('%20')[0] + " " + LoggedInUserName.split('%20')[1];
        //show welcome message.
        let ele = document.getElementById('LoginMsg');
        if (ele) {
            if (ele.classList.contains('Error')) {
                ele.classList.remove('Error');
            }
            ShowMsg(ele, 'Welcome, ' + LoggedInUserName);
        }
    }
}

//important note: comes out of cookie with %20 splitter, ('First%20Last')
function getUserName() {
    return GetCookieValue(LoginStatusCookieName).replace('%20','');
}

//is global (used by all pages)
function ClearLoginMsg() {
    let ele = document.getElementById('LoginMsg');
    if (ele) {
    ele.innerText = "";
    }
}
//Logout button is always available (Used by all pages)
function logout() {
    DeleteCookie(LoginStatusCookieName);
    checkLoginStatus();
}


//function calls (code that runs globally always after page dom load)
//will always run (Should only call 1 time, so capture value for other logic.)
let UserIsLoggedin = checkLoginStatus();
//calls the main audio, only when user is logged in.
if (UserIsLoggedin == true) {
    addMainAudio();
}
