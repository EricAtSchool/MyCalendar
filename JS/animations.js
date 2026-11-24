function makeItSpin(eleID) {
    let ele = document.getElementById(eleID);
    if (ele) {
        if (ele.classList.contains('makeItSpin')) {
            ele.classList.remove('makeItSpin');
            //had to be added so the page can restart the animation.
            setTimeout(() => {
                ele.classList.add('makeItSpin');
            }, (1000));
        }else {
            ele.classList.add('makeItSpin');
        }
        
    }
}