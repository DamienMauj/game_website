game = {}
var nb_click = 0
var autoclick_rate = 0
var inflation_rate = 1.15
var life_count = 3
var ennemy_click = false
game.unit = [
    "Million",
    "Billion"
]

game.ennemy_event =  function(){
    let starting_time = new Date()
    let state = $(this).css("visibility","visible");
    console.log("starting time --->" + starting_time.getSeconds());
    let new_time = new Date()
    do{
        new_time = new Date()
        // console.log("new time ->>"+ new_time.getSeconds());
    }
    while((new_time.getSeconds() - starting_time.getSeconds())<3);
    console.log("3 second pass");

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
    // $("#clickValue").text(nb_click);
  }, 1000)
  

ennymey_appearing = setInterval(function () {
    let state = $("#ennemy").css("visibility");
    if (state !="visible"){
        let appear_rate_number = 90
        if (nb_click > 200){
            let random_number =Math.floor(Math.random()*101)
            console.log("random number --> " + random_number);
            if (random_number <=appear_rate_number){
                console.log("event occurre");
            }

        }else{
            console.log("too early for ennemy");
        }
    }
},5000)


$(document).ready(function () {

    $("#clicker").click(function () {
        nb_click +=1;
        console.log(nb_click);
        let clickValue = $("#clickValue");
        // clickValue.text(nb_click);
        game.display_number(clickValue,nb_click)
        game.ennemy_event()

    })

    $(".game_button").click(function (){
        let item_id = $(this).attr("id");
        
        let ammount_element = $(this).children()[0]
        // var ammount_display_element = ammount_element.textContent
        let ammount_value = ammount_element.textContent.split(" : ")[1]

        console.log("ammount ->>"+ammount_value);

        let rate = parseInt($(this).attr("price"))

        let value = parseInt(ammount_value)+1

        let price_display_element = $(this).children()[2]
        let base_price = parseInt($(this).attr("price"))
        let actual_price = Math.ceil(base_price * Math.pow(value,inflation_rate))


       

        if (nb_click >= actual_price){

            console.log("price -> " + actual_price)
            console.log("button click");
            console.log(item_id);

            nb_click = nb_click-actual_price
            game.display_number($("#clickValue"),nb_click)
            ammount_element.textContent = "Number : "+ value.toString()
            price_display_element.textContent = "Price : "+actual_price.toString()
            autoclick_rate = autoclick_rate+ rate
            console.log("update rate --> "+autoclick_rate)

            console.log("new price --> "+ $(this).attr("price"))


        }else{
            console.log("too expensive -->"+actual_price);
        }
    })

    $("#ennemy").click(function (){
        let state = $(this).css("visibility");
        console.log("sate ->> " +state);
        $(this).css("visibility","hidden");
        let state_after = $(this).css("visibility");
        console.log("sate ->> " +state_after);

    })

})