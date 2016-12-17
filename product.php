<?php
    include('common.php');
    $num=$_GET['num'];
    $start=($num-1)*12;
    $sql1="SELECT * FROM product LIMIT $start".',12';
    $result1=mysqli_query($conn,$sql1);
    $result1 =json_encode(mysqli_fetch_all($result1,MYSQLI_ASSOC));
    if($_GET['info']=='dataInfo'){
        echo $result1;
    }
?>