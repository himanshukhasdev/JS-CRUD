$(document).ready(function(){
  $("#submit").click(function(){
    /*alert("The Form has been Submitted.");*/
    
   
    /*var isChecked = $("#rowId input:checkbox")[0].checked;*/
    var name     = $("#name").val()
    var course   = $("#course").val()
    var mobile   = $("#mobile").val()
    var email    = $("#email").val()
    var box      = $("#box").val()
    var gender   = $("input[type='radio']:checked").val();
    var password = $("#password").val()
    var repass   = $("#repass").val()
    var count    = $('#infotable tbody').find('tr').length

    /*window.localStorage*/
     

        if ($("input[id='#iagree']:checked") == false){

            alert ("congratulations")
        }
                
/*
    if ($("#name").val() == '' || $("#course").val() == '' || $("#mobile").val() == ''|| $("#email").val() == ''||$("input[type='radio']:checked").val() == '' || $("#password").val() == '' || $("#repass").val() == '' ){
        alert("Input fields are not filled");
          return false;
        }

        if($("#mobile").val().length<10){
            alert("Enter valid 10 digit number");
            return false;
        }

        if (IsEmail($("#email").val()) == false){

                return false

            }
        y = $("#email").val()

        function IsEmail(y){

            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regex.test(email)) {
                alert("Please enter valid email");
                return false;
                }else{
                   return true;
                  }
                }

         if ($("#password").val() == null) {
            return false;
        }
         if ($("#repass").val() == null || $("#repass").val() != $("#password").val()) {
            // Changed Password message for testing
            alert("Confirm Password empty or do not match.");
            return false;
        }*/


            $("#infotable tbody").append("<tr id='tidd_"+ count +"'  data-id='"+ count +"' data-name='"+ name +"' data-course='"+ course +"' data-mobile='"+ mobile +"' data-email='"+ email +"' data-gender='"+ gender +"' data-password='"+ password +"' data-repass='"+ repass +"'>\
            <td><input type='checkbox' id='checkboxx1' class='checkBoxClass'></td>\
            <td> "+ count + "</td>\
            <td> "+ $('#name').val() + "</td>\
            <td> "+ $("#course").val()+"</td>\
            <td> "+ $('#email').val() + "</td>\
            <td> "+ $('#mobile').val() + " </td>\
            <td> "+ $("input[type='radio']:checked").val() + " </td>\
            <td> "+ $('#password').val() + " </td>\
            <td> "+ $('#repass').val() + " </td>\
            <td> <button type='button' class='btn btn-success' id='updat' onclick='update.call(this)' >Update</button></td>\
            <td> <button type='button' class='btn btn-danger' onclick='del.call(this)'>Delete</button></td>\
            <td> "+ $('#box').val() + " </td>\
            </tr>") 


          /*  if(typeof(Storage) !== "undefined") {
                if (localStorage.clickcount) {
                    localStorage.clickcount = Number(localStorage.clickcount)+1;
                } else {
                    localStorage.clickcount = 1;
                }
            }*/

  });
});

function resetval() {
    $("#save").hide();
    $("#submit").show();

              $('#name').val('')
              $("#course").val('')
              $('#email').val('')
              $('#box').val('') 
              $('#mobile').val('')
              $('input[name="Gender"]').prop('checked', false);
              $('#password').val('')
              $('#repass').val('') 

              if(typeof(Storage) !== "undefined") {
                if (localStorage.clickcount) {
                    localStorage.clickcount = Number(localStorage.clickcount)+1;
                } else {
                    localStorage.clickcount = 1;
                }
            }
            };

function update(){

	$('#myModal').modal('show');
    $("#submit").hide();
    $("#save").show();
    var abc = this.parentElement.parentElement.id
    console.log(abc)

    selectrow    = this.parentElement.parentElement.dataset
    var id       = selectrow.id
    $('#myModal').attr('data-id', id)

    
    $("#name").val(this.parentElement.parentElement.children[2].textContent)  
    $("#course").val(this.parentElement.parentElement.children[3].textContent.trim())
    $("#email").val(this.parentElement.parentElement.children[4].textContent)
    $("#mobile").val(this.parentElement.parentElement.children[5].textContent.trim())
    $('input:radio[name="Gender"][value="'+this.parentElement.parentElement.children[6].textContent+'"]').prop('checked', true)
    $("#password").val(this.parentElement.parentElement.children[7].textContent.trim())
    $("#repass").val(this.parentElement.parentElement.children[8].textContent.trim())
    $("#box").val(abc)

}

function del(){
    alert("The record has been deleted.")
	$(this).parents('tr').remove();
}


$(document).ready(function(){
  $("#save").click(function(){ 
     event.preventDefault();
    if ($("#name").val() == '' || $("#course").val() == '' || $("#mobile").val() == ''|| $("#email").val() == ''||$("input[type='radio']:checked").val() == '' || $("#password").val() == '' || $("#repass").val() == '' ){
        alert("Input fields are not filled");
          return false;
        }
    
    if($("#mobile").val().length>10){
            alert("10 digit");
            return false;
        }

        if (IsEmail($("#email").val()) == false){

                return false

            }
x = $('#email').val()
        function IsEmail(x)   {

            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regex.test($("#email").val())) {
                alert("Please enter valid email");
                return false;
                }else{
                   return true;
                  }
                }


         if ($("#password").val() == null) {
            return false;
        }
         if ($("#repass").val() == null || $("#repass").val()  != $("#password").val()) {
            // Changed Password message for testing
            alert("Confirm Password empty or do not match.");
            return false;
        }

    
    var idd = $('#myModal').attr('data-id')
    var box      = $("#box").val()
    
    $("#"+box).children()[2].textContent = $("#name").val()
    $("#"+box).children()[3].textContent = $("#course").val()
    $("#"+box).children()[4].textContent = $("#email").val()
    $("#"+box).children()[5].textContent = $("#mobile").val()
    $("#"+box).children()[6].textContent = $("input[type='radio']:checked").val()
    $("#"+box).children()[7].textContent = $("#password").val()
    $("#"+box).children()[8].textContent = $("#repass").val()

        })
    })


function delselected(){ 

    $("input[type=checkbox]:checked").closest("tr").remove();
    var sel = $('#checkboxx').val();

    $('input:checkbox:checked').parents("tr").remove();

    $('.table tbody tr').each(function(i){
        $($(this).find('td')[1]).html(i);
    });
    
    if($('.table tbody tr').length==0){
                $('.table tbody').append('<tr class="empty_result"><td colspan="5" class = "no_data">There is no data !</td></tr>');
            }
}

$(document).ready(function () {
    $("#checkboxx").click(function (){
        $(".checkBoxClass").prop('checked', $(this).prop('checked'));
    });

    $('#name').keydown(function(e) {
        if (e.ctrlKey || e.altKey ) {
            e.preventDefault();
        } else {
            var key = e.keyCode;
        if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
          e.preventDefault();
        }
      }
    });

    $("#mobile").keydown(function(event) {
        // Allow only backspace and delete
        if ( event.keyCode == 127 || event.keyCode == 8) {
            // let it happen, don't do anything
        }
        else if ( event.shiftKey) {
            event.preventDefault();
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.keyCode < 48 || event.keyCode > 57 ) {
                event.preventDefault(); 
            }   
        }
    });

    function mobile()  {

        if  ($('#mobile').val() == "10") {
            return true
        }
        else {
            alert("blah")
            return false

        }
    }
});  

