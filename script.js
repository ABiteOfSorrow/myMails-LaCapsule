let messageCount = document.getElementsByClassName('listCont').length;
//getElementsByClassName은 배열 요소만 찾을 수 있기 때문에 [0]을 써줘야하고
//getElementsById는 단일 요소만 찾을 수 있다.
document.getElementsByClassName('countNumber')[0].textContent = messageCount;
let countMessage = document.getElementsByClassName('countNumber').textContent;
let trashLength = document.getElementsByClassName('imgPb').length;




for (let i = 0; i<trashLength; i++) {
    document.getElementsByClassName('imgPb')[i].addEventListener("click", function() {
        this.parentNode.remove();
        messageCount = document.getElementsByClassName('listCont').length;
        document.getElementsByClassName('countNumber')[0].textContent = messageCount;
    }
    );
}