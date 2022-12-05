<!-- Start of the Html page by calling php function  -->
<?php
    include("D:\www\common\PHP\commun.php"); 

    html_start("game");
    header_menu("Damien");

?>

<!-- Start containt of main body -->
<div class="game_page">
    <div id="game_canvas">
        <img src="common\image\Button-PNG-Image-with-Transparent-Background.png" id="clicker" />
        <h1 class="clickNumberDisplay"><span id="clickValue">0</span></h1>
        <h1 class ="clickNumberDisplay"><span id="rate_value">0</span> click/s</h1>

        <img src="common\image\space-invaders-png.png" id="ennemy" />
        <h1 id="end_game_bt">END GAME</h1>
        <div id="heart_container">
            <ul>
                <li><img src="common\image\heart.png" id="life1"></li>
                <li><img src="common\image\heart.png" id="life2"></li>
                <li><img src="common\image\heart.png" id="life3"></li>
            </ul>
        </div>
        <div class="button_container">
            <ul class="button_list">
                <li class="game_button" id="button1" click_by_sec="3" price="10">

                    <p>Number : 0</p>
                    <p class="itemHeadline">buyable 1</p>
                    <p class="itemPrice">Price : 10</p>

                </li>
                <li class="game_button" id="button2" click_by_sec="6" price="100">

                    <p>Number : 0</p>
                    <p class="itemHeadline">buyable 2</p>
                    <p class="itemPrice">Price : 100</p>

                </li>
                <li class="game_button" id="button3" click_by_sec="150" price="500">

                    <p>Number : 0</p>
                    <p class="itemHeadline">buyable 3</p>
                    <p class="itemPrice">Price : 500</p>

                </li>
                <li class="game_button" id="button4" click_by_sec="300" price="7500">

                    <p>Number : 0</p>
                    <p class="itemHeadline">buyable 4</p>
                    <p class="itemPrice">Price : 7500</p>

                </li>
            </ul>
        </div>    
    </div>








    <div class="short_leaderboard">
        <table class="table_element">
            <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
            </tr>
            </thead>
            <tbody id="leaderboard_data">
            <tbody>
        </table>
    </div>

</div>

<!-- Start of the footer and end of HTML -->
<?php
    footer();
?>