// index page js 
$(document).ready(() => {

    // bottom nav tabs 
    $('#myTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    // vendor dropdown 
    $('.dropdown-toggle.vendor-dropdown').dropdown()

    //inventory modal 
    $('body').on('click', '#add-inventory', () => {
        $('#inventory-modal').fadeIn()
    })

});