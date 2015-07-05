$(document).ready(function() {
	var main_body_container = $('.main_body_container');
	var sidebar = $('.sidebar');
	var menuItems = $('.navbar_items');

    main_body_container.css('height', window.innerHeight + 'px');
    


    $('.navbar_menu_entry').click(function(event) {

        main_body_container.addClass('push_back');
        sidebar.addClass('sidebar_show');


        menuItems.each(function(index, current) {
            setTimeout(function() {
                menuItems[index].classList.add('navbar_item_reveal');
            }, 500 + (index * 100));
        });
    });

    $('.navbar_menu_back_button').click(function(event) {
        


        menuItems.each(function(index, current) {
            setTimeout(function() {
                menuItems[index].classList.remove('navbar_item_reveal');
            }, 300 + (menuItems.length - index) * 100);
        });

        setTimeout(function() {
            sidebar.removeClass('sidebar_show');
            main_body_container.removeClass('push_back');
        }, 1000);
    });



});
