game = {}
var nb_click = 0
var autoclick_rate = 0
var inflation_rate = 1.15
game.unit = [
    "Million",
    "Billion"
]
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
  

$(document).ready(function () {

    $("#clicker").click(function () {
        nb_click +=1;
        console.log(nb_click);
        var clickValue = $("#clickValue");
        // clickValue.text(nb_click);
        game.display_number(clickValue,nb_click)

    })

    $(".game_button").click(function (){
        var item_id = $(this).attr("id");
        
        var ammount_element = $(this).children()[0]
        // var ammount_display_element = ammount_element.textContent
        var ammount_value = ammount_element.textContent.split(" : ")[1]

        console.log("ammount ->>"+ammount_value);

        var rate = parseInt($(this).attr("price"))

        var value = parseInt(ammount_value)+1

        var price_display_element = $(this).children()[2]
        var base_price = parseInt($(this).attr("price"))
        var actual_price = Math.ceil(base_price * Math.pow(value,inflation_rate))

       

        if (nb_click >= actual_price){

            console.log("price -> " + actual_price)
            console.log("button click");
            console.log(item_id);

            nb_click = nb_click-actual_price
            ammount_element.textContent = "Number : "+ value.toString()
            price_display_element.textContent = "Price : "+actual_price.toString()
            autoclick_rate = autoclick_rate+ rate
            console.log("update rate --> "+autoclick_rate)

            console.log("new price --> "+ $(this).attr("price"))


        }else{
            console.log("too expensive");
        }
    })
})