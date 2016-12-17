<?php
    include('common.php');
    $type=$_GET['id'];
//    $sql1="UPDATE titleList SET type='cloth' WHERE type='colth' ";
    $sql1="SELECT * FROM titleList WHERE type='".$type."'";
    $result1=mysqli_query($conn,$sql1);
    $result1 =json_encode(mysqli_fetch_all($result1,MYSQLI_ASSOC));
    echo $result1;
?>