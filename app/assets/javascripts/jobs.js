// Limits cocoon js to only one nested field
$(function(){
 	$("#items a.add_fields")
      .on('cocoon:before-insert', function () {
          check_to_hide_or_show_add_link();
      })
      .on('cocoon:after-insert', function () {
          check_to_hide_or_show_add_link();
      })
      .on("cocoon:before-remove", function () {
          check_to_hide_or_show_add_link();
      })
      .on("cocoon:after-remove", function () {
          check_to_hide_or_show_add_link();
      });

  check_to_hide_or_show_add_link();

	function check_to_hide_or_show_add_link() {
		console.log($('.nested-fields').length);
		if ($('.nested-fields').length == 1) {
			$("a.add_fields").hide();
		} else {
			$("a.add_fields").show();
		}
	} 
});