// Message counter function 

let messageCount = $('.listCont').length;
//getElementsByClassName은 배열 요소만 찾을 수 있기 때문에 [0]을 써줘야하고
//getElementsById는 단일 요소만 찾을 수 있다.
$('#countNumber').text(messageCount);
let countMessage = $('#countNumber').text();
let trashLength = $('.imgPb').length;


// Message delete function : trash button

$('.imgPb').click(function () {
    $(this).parent().remove();
    messageCount = $('.listCont').length;
    $('#countNumber').text(messageCount);
});

// Add message function : add button

let randomNumber = Math.floor(Math.random() * 5) + 1;
let defaultName = ["Toldi Raldi", "Ali Bali", "Holy Moly", "Dolly Dilly", "Gully Golly", "Coin Cuin"];


$('#addBtn').click(function () {
    if ($('#newMessageTxt').val().length > 0) {
        $('#mailList').append(`
        <div class="listCont">
                <img class="imgAvt" src="assets/avatar-${(Math.floor(Math.random() * 5) + 1)}.jpg">
                <div>
                    <h6>${defaultName[Math.floor(Math.random() * 5) + 1]}</h6>
                    <P>${$('#newMessageTxt').val()}</P>
                </div>
                <img class="imgPb" src="assets/trash.png">
        </div>`);

        // Add delete and recount(after delete) function
        $('.imgPb').click(function () {
            $(this).parent().remove();
            messageCount = $('.listCont').length;
            $('#countNumber').text(messageCount);
        });

        // Return default value for input
        $('#newMessageTxt').val(null);

        // Add counter after add new message
        messageCount = $('.listCont').length;
        $('#countNumber').text(messageCount);
    }
})

// Add message search function
$('#searchBtn').click(function () {
    if ($('#findMessage').val().length > 0) {
        $('h6').each(function () {
            if ($('#findMessage').val() != $(this).text()) {
                $(this).parent().parent().fadeOut();
            } else {
                $(this).parent().parent().show();
            } 
        });

        $('#findMessage').val(null);
    }

});
