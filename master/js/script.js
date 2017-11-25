 function submitClicked(){
		alert('თქვენი შეტყობინება გაიგზავნა!');
		return false;
	}

	$(document).ready(function() {
	$(".burger-icon").on("click", function(){
		$(this).toggleClass("active");
		$(".navigation").toggleClass("active");
	})
});