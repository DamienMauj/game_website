<!-- Start of the Html page by calling php function  -->
<?php
    //Include the PHP functions to be used on the page 
    include("D:\www\common\PHP\commun.php"); 

    html_start("leaderboard");
    header_menu("Damien");

?>


<!-- Start content of main body -->
<div class="leaderboard_table">
    <table class="table_element">
        <thead>
        <tr>
            <th>Username</th>
            <th>Points</th>
            <th>Time Played</th>
            <th>Nb clicked</th>
            <th>Other</th>
        </tr>
        </thead>
        <tbody id="leaderboard_data">
        <!-- <tr>
            <td>Username 1</td>
            <td>data 1</td>
            <td>data 1</td>
            <td>data 1</td>
            <td>data 1</td>
        </tr>
        <tr>
            <td>Username 2</td>
            <td>data 2</td>
            <td>data 2</td>
            <td>data 2</td>
            <td>data 2</td>
        </tr>
        <tr>
            <td>Username 3</td>
            <td>data 3</td>
            <td>data 3</td>
            <td>data 3</td>
            <td>data 3</td>
        </tr>
        <tr>
            <td>Username 4</td>
            <td>data 4</td>
            <td>data 4</td>
            <td>data 4</td>
            <td>data 4</td>
        </tr>
        <tr>
            <td>Username 5</td>
            <td>data 5</td>
            <td>data 5</td>
            <td>data 5</td>
            <td>data 5</td>
        </tr>
        <tr>
            <td>Username 6</td>
            <td>data 6</td>
            <td>data 6</td>
            <td>data 6</td>
            <td>data 6</td>
        </tr>
        <tr>
            <td>Username 7</td>
            <td>data 7</td>
            <td>data 7</td>
            <td>data 7</td>
            <td>data 7</td>
        </tr>
        <tr>
            <td>Username 8</td>
            <td>data 8</td>
            <td>data 8</td>
            <td>data 8</td>
            <td>data 8</td>
        </tr>
        <tr>
            <td>Username 9</td>
            <td>data 9</td>
            <td>data 9</td>
            <td>data 9</td>
            <td>data 9</td>
        </tr>
        <tr>
            <td>Username 10</td>
            <td>data 10</td>
            <td>data 10</td>
            <td>data 10</td>
            <td>data 10</td>
        </tr> -->
        <tbody>
    </table>
</div>

<!-- Start of the footer and end of HTML -->
<?php
    footer();
?>