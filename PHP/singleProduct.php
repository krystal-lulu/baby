<?php
    include('common.php');
    $type=$_GET['id'];
    $sql1="SELECT * FROM product WHERE type='".$type."'";
    $result1=mysqli_query($conn,$sql1);
    $result1 =json_encode(mysqli_fetch_all($result1,MYSQLI_ASSOC));
    echo $result1;
?>