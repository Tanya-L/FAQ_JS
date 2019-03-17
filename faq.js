$(document).ready(function () {
    // code here
    $('.card-header').click(function (eventObject) {
        $(this).next().slideToggle('fast');
        $(this).children('span').toggleClass('hide');
    })
});
