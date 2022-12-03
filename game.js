game = {}
var nb_click = 1e6
var autoclick_rate = 500000
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
        var ammount = $(this).children()[0]
        var rate = parseInt($(this).children()[2].textContent)
        var value = parseInt(ammount.textContent)+1
        
        console.log(rate)
        console.log("button click");
        console.log(item_id);

        ammount.textContent = value.toString()
        autoclick_rate = autoclick_rate+ rate
        console.log("update rate --> "+autoclick_rate)


    })
})