// Message counter function 

let messageCount = document.getElementsByClassName('listCont').length;
//getElementsByClassName은 배열 요소만 찾을 수 있기 때문에 [0]을 써줘야하고
//getElementsById는 단일 요소만 찾을 수 있다.
document.getElementsByClassName('countNumber')[0].textContent = messageCount;
let countMessage = document.getElementsByClassName('countNumber').textContent;
let trashLength = document.getElementsByClassName('imgPb').length;

// Message delete function : trash button
for (let i = 0; i < trashLength; i++) {
    document.getElementsByClassName('imgPb')[i].addEventListener("click", function () {
        this.parentNode.remove();
        messageCount = document.getElementsByClassName('listCont').length;
        document.getElementsByClassName('countNumber')[0].textContent = messageCount;
    });
}

// Add message function : add button
let addBtn = document.getElementById('addBtn');
let mailListBody = document.getElementById('mailList');
let mailContentBody = document.getElementsByClassName('listCont');



addBtn.addEventListener("click", function () {
    let createBody1 = document.createElement('div')
    let createBody2 = document.createElement('div');
    let createName = document.createElement('h6');
    let createPharagraphe = document.createElement('p');
    let createImg1 = document.createElement('img');
    let createImg2 = document.createElement('img');
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    let newMessageTxt = document.getElementById('newMessageTxt').value;
    let defaultName = ["Toldi Raldi", "Ali Bali", "Holy Moly", "Dolly Dilly", "Gully Golly", "Coin Cuin"];


    // Create message body, class = "listCont"
    if (newMessageTxt.length > 0) {
        mailListBody.appendChild(createBody1);
        createBody1.className = "listCont";
        // Add avartar img
        createBody1.appendChild(createImg1);
        createImg1.className = "imgAvt";
        createImg1.setAttribute('src', '/assets/avatar-' + randomNumber + '.jpg');
        // Add name
        createBody1.appendChild(createBody2)
        createBody1.lastElementChild.appendChild(createName);
        createName.innerText = defaultName[randomNumber];
        // Add message text
        createBody1.lastElementChild.appendChild(createPharagraphe);
        createPharagraphe.innerText = newMessageTxt;
        createPharagraphe.className = "mailCont";
        // Add trash image
        createBody1.appendChild(createImg2);
        createImg2.className = "imgPb";
        createImg2.setAttribute('src', '/assets/trash.png');
        // Add delete and recount(after delete) function

        createImg2.addEventListener("click", function () {
            this.parentNode.remove();
            messageCount = document.getElementsByClassName('listCont').length;
            document.getElementsByClassName('countNumber')[0].textContent = messageCount;
        });
        // Return default value for input
        document.getElementById('newMessageTxt').value = null;

        // Add counter after add new message
        messageCount = document.getElementsByClassName('listCont').length;
        document.getElementsByClassName('countNumber')[0].textContent = messageCount;
    }
});