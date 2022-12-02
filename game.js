game = {}
var nb_click = 0
var autoclick_rate = 0
game.increase_click = function(){

}


autoclick = setInterval(function () {
    nb_click = nb_click + autoclick_rate;
    $("#clickValue").text(nb_click);
  }, 1000)
  

$(document).ready(function () {

    $("#clicker").click(function () {
        nb_click +=1;
        console.log(nb_click);
        $("#clickValue").text(nb_click);

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