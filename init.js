(function() {

    function simulateMouseover() {
        var event = new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
            view: window,
        });
        var myTarget = document.querySelector(".tiktok-jzplnh-DivMoreActions.e1pq4u0v6");
        myTarget.dispatchEvent(event)
        mouseOverBehaviour();

    }

    function mouseOverBehaviour() {
        myElement = document.querySelector(".tiktok-jzplnh-DivMoreActions.e1pq4u0v6");
        setTimeout(document.getElementsByClassName('tiktok-51xc1n-DivActionItem ezky0yn2')[0].click(), 500);
        setTimeout(document.getElementsByClassName('ex1lhrj4 tiktok-10ecx0o-Button-StyledButtonBlock ehk74z00')[0].click(), 500);
        /*  setTimeout(window.open('', '_self').close(), 1500) */

    }
    simulateMouseover()



})();