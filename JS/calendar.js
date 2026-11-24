//When javascript gets the month, it is a int from 0-11. Use the array below to get the name
const monthconst = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//         <!-- a calendar is a 7 x 6 css grid -->
//         <table id="CalendarTable" class="table table-dark">
//           <caption id="CalendarMonthYear">September 2026</caption>
//           <!-- header (weekday names) -->
//           <thead>
//             <tr>
//               <th>Sun</th>
//               <th>Mon</th>
//               <th>Tue</th>
//               <th>Wed</th>
//               <th>Thur</th>
//               <th>Fri</th>
//               <th>Sat</th>
//             </tr>
//           </thead>
// <!-- The calendar itself, in it's highest esteemed regards 📅👑 -->
//           <tbody>
//             <tr id="row1">
//               <td class="sunday"></td>
//               <td class="monday"></td>
//               <td class="tuesday"></td>
//               <td class="wednesday"></td>
//               <td class="thursday"></td>
//               <td class="friday"></td>
//               <td class="saturday"></td>
//             </tr>


//When the calendar is populated, it will follow the following structure. So sayeth the soo sayer.

//<dl>
//  <dt></dt>
//  
//  
//
//</dl>

//This is the innerHTML of a blank calendar (Need to reload this between calendar loads so that css classes don't get confused (bug was here before, but this squashes it.))
const BlankCalTemplate = `<caption id="CalendarMonthYear"><input type="button" style="float:left;background-color: inherit;border:none;" value="⬅️" onclick="showPreviousMonth();"> <span id="displayYearMonth"></span> <input style="float:right;background-color: inherit;border:none;" type="button" value="➡️" onclick="showNextMonth();"> </caption>
          <!-- header (weekday names) -->
          <thead id="thead">
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thur</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
<!-- The calendar itself, in it's highest esteemed regards 📅👑 -->
          <tbody id="tbody">
            <tr id="row1">
              <td class="sunday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="monday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="tuesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="wednesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="thursday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="friday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="saturday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
            </tr>
            <tr id="row2">
              <td class="sunday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="monday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="tuesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="wednesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="thursday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="friday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="saturday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
            </tr>
            <tr id="row3">
              <td class="sunday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="monday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="tuesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="wednesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="thursday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="friday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="saturday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
            </tr>
            <tr id="row4">
              <td class="sunday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="monday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="tuesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="wednesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="thursday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="friday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="saturday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>  
            </tr>
            <tr id="row5">
              <td class="sunday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="monday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="tuesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="wednesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="thursday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="friday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="saturday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
            </tr>
            <tr id="row6">
              <td class="sunday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="monday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="tuesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="wednesday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="thursday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="friday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
              <td class="saturday">
                <div class="dayNumberBox"></div>
                <input type="button" value="➕" onclick="addNewEvent(this);" />
                <ul class="itemList"></ul>
                <ul class="reminderList"></ul>
              </td>
            </tr>
          </tbody>`





//----------------------------------------page load functionality----------------------------------
//always load current month on first page load
let newDt = new Date();
populateBlankCal(newDt);
//apply the data to the calendar.
ApplyUserDataToCalendar();










//----------------------------------------function definitons----------------------------------
//pass in a date, and a blank calendar template can be rendered. (Places 1 on Tuesday, etc to match the month)
function populateBlankCal(dt) {
    //first of all, clear out any current calendar.
    let calTable = document.getElementById('CalendarTable');
    calTable.innerHTML = BlankCalTemplate;
    //get the first day of the month, so we know where to start the calendar.
    let firstDay = new Date(dt.getFullYear(),parseInt(dt.getMonth()),1);
    //console.log('first day: ' + firstDay)
    //sets the title of the calendar (IE: Februrary 2027)
    populateCalendarCaption(firstDay);
    //sun = 0
    //sat = 6
    let dayOfWeek = firstDay.getDay();
    //console.log('dayOfWeek = ' + dayOfWeek);
    //now, we subtract a number of days from the date so that we can start the grid on the proper date (IE: Sunday the 28th, Sunday the 29th, Sunday the 30th, etc.)
    let startingCalendarDay = new Date(dt.getFullYear(), dt.getMonth(), 1);
    startingCalendarDay.setDate(firstDay.getDate() - dayOfWeek);
    //console.log('startingCalendarDay = ' + startingCalendarDay);
    populateCalendarDayNumbers(startingCalendarDay);
    ApplyPrevAndNextMonthCSS();
}
//populate the calendar display text at the top of the calendar (a.k.a Janruary 2026)
function populateCalendarCaption(firstDayOfMonth) {
        let displayEle = document.getElementById('displayYearMonth');
        displayEle.innerText = monthconst[firstDayOfMonth.getMonth()] + ' ' + firstDayOfMonth.getFullYear();
}
//populates the calendar day number boxes
function populateCalendarDayNumbers(firstDtOfCalendar) {
    let calbody = document.getElementById('tbody');
    if (calbody) {
        //Initialize before looping
        let curDay = firstDtOfCalendar;
        let weekControls = calbody.getElementsByTagName('tr');
        for (i=0; i < weekControls.length; i++) {
            //a week
            let weekDayControls = weekControls[i].getElementsByTagName('td');
            for (x=0; x < weekDayControls.length; x++) {
                //a single day
                individualDayControl = weekDayControls[x];
                let dayNumHolder = individualDayControl.getElementsByClassName('dayNumberBox');
                //put the day number (starts on 1st day)
                //console.log('Setting day: ' + curDay.getDate());
                dayNumHolder[0].innerText = curDay.getDate();
                dayNumHolder[0].id = curDay.getFullYear() + '/' + parseInt(curDay.getMonth()+1) + '/' + curDay.getDate();
                //determine if the next month has been reached

                //add a day for the next cycle.
                curDay.setDate(curDay.getDate() + 1);
                
            }
        }    
    }
}

//creates the effect of previous and next month days on the calendar having a different look.
function ApplyPrevAndNextMonthCSS() {
    let calbody = document.getElementById('tbody');
    if (calbody) {
        //Initialize before looping
        let weekControls = calbody.getElementsByTagName('tr');
        let loopStart = 0;
        let monthStart = 0;
        let isCurMonth = false;
        let isNextMonth = false;
        let isPrevMonth = false;
        for (i=0; i < weekControls.length; i++) {
            //a week
            let weekDayControls = weekControls[i].getElementsByTagName('td');
            for (x=0; x < weekDayControls.length; x++) {
                //a single day
                individualDayControl = weekDayControls[x];
                let dayNumHolder = individualDayControl.getElementsByClassName('dayNumberBox');
                //It's always index 0 because there's only 1 date box (IE: the 27th of the month)
                let curDayNum = parseInt(dayNumHolder[0].innerText);
                //console.log('curDayNum=' + curDayNum);
                //individualDayControl.classList.add('nextMonth') or 'prevMonth' or 'curMonth'; 
                //need to determine if we are just starting, so we can look for the previous month days, if there are any.
                if (loopStart == 0) {
                    //console.log('loop started')
                    if (curDayNum > 7) {
                        //console.log('month starts on prev month')
                        //we are in a previous month, we know this because the first week can only contain the numbers 1-7.
                        isPrevMonth = true;
                        isCurMonth = false;
                        isNextMonth = false;
                    }
                    else {
                        //the month starts on sunday the 1st
                        monthStart = 1;
                        isCurMonth = true;
                        isPrevMonth = false;
                        isNextMonth = false;
                    }
                    loopStart = 1;
                }

                //apply current status before setting class (check prev/cur/next month, etc)
                if (isPrevMonth == true) {
                    if (curDayNum == 1) {
                        //console.log('we have reached the next month?' + curDayNum)
                        //we have reached the next month;
                        isCurMonth = true;
                        isPrevMonth = false;
                        isNextMonth = false;
                        
                    }
                }else if (isCurMonth == true && curDayNum == 1 && monthStart == 0) {
                    isNextMonth = true;
                    isPrevMonth = false;
                    isCurMonth = false;
                    //console.log('isNextMonth');
                } else if (monthStart == 1) {
                    isCurMonth = true;
                    isPrevMonth = false;
                    isNextMonth = false;
                    monthStart = 0;
                }

                

                //only ever add 1 class.
                if (isPrevMonth == true) {
                   individualDayControl.classList.add('prevMonth');
                }else if(isCurMonth == true) {
                    individualDayControl.classList.add('curMonth');
                }else if(isNextMonth == true) {
                    individualDayControl.classList.add('nextMonth');
                }
            }
        }    
    }
}

//When a user changes the cal item type, we hide or show the date time control. (Completed items don't need a time)
function CalItemTypeChanged() {
    let selectEle = document.getElementById('selectCalItemType');
    let hideShowEle = document.getElementById('divReminderTime');
    if (selectEle) {
        if (selectEle.value == 'r') {
            hideShowEle.classList.remove('d-none');
        }else {
            hideShowEle.classList.add('d-none');
        }
    }
}

function createNewCalItem() {

    //add a cookie with the user's data in key/value pairs.)
    let itemTypeEle = document.getElementById('selectCalItemType');
    let reminderTimeEle = document.getElementById('reminderTime');
    let dayItemText = document.getElementById('txtDayItem');
    let HeaderEle = document.getElementById('dateHeading');
    
    let selectedDt = new Date(HeaderEle.innerHTML);
    //console.log('selected Dt: ' + selectedDt);
    let userName = getUserName();
    let reminderText = dayItemText.value;

    let strFormattedDt = getDtFormattedAsStr(selectedDt);
    console.log('strFormattedDt was: ' + strFormattedDt);
    //r is for reminder element (has a time associated with it.)
    if (itemTypeEle.value == 'r') {
        //use the reminderTime ele (username/selectedDt/ReminderTime/reminderText)
        let reminderTime = reminderTimeEle.value;
        let finalStr = userName + '/' + strFormattedDt + '/' + reminderTime + '/' + reminderText;
        //updated to use unique keys (ie: date, etc) (key=)
        CreateCookie(finalStr,'ReminderCalItem');
        //show success message (for reminder type item)
        window.alert('New reminder item added successfully.');
        ApplyUserDataToCalendar();

    } else {
        //do not use the reminder date ele (username/selectedDt/reminderText)
       let finalStr = userName + '/' + strFormattedDt + '/' + reminderText;
       CreateCookie(finalStr,'NonReminderCalItem');
       //show success message (for non reminder item)
       window.alert('New item added successfully.');
       ApplyUserDataToCalendar();
    }

}
//gets the date as a string, adds 1 to the 0 based index so that it makes sense when creating Date(); this way.
function getDtFormattedAsStr(dtToConvert) {
  if (dtToConvert.getMonth() <= 11) {
  return dtToConvert.getFullYear() + '/' + parseInt(dtToConvert.getMonth()+1) + '/' + dtToConvert.getDate();
  }else {
    return dtToConvert.getFullYear() + '/' + parseInt(dtToConvert.getMonth()) + '/' + dtToConvert.getDate();
  }
}

//when a user clicks the + icon, should open the popup modal
//uses (this) parameter
function addNewEvent(btnEle) {
  let chosenDate = new Date(btnEle.parentNode.getElementsByTagName('div')[0].id);
  //apply that date to the modal
  let dtHeadingEle = document.getElementById('dateHeading');
  //updated to use - since javascript recognizes this
  dtHeadingEle.innerHTML = getDtFormattedAsStr(chosenDate);
  //console.log('date was set as: ' + getDtFormattedAsStr(chosenDate));
  //console.log('chosenDate=' + chosenDate);

  //open the modal
  let modalCtn = document.getElementById('popUpContainer');
  modalCtn.classList.remove('d-none');
}

//does what you think.
function closePopup() {
  let ctnEle = document.getElementById('popUpContainer');
  ctnEle.classList.add('d-none');
}


//need to retrieve the users calendar items (date as key & item value as value or datetime as key and item val as value)
function GetCookieValuesForUser(PassedInUserName) {
    results = [];
        // Get all the cookies
        let allCookies = document.cookie.split('; ');
        //console.log('allCookies =' + allCookies);
        for (let i = 0; i < allCookies.length; i++) {
            let CurCookie = allCookies[i];
            //console.log('curCookie=' + CurCookie)
            //should give 3 length array (name, date, value)
          
            let firstSplit = CurCookie.split('%2F');
            //console.log('firstSplit = ' + firstSplit);
            if (firstSplit.length == 5) {
                //console.log('firstSplit length was 5');
                //now, we split on another special character code (%2520)
                let UserNameFromCurCookie = firstSplit[0];
                //now we can check against the param username
                //console.log('passedinusername=' + PassedInUserName);
                //console.log('UserNameFromCurCookie=' + UserNameFromCurCookie);
                if (PassedInUserName == UserNameFromCurCookie) {
                  //FirstLast%2F2026%2F11%2F3%2F09%3A00%2FTake%20trash%20out
                    //we have the correct cookie for the user. add it to the results for that user.
                    //we need to split on the 2nd item in the array. it will look like below (regular item)
                    //firstSplit = 
                    //              FirstLast,2026,12,1,took%20trash%20out=NonReminderCalItem
                    let userName = firstSplit[0];
                    let year = firstSplit[1];
                    let month = firstSplit[2];
                    let day = firstSplit[3];
                    //console.log('day was: ' + day);
                    let itemVal = firstSplit[4];
                    //items in results should be date-val pair, or datetime-val pair so we can use it in the calendar.
                    let userData = [userName + year + '/' + month + '/' + day, itemVal]
                    results.push(userData);
                }
            }else if (firstSplit.length == 6) {
              //reminder items have a time, so they have 6 items instead of 5.
              console.log('This should be a reminder item ' + firstSplit);
              //start by splitting on a comma
              //let getDataSplit = firstSplit.split(',');
              //FirstLast,2026,11,3,09%3A30,test=ReminderCalItem
              let userName = firstSplit[0];
              let year = firstSplit[1];
              let month = firstSplit[2];
              let day = firstSplit[3];
              let timeArr = firstSplit[4].split('%3A');
              let itemVal = firstSplit[5];
              //Time arr will be something like this--->['09', '30']<----(9:30am)
              let hour = timeArr[0];
              let minutes = timeArr[1];
              let FinalDtTime = new Date(year, month, day, hour, minutes);
              //create the username/date combo key and the item value
              let userData = [userName + year + '/' + month + '/' + day + ' ' + hour + ':' + minutes, itemVal]
              //add to results. :)
              results.push(userData);
            }
        }
        //always return results, even if empty
        //console.log('results: ' + results);
        return results;
}
//progress to the next calendar month
function showNextMonth() {
    let curDateDisplayEle = document.getElementById('displayYearMonth');
    //should get us the 1st date of the current month/year combo
    let curCalDate = new Date(curDateDisplayEle.innerHTML);
    let nextCalDate = getNextCalDate(curCalDate);
    populateBlankCal(nextCalDate);
    ApplyUserDataToCalendar();
    //show animation (todo)
}

function showPreviousMonth() {
    let curDateDisplayEle = document.getElementById('displayYearMonth');
    //should get us the 1st date of the current month/year combo
    let curCalDate = new Date(curDateDisplayEle.innerHTML);
    let nextCalDate = getPrevCalDate(curCalDate);
    populateBlankCal(nextCalDate);
    ApplyUserDataToCalendar();
    //show animation (todo)
}

function getNextCalDate(curDt) {
    //progress to the next month
    let result = new Date();
    if (curDt.getMonth() < 11) {
        result = new Date(curDt.getFullYear(), curDt.getMonth()+1,1);
    } else {
        //it is december, move to the next year Janruary
        result = new Date(parseInt(curDt.getFullYear()+1), 0, 1);
    }
    return result;
}

function getPrevCalDate(curDt) {
      //progress to the previous month
    let result = new Date();
    if (curDt.getMonth() > 0) {
        result = new Date(curDt.getFullYear(), curDt.getMonth()-1,1);
    } else {
        //it is Janruary, move to the Previous year December
        result = new Date(parseInt(curDt.getFullYear()-1), 11, 1);
    }
    return result;
}


function ApplyUserDataToCalendar() {
  //                       this will get key/value pairs for the calendar.
  let CalDataForCurUser = GetCookieValuesForUser(getUserName());
  //console.log('calData= ' + CalDataForCurUser);

  for (i = 0; i < CalDataForCurUser.length; i++) {
    let key = CalDataForCurUser[i][0];
    console.log('key= ' + key);
    //need to add handle for this: FirstLast2026/11/3 09:00
    let val = CalDataForCurUser[i][1].split('=')[0];
    console.log('val = ' + val);
    let curDate = new Date(key.split(getUserName())[1]);
    console.log('curDate = ' + curDate);
    //Tue Nov 03 2026 09:30:00 GMT-0600 (Central Standard Time)

    let dateNumBox = document.getElementById(key.split(getUserName())[1]);
    console.log('dateNumBox= ' + dateNumBox);
    if (dateNumBox) {
        //console.log('dateNumBox= ' + dateNumBox);
        let dateCtn = dateNumBox.parentElement;
        if (val.indexOf('%20') != -1) {
            val = decodeURIComponent(val);
            //console.log('val is:' + val);
        }
       //here
       //can grab the list from the ctn
       let regularList = dateCtn.getElementsByClassName('itemList')[0];
       regularList.innerHTML += '<li>'+ val +'</li>'
    }else {
      console.log('Else happened.');
      //this should be for the 6 item array (has a time as well)
      console.log('The full key was: ' + key); //FirstLast2026/11/3 21:59
      let splitKey = key.split(getUserName());
      let dateStr = splitKey[1].split(' ')[0];
      let timeStr = splitKey[1].split(' ')[1];
      console.log('splitKey was: ' + splitKey);
      console.log('dateStr was: ' + dateStr);
      console.log('timeStr was: ' + timeStr);
      //dateStr example: 2026/11/3
      let dateNumBox = document.getElementById(dateStr);
      if(dateNumBox) {
        console.log('box found using datetime logic: ' + dateNumBox);
        //need to get the datetime list, and add to it.
              let dateTimeList = dateNumBox.parentElement.getElementsByClassName('reminderList')[0];
              let dtStr = '';
              //timeStr example: 21:59
              if (parseInt(timeStr.split(':')[0]) > 12) {
                //the time is PM (A.k.a 1pm-12am)
                dtStr = parseInt(timeStr.split(':')[0]-12) + ': ' + timeStr.split(':')[1] + 'PM';
              }else {
                //the time is AM
                dtStr = parseInt(timeStr.split(':')[0]) + ': ' + timeStr.split(':')[1] + 'AM';
              }
              //cleanse the inputs from space special characters
              if (val.indexOf('%20') != -1) {
                val = decodeURIComponent(val);
                //console.log('val is:' + val);
              }
              dateTimeList.innerHTML += '<li data-time= "' + dtStr + '">'+ val +'</li>'
              //the data-time attribute specifies the time
      }
    }
  }
  //loop is done
}




//----------------------------------------Debug (testing, etc)----------------------------------
// DEBUG ONLY
//console.log('Debug mode, diable later.');
//Debug animation
function debugCalendarAnimation() {
    let ele = document.getElementById('CalendarTable');
    if (ele) {
        if (ele.classList.contains('pageLift')) {
            ele.classList.remove('pageLift');
            //had to be added so the page can restart the animation.
            setTimeout(() => {
                ele.classList.add('pageLift');
            }, (1000));
        }else {
            ele.classList.add('pageLift');
        }
        
    }
}

//user can flip pages to get a new month.
//populate calendar based off their cookies.
