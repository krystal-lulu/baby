<?php
    include('common.php');
    $sql1='SELECT * FROM product';
    $result=mysqli_query($conn,$sql1);
    $result = json_encode(mysqli_fetch_all($result,MYSQLI_ASSOC));
    echo $result;
?>