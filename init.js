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
    /*     simulateMouseover() */

    function addBlockButton() {
        var btn = document.createElement("input");
        btn.value = "Block";
        btn.id = "search-mm-btn";
        btn.type = "button";
        btn.data = "feed-follow"
        document.querySelector(".tiktok-7l7okx-DivInfoContainer.ec62sd0").appendChild(btn);
        let button = document.getElementById("search-mm-btn");
        button.classList.add("ec62sd6")
        button.classList.add("tiktok-5xuix8-Button-StyledFollowButton")
        button.classList.add("ehk74z00")
        button.style = "margin-left:5px"
        blockAccount()
    }
    document.onkeydown = checkKey;
    let isActive = false;

    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '39') {
            if (!isActive) {
                isActive = true;
                addBlockButton()
            }
        }

    }

    function blockAccount() {
        let user = document.getElementsByClassName("tiktok-1r8gltq-SpanUniqueId ec62sd1")[0].textContent
        let uri = 'https://www.tiktok.com/@' + user;
        window.open(uri, '', 'width=,height=,resizable=no');
        window.focus()
    }








})();