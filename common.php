<?php
    $conn=mysqli_connect('127.0.0.1','root','');
    mysqli_select_db($conn,'info');
    mysqli_set_charset($conn,'utf8');
    define("size", "12");
?>