function showpassword()//animation function to switch between password and text input by clicking the ghost.
{
    var x = document.getElementById("passwordfield");
    var y = document.getElementById("passwordfield2");
    if (x.type === "password") {
        x.type = "text";
        y.type = "text";
        $("#ghost").removeClass("bx bxs-ghost");
        $("#ghost").addClass("bx bx-ghost");
        $("#ghost2").removeClass("bx bxs-ghost");
        $("#ghost2").addClass("bx bx-ghost");
    } else {
        x.type = "password";
        y.type = "password";
        $("#ghost").removeClass("bx bx-ghost");
        $("#ghost").addClass("bx bxs-ghost");
        $("#ghost2").removeClass("bx bx-ghost");
        $("#ghost2").addClass("bx bxs-ghost");
    }
}

function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/; //Regex to check if this is a valid Email
    return re.test(email); //checking Email
}

function checkpasswords() //Checking the inputs if they are valid
{
    if ($('#passwordfield').val() == $('#passwordfield2').val() && $('#passwordfield').val() != "" ) {
        $('.passworddiv').css('border-color', 'green');
        if($('#emailfield').val() != '')
        {

            $('#submit').prop('disabled', false);
        }
        else
        {
            $('#submit').prop('disabled', true);

        }
    } else {
        $('.passworddiv').css('border-color', 'red');
        $('#submit').prop('disabled', true);
    }

    if(validateEmail($('#emailfield').val()))
    {
        $('.email').css('border-color','green')
    }
    else
    {
        $('.email').css('border-color','red')
    }
}