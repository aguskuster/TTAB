document.onkeydown = checkKey;


function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '39') {
        if (!document.getElementById('search-mm-btn')) {
            addBlockButton()
        }
    } else if (e.keyCode == '66') {
        blockAccount()
    }

}


function addBlockButton() {
    var btn = document.createElement("input");
    btn.value = "Block";
    btn.id = "search-mm-btn";
    btn.type = "button";
    btn.data = "feed-follow"
    document.querySelector(".tiktok-7l7okx-DivInfoContainer.evv7pft0").appendChild(btn);
    let button = document.getElementById("search-mm-btn");
    button.classList.add("evv7pft6")
    button.classList.add("tiktok-5xuix8-Button-StyledFollowButton")
    button.classList.add("ehk74z00")
    button.style = "margin-left:5px"
    button.addEventListener("click", function(e) {
        blockAccount()
    });
}

function blockAccount() {
    let user = document.querySelector(".tiktok-1r8gltq-SpanUniqueId.evv7pft1").textContent
    let url = 'https://www.tiktok.com/@' + user;
    var userProfileTab = window.open(url, '_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=, height=, visible=none', '');

    userProfileTab.addEventListener('load', function() {
        userProfileTab.blur();
        userProfileTab.simulateMouseover();
    }, true);

}

function simulateMouseover() {
    var event = new MouseEvent('mouseover', {
        bubbles: true,
        cancelable: true,
        view: window,
    });
    var myTarget = document.querySelector(".tiktok-jzplnh-DivMoreActions.ee7zj8d6");
    myTarget.dispatchEvent(event)
    mouseOverBehaviour();

}

function mouseOverBehaviour() {
    document.querySelector('.tiktok-51xc1n-DivActionItem.e1vhy9gd2').click()
    setTimeout(document.querySelector(".e9flc1l5.tiktok-10ecx0o-Button-StyledButtonBlock.ehk74z00").click(), 500);
    setTimeout(function() { window.close(); }, 2000);
}