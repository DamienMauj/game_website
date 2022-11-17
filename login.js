let instruction_page_path = "instruction.php"

function Login(){
    let username_input = document.getElementById("username").value;
    let psw_input = document.getElementById("psw").value;
    let interactive_username = document.getElementById("interactive_login_username");
    let interactive_password = document.getElementById("interactive_login_password");

    interactive_username.innerHTML = "testetsttest";
    console.log(username_input);
    console.log(psw_input)
};

function Register(){
    let username_input = document.getElementById("username").value;
    let psw_input = document.getElementById("psw").value;
    let interactive_username = document.getElementById("interactive_login_username");
    let interactive_password = document.getElementById("interactive_login_password");
    let form_box = document.getElementById("form")
    // (?=.{8,})        at least 8 characters long
    // ([^A-Za-z0-9])   at least 1 special character
    // (?=.*[0-9])      at least 1 digit
    interactive_password.innerHTML = ""
    console.log(psw_input)
    let strongPassword = RegExp('(?=.{8,})([^A-Za-z0-9])(?=.*[0-9])')
    if (strongPassword.test(psw_input)==false){
        interactive_password.innerHTML = '<span style="color:red">The password is not strong enought</span>';
        form_box.style.background = "#d06d6d"
        setTimeout(1000)
        form_box.style.background = "#f0f0f0"

    }else if (strongPassword.test(psw_input)==true){
        interactive_password.innerHTML = '<span style="color:green">Password strong ennough</span>';
        email_and_phone = promp_add_information()


        // window.location.href = instruction_page_path
    }

};

function promp_add_information(){
    let email = prompt("Not mendatory information, enter email");
    let phone_nb = prompt("Not mandatory, enter your phone number");
    console.log(email);
    console.log(phone_nb);
    return [email,phone_nb]
}