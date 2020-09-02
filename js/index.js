// index page js 
$(document).ready(() => {

    // bottom nav tabs 
    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    // counter logic 
    $('.count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('.count').val(parseInt($('.count').val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        $('.count').val(parseInt($('.count').val()) - 1);
        if ($('.count').val() == -1) {
            $('.count').val(0);
        }
    });

    //inventory modal 
    $('body').on('click', '#add-inventory', () => {
        $('#inventory-modal').fadeIn()
    })

});