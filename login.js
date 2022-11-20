let instruction_page_path = "instruction.php"

function Login(){
    let email_input = document.getElementById("email").value;
    let psw_input = document.getElementById("psw").value;
    let interactive_email = document.getElementById("interactive_login_email");
    let interactive_password = document.getElementById("interactive_login_password");

    interactive_email.innerHTML = "testetsttest";
    console.log(email_input);
    console.log(psw_input)

    for(var i in localStorage){
        console.log(localStorage[i]);
        // current_user = JSON.parse(localStorage[i])
        // console.log(current_user["email"])
    }
};

function Register(){
    let email_input = document.getElementById("email").value;
    let psw_input = document.getElementById("psw").value;
    let interactive_email = document.getElementById("interactive_login_email");
    let interactive_password = document.getElementById("interactive_login_password");
    let form_box = document.getElementById("form")
    // (?=.{6,})        at least 6 characters long
    // ([^A-Za-z0-9])   at least 1 special character
    // (?=.*[0-9])      at least 1 digit
    interactive_password.innerHTML = ""
    console.log(psw_input)
    let strongPassword = RegExp('(?=.{6,})(?=.*[0-9])([^A-Za-z0-9])')
    if (strongPassword.test(psw_input)==false){
        interactive_password.innerHTML = '<span style="color:red">The password is not strong enought</span>';
        form_box.style.background = "#d06d6d"
        setTimeout(1000)
        form_box.style.background = "#f0f0f0"

    }else if (strongPassword.test(psw_input)==true){
        interactive_password.innerHTML = '<span style="color:green">Password strong ennough</span>';
        username_and_phone = promp_add_information()
        
        user_dict = {"email": email_input,
                    "password": psw_input,
                    "username": username_and_phone[0],
                    "phone_nb": username_and_phone[1],
                    "status": "Active"};
        localStorage[user_dict.email] = JSON.stringify(user_dict);
        console.log(localStorage)
                    
        // window.location.href = instruction_page_path
    }

};

function promp_add_information(){
    let username = prompt("Not mendatory information, enter username");
    let phone_nb = prompt("Not mandatory, enter your phone number");
    console.log(username);
    console.log(phone_nb);
    return [username,phone_nb]
}