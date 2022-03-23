let messageCount = document.getElementsByClassName('listCont').length;
document.getElementById('countNumber').textContent = messageCount;

let countMessage = document.getElementById('countNumber').textContent;
let trashLength = document.getElementsByClassName('imgPb').length;




for (let i = 0; i<trashLength; i++) {
    document.getElementsByClassName('imgPb')[i].addEventListener("click", function() {
        this.parentNode.remove();
        messageCount = document.getElementsByClassName('listCont').length;
        document.getElementById('countNumber').textContent = messageCount;
    }
    );
}