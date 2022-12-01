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
            <!-- <tr>
                <td>Content 1</td>
                <td>Content 1</td>
            </tr>
            <tr>
                <td>Content 2</td>
                <td>Content 2</td>

            </tr>
            <tr>
                <td>Content 3</td>
                <td>Content 3</td>

            </tr>
            <tr>
                <td>Content 4</td>
                <td>Content 4</td>

            </tr>
            <tr>
                <td>Content 1</td>
                <td>Content 1</td>
            </tr>
            <tr>
                <td>Content 2</td>
                <td>Content 2</td>
            </tr>
            <tr>
                <td>Content 3</td>
                <td>Content 3</td>
            </tr> -->

            <tbody>
        </table>
    </div>

</div>

<!-- Start of the footer and end of HTML -->
<?php
    footer();
?>