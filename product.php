<?php
    $conn=mysqli_connect('127.0.0.1','root','');
    mysqli_select_db($conn,'info');
    mysqli_set_charset($conn,'utf8');
    $sql1='SELECT * FROM product';
    $result=mysqli_query($conn,$sql1);
    $result = json_encode(mysqli_fetch_all($result,MYSQLI_ASSOC));
    echo $result;
?>