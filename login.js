let instruction_page_path = "instruction.php"

function Login(){
    let email_input = document.getElementById("email").value;
    let psw_input = document.getElementById("psw").value;
    let interactive_email = document.getElementById("interactive_login_email");
    let interactive_password = document.getElementById("interactive_login_password");

    console.log(email_input);
    console.log(psw_input)

    interactive_password.innerHTML = ""
    interactive_email.innerHTML = ""

    for(let i=0;i <= localStorage.length-1; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
        current_user = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if(current_user["email"]==email_input){
            console.log("email correspond");
            if (current_user['password'] == psw_input){
                console.log("email and password good, login");
                window.sessionStorage.setItem("Active", email_input)
                window.location.href = instruction_page_path
                return 0 ;
            }else{
                console.log("Password not good");
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
    let email_already_exist = false
    // (?=.{6,})        at least 6 characters long
    // ([^A-Za-z0-9])   at least 1 special character
    // (?=.*[0-9])      at least 1 digit
    interactive_password.innerHTML = ""
    console.log(psw_input)
    let strongPassword = RegExp('(?=.{6,})(?=.*[0-9])([^A-Za-z0-9])')

    for(let i=0;i <= localStorage.length-1; i++){
        current_user = JSON.parse(localStorage.getItem(localStorage.key(i)))
        if (current_user["email"] == email_input){
            console.log("email already exist");
            email_already_exist = true
        }
    }

    if(email_already_exist == false ){
        if(psw_input != ""){
            if (strongPassword.test(psw_input)==false){
                interactive_password.innerHTML = '<span style="color:red">The password is not strong enought</span>';
                form_box.style.background = "#d06d6d"


            }else if (strongPassword.test(psw_input)==true){
                interactive_password.innerHTML = '<span style="color:green">Password strong ennough</span>';
                username_and_phone = promp_add_information()
                
                user_dict = {"email": email_input,
                            "password": psw_input,
                            "username": username_and_phone[0],
                            "phone_nb": username_and_phone[1],
                            "points(click)": 0,
                            "user_click": 0,
                            "autoclick_rate": 0,
                            "total_bonus": 0,
                        };
                localStorage[user_dict.email] = JSON.stringify(user_dict);
                console.log(localStorage)

                window.sessionStorage.setItem("Active", email_input)
                            
                window.location.href = instruction_page_path
            }
        }else{
            console.log("email can't be empty")
            interactive_email.innerHTML = "Email can't be empty"
        }
    }else{
        console.log("no action because email already exist");
        interactive_email.innerHTML = "Email already exists"
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
    active_player_email = window.sessionStorage.getItem("Active");
    active_player = active_player_email.split("@")
    let interactive_welcom = document.getElementById("Welcome");
    interactive_welcom.innerHTML = active_player[0];
}

function sort(array){
    array.sort(function(a, b){return b["points(click)"]-a["points(click)"]});
    console.log(array);
}

function leaderboard_fill(Leaderboard_size){
    let nl = document.querySelector("#leaderboard_data");
    let leaderboard_array = []
    let max_number =7;

    
    for(let i=0;i <= localStorage.length-1; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
        current_user = JSON.parse(localStorage.getItem(localStorage.key(i)))
        leaderboard_array.push(current_user);  
    }
    sort(leaderboard_array);
    
    if (Leaderboard_size == 1){
        var data_index = ["email","points(click)","user_click","autoclick_rate", "total_bonus"];
    }
    else if (Leaderboard_size == 0){
        var data_index = ["email","points(click)"];
        console.log("lengh : "+ leaderboard_array.length)
        
        //condition to not get to uch data on the small game leaderboard
        if (leaderboard_array.length > max_number){
            console.log("warning reduce lead")
            leaderboard_array = leaderboard_array.slice(0,max_number)
        }
    }


    for(let i=0; i<= leaderboard_array.length-1; i++){
        let current_dict = leaderboard_array[i];
        console.log(current_dict)
        var tr = nl.insertRow(i);

        for(let x=0; x<=data_index.length-1; x++){
            var cell = tr.insertCell(x);
            cell.innerHTML = current_dict[data_index[x]];

        nl.appendChild(tr);}
    }
    
}

function game_test(){
    let canvas = document.getElementById("game_canvas");
    canvas.onclick = display_image;

}
