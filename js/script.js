$(document).ready(function() {
	var main_body_container = $('.main_body_container');
	var main_section = $('.main_section');
	var rest_of_body = $('.rest_of_body')
	var sidebar = $('.sidebar');
	var menuItems = $('.navbar_items');

    main_body_container.css('height', window.innerHeight + 'px');
    //main_section.css('height', (window.innerHeight - 60) + 'px');
    rest_of_body.css('height', (window.innerHeight - 60) + 'px');

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


    $('.main_body_container').scroll(function(event) {
    	global = $('.main_section');
    	if(this.scrollTop > 500) {
    		//alert('HI');
    	}
    });


    mainMenuNavigation();
});


function mainMenuNavigation() {
	var about_menu_entry = $('.about_menu_entry');
	var projects_menu_entry = $('.projects_menu_entry');
	var blog_menu_entry = $('.blog_menu_entry');
	var sayhi_menu_entry = $('.sayhi_menu_entry');

	var about_page = $('.about');
	var projects_page = $('.projects');
	var blog_page = $('.blog');
	var sayhi_page = $('.say-hi');

	about_menu_entry.click(function() {
		about_page.css('left', '0%');
		projects_page.css('left', '100%');
		blog_page.css('left', '200%');
		sayhi_page.css('left', "300%");
	});
	projects_menu_entry.click(function() {
		about_page.css('left', '-100%');
		projects_page.css('left', '0%');
		blog_page.css('left', '100%');
		sayhi_page.css('left', "200%");
	});
	blog_menu_entry.click(function() {
		about_page.css('left', '-200%');
		projects_page.css('left', '-100%');
		blog_page.css('left', '0%');
		sayhi_page.css('left', "100%");
	});
	sayhi_menu_entry.click(function() {
		about_page.css('left', '-300%');
		projects_page.css('left', '-200%');
		blog_page.css('left', '-100%');
		sayhi_page.css('left', "0%");
	});
}


