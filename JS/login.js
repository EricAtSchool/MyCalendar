function setLoginSubmitHandler() {
    let loginform = document.forms[0];
    if (loginform.id == 'loginForm') {
        loginform.addEventListener('submit', function (e) {
            e.preventDefault();
            //only run loginSubmit if the form is valid.
            if (loginForm.checkValidity()) {
                loginSubmit();
                console.log('loginSubmit has ran');
            }
        });
    }
}

//User clicked the login button
function loginSubmit() {
    //did the user login?
    let txtFirstNameValue = document.getElementById('txtFirstName').value;
    let txtLastNameValue = document.getElementById('txtLastName').value;
    let txtPasswordValue = document.getElementById('txtPassword').value;
    LoggedIn = LogIn(txtFirstNameValue + txtLastNameValue, txtPasswordValue);
    //if user logged in, hide this: loginCtn
    if (LoggedIn) {
        //set user logged in cookie to true (1)
        CreateCookie(LoginStatusCookieName,txtFirstNameValue + " " + txtLastNameValue);
        //hide login fields.
        HideLoginFields();
        ShowLoggedInPageStatus();
    }else {
        //show error message.
        let ele = document.getElementById('LoginMsg');
        let funnyEle = document.getElementById('loginMsgFunny');
        if (ele && funnyEle) {
            ShowError(ele, '❌Login error, please try again. ❌');
            let wrongPasswordRNG = Math.floor(Math.random() * 100) +1;
            //only show this easter egg if a random number between 1 and 100 is above 95. that's a 5% chance
            console.log('wrongPasswordRNG val was: ' + wrongPasswordRNG);
            if (funnyEle.innerHTML == '' && wrongPasswordRNG > 95) {
                funnyEle.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RfiQYRn7fBg?si=wbWS4OSDEdEe06P8&amp;autoplay=1&mute=1start=9;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            }
            
        }
    }
}

//returns true if the user logged in successfully. (can only be used on login page)
function LogIn(FirstLast, Password) {
    result = false;
    //If we can't find the  user, always return false on login
    if (document.cookie.indexOf(FirstLast) == -1) {
        result = false;
    } else {
    
        let allCookies = document.cookie.split('; ');
        for (let cookie of allCookies) {
            if (cookie.startsWith(FirstLast + '=')) {
                //username matches
                if (cookie.split('=')[1] == Password) {
                    //console.log('Username and password both match.');
                result = true;
                }
            }
        }
    }

    return result;
}


//Only applicable to login page
function HideLoginFields() {
    let loginCtn = document.getElementById('loginCtn');
    if (loginCtn) {
        if (loginCtn.classList.contains('d-none') == false) {
            loginCtn.classList.add('d-none');
        }
    }
}
//Only applicable to login page
function ShowLoginFields() {
    let loginCtn = document.getElementById('loginCtn');
    if (loginCtn) {
        if (loginCtn.classList.contains('d-none') == true) {
            loginCtn.classList.remove('d-none');
        }
    }
}

//specifically for the login page. (refactored to seperate from the global.js code)
function ShowLoggedOutLoginPageStatus() {
    ShowLoginFields();
 }
//specifically for the login page. (refactored to seperate from the global.js code)
 function ShowLoggedInLoginPageStatus() {
    HideLoginFields();
 }


 //function calls
 setLoginSubmitHandler();