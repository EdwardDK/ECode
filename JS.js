



// let number = Math.random()
// alert("To show that you are not a bot copy the number you are going to be shown and then please, paste it in. ")
// alert(number)
// let answer = prompt("What is the number that you copied? ")
// if (answer == number) alert("Correct you have proven you are not a bot ")
// else {
//     alert("Please try again ");
//     location.reload();
// }

$(document).ready(function () {

    $('.menu').click(function() {
        $('.overlay').toggleClass('anim');
        $(this).addClass('open')
    });

    $('.open').click(function(){
        $('.overlay').toggleClass('reverse-animation');
    })
});