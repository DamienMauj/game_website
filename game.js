game = {}
var nb_click = 0
var human_click = 0
var autoclick_rate = 0
var inflation_rate = 1.30
var life_count = 3


game.unit = [
    "Million",
    "Billion"
]

game.ennemy_event =  function(refresh_speed){
    $("#ennemy").css("visibility","visible");
    let position_ennemy = 450
    $("#ennemy").css("left", position_ennemy.toString()+"px");

    moving = setInterval( function(){
        position_ennemy = position_ennemy -10
        console.log(position_ennemy.toString()+"px");
        $("#ennemy").css("left", position_ennemy.toString()+"px");
        state = $("#ennemy").css("visibility")
        console.log("state -> "+state);
        if (state == "hidden"){
            $("#ennemy").css("left", "450px");
            console.log("ennemy killed");
            clearInterval(moving)
        }else if(position_ennemy == 90){
            console.log("one life down")
            life_count = life_count-1
            $("#ennemy").css("visibility","hidden");
            clearInterval(moving)
        }
    },refresh_speed)

        $("#ennemy").css("left",position_ennemy.toString()+"px");        
        console.log("3 second pass");
    // }

}

game.display_number = function(element, number){
    if (number >= 1e6){
        console.log("Number need to be update");
        let split_num = number.toExponential(5).split("e+");

        //exp to index
        let exp_num = Math.floor((split_num[1]/3)-2);

        // get round exp to format (1e6,1e9,1e12,...)
        let exp = "1e" + (split_num[1]-(split_num[1]-(6+(exp_num*3)))).toString()

        // console.log(exp + " --> "+ (split_num[1]-(6+(exp_num*3))));
        // console.log("convert = "+number/exp+ " unit = "+exp_num);

        element.text(number/exp + " " + game.unit[exp_num]);

    }else{
        element.text(number);
    }
}


autoclick = setInterval(function () {
    nb_click = nb_click + autoclick_rate;
    game.display_number($("#clickValue"),nb_click)
    game.display_number($("#rate_value"),autoclick_rate)
    // $("#clickValue").text(nb_click);
  }, 1000)
  

ennymey_appearing = setInterval(function () {
    let state = $("#ennemy").css("visibility");
    if (state !="visible"){
        let appear_rate_number = 30
        if (nb_click > 200){
            let random_number =Math.floor(Math.random()*101)
            console.log("random number --> " + random_number);
            if (random_number <=appear_rate_number){
                console.log("event occurre");
                game.ennemy_event(100)
            }

        }else{
            console.log("too early for ennemy");
        }
    }
},5000)


$(document).ready(function () {

    $("#clicker").click(function () {
        human_click +=1;
        nb_click +=1;
        let clickValue = $("#clickValue");
        game.display_number(clickValue,nb_click)

    })

    $(".game_button").click(function (){
        human_click +=1
        let item_id = $(this).attr("id");
        
        let ammount_element = $(this).children()[0]
        // var ammount_display_element = ammount_element.textContent
        let ammount_value = ammount_element.textContent.split(" : ")[1]

        
        let rate = parseInt($(this).attr("price"))
        
        let ammount = parseInt(ammount_value)
        console.log("ammount ->>"+ammount);

        let price_display_element = $(this).children()[2]
        let base_price = parseInt($(this).attr("price"))
        // let actual_price = Math.ceil(base_price * Math.pow((ammount),inflation_rate))
        let actual_price
        if (ammount ==0){
            console.log(("first buy"));
            actual_price = base_price
        }else{
            actual_price = Math.ceil(base_price * Math.pow(inflation_rate,ammount))
        }
        console.log(base_price+" * "+inflation_rate+" ^ "+(ammount) + " = "+actual_price);
        console.log("price -> " + actual_price)
       

        if (nb_click >= actual_price){
            nb_click = nb_click-actual_price
           
            ammount = ammount+1
            actual_price = Math.ceil(base_price * Math.pow(inflation_rate,ammount))
            console.log("next price -> " + actual_price)

            game.display_number($("#clickValue"),nb_click)
            ammount_element.textContent = "Number : "+ ammount.toString()
            price_display_element.textContent = "Price : "+actual_price.toString()
            autoclick_rate = autoclick_rate+ rate
            console.log("update rate --> "+autoclick_rate)

        }else{
            console.log("too expensive -->"+actual_price);
        }
    })

    $("#ennemy").click(function (){
        human_click +=1;
        let state = $(this).css("visibility");
        console.log("sate ->> " +state);
        $(this).css("visibility","hidden");
        let state_after = $(this).css("visibility");
        console.log("sate ->> " +state_after);

    })

})