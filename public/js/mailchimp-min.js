!function(s){"use strict";s("#signup").validate({rules:{subscriber_email:{required:!0,email:!0}},messages:{subscriber_email:{required:"Email must be filled out.",email:"Your email must be valid."}},submitHandler:function(){var e="php/subscribe.php?action=subscribe&subscriber_email="+s("#subscriber_email").val();s("#subscribe_message").css("color","white"),s("#subscribe_message").css("margin-top","20px"),s("#subscribe_message").html("Please Wait..."),s.ajax({type:"POST",url:e,dataType:"json",success:function(e){return s("#subscribe_message").html(e.message),!1}})}})}(jQuery);