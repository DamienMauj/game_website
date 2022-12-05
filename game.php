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
        
        <div class="button_container">
            <ul class="button_list">
                <li class="game_button" id="button1" click_by_sec="1" price="2">

                    <p>Number : 0</p>
                    <p class="itemHeadline">buyable 1</p>
                    <p class="itemPrice">Price : 2</p>

                </li>
                <li class="game_button" id="button2" click_by_sec="5" price="5">

                    <p>Number : 0</p>
                    <p class="itemHeadline">buyable 2</p>
                    <p class="itemPrice">Price : 5</p>

                </li>
                <li class="game_button" id="button3" click_by_sec="5" price="5">

                    <p>Number : 0</p>
                    <p class="itemHeadline">buyable 3</p>
                    <p class="itemPrice">Price : 5</p>

                </li>
                <li class="game_button" id="button4" click_by_sec="5" price="5">

                    <p>Number : 0</p>
                    <p class="itemHeadline">buyable 4</p>
                    <p class="itemPrice">Price : 5</p>

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
<script src="lib/jquery-3.3.1.min.js"></script>
<script async src="game.js" type="text/javascript"></script>
<!-- Start of the footer and end of HTML -->
<?php
    footer();
?>