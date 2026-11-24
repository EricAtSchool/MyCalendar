addSubmitListener();

function addSubmitListener() {
    const form = document.getElementById('NewUserForm');

    form.addEventListener('submit', function(event) {
    // 1. Stop the standard browser page reload
    event.preventDefault();
    //2. get the values of the text boxes
    let txtFirstNameValue = document.getElementById('txtFirstName').value;
    let txtLastNameValue = document.getElementById('txtLastName').value;
    let txtPasswordValue = document.getElementById('txtPassword').value;

    //debug
    console.log('txtFirstnameValue = ' + txtFirstNameValue);
    console.log('txtLastNameValue = ' + txtLastNameValue);
    console.log('txtPasswordValue = ' + txtPasswordValue);
    //3. Save to cookies (name is FirstLast, password is the value)
    CreateLoginCookie(txtFirstNameValue + txtLastNameValue,txtPasswordValue);
    });
}

function CreateLoginCookie(name, value) {
    //make sure user doesn't already exist
    if (document.cookie.indexOf(name) !== -1) {
        ShowCreateUserFailure('User exists already');
    } else {
        console.log('User does not exist, creating...');
        const maxAge = 400 * 24 * 60 * 60;
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax;`;
        console.log('cookie = ' + document.cookie);
       //user successfully created
       ShowCreateUserSuccess();
       //hide form and show login link
       
    }
}

//will call global.js function to show message on element ID: newUserMsg
function ShowCreateUserSuccess() {
let msgEle = document.getElementById('newUserMsg');
if (msgEle.classList.contains('Error')) {
    msgEle.classList.remove('Error');
}
ShowMsg(msgEle, 'User Created successfully! ✅ Please login with your credentials using the link below:');
HideForm();
ShowLoginLink();
}
function ShowLoginLink() {
    let ele = document.getElementById('lnkUserCreated');
    if (ele) {
        if (ele.classList.contains('d-none')) {
            ele.classList.remove('d-none');
        }
    }
}


function ShowCreateUserFailure(ErrorMsg) {
    let msgEle = document.getElementById('newUserMsg');
    ShowMsg(msgEle, 'User creation failure. ❌ Error code: ' + ErrorMsg);
    msgEle.classList.add('Error');
}

