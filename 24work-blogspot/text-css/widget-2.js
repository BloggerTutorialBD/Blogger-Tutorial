$(document).ready(function() {
	$("#w2bForm").validationEngine('attach');
	$("span.colorbox").each(function(){
		$(this).css({backgroundColor:"#" + $(this).siblings("input.inputcolor").val()});	
	});
	$(".inputcolor").ColorPicker({
		onShow: function (colpkr) {
			$(colpkr).fadeIn(200);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(200);
			return false;
		},
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).next("span.colorbox").css("backgroundColor", "#" + hex);
			$(el).ColorPickerHide();
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		}
	}).bind('keyup', function(){
		$(this).ColorPickerSetColor(this.value);
		$(this).next("span.colorbox").css("backgroundColor", "#" + $(this).val());
	});
	$("span.colorbox").ColorPicker({
	      onBeforeShow: function () {
		      $(this).ColorPickerSetColor($(this).siblings("input.inputcolor").val());
	      },
	      onShow: function (colpkr) {
		      $(colpkr).fadeIn(200);
		      return false;
	      },
	      onHide: function (colpkr) {
		      $(colpkr).fadeOut(200);
		      return false;
	      },
	      onSubmit: function(hsb, hex, rgb, el) {
		      $(el).css({'backgroundColor': '#' + hex});
		      $(el).siblings("input.inputcolor").val(hex);
		      $(el).ColorPickerHide();
	      }
	});
});