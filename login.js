let instruction_page_path = "instruction.php"

function Login(){
    let email_input = document.getElementById("email").value;
    let psw_input = document.getElementById("psw").value;
    let interactive_email = document.getElementById("interactive_login_email");
    let interactive_password = document.getElementById("interactive_login_password");

    console.log(email_input);
    console.log(psw_input)

    for(let i=0;i <= localStorage.length-1; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
        current_user = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if(current_user["email"]==email_input){
            console.log("email corresponf");
            if (current_user['password'] == psw_input){
                console.log("email and password good, login");
                window.sessionStorage.setItem("Active", email_input)
                window.location.href = instruction_page_path
                return 0 ;
            }else{
                console.log("Paaword not good");
                interactive_password.innerHTML = "Password doesn't match your email";
            }
        }else{
            console.log("email not good");
        }
    }
    interactive_email.innerHTML = "Email not found in our database";
    
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
                    "points": 0,
                    "Time Played": 0,
                    "nb_click": 0,
                    "other": 0,
                };
        localStorage[user_dict.email] = JSON.stringify(user_dict);
        console.log(localStorage)

        window.sessionStorage.setItem("Active", email_input)
                    
        window.location.href = instruction_page_path
    }

};

function promp_add_information(){
    let username = prompt("Not mendatory information, enter username");
    let phone_nb = prompt("Not mandatory, enter your phone number");
    console.log(username);
    console.log(phone_nb);
    return [username,phone_nb]
}

function welcoming_text(){

}