<?php
    include('common.php');
    $num=isset($_GET['num'])?$_GET['num']:1;
    $type=isset($_GET['type'])?$_GET['type']:'';
    $start=($num-1)*size;
    if($_GET['type']==''){
        $sql1="SELECT * FROM product LIMIT $start".','.size;
    }else{
        $sql1="SELECT * FROM product WHERE type='".$type."'LIMIT $start".','.size;
    }
    $result1=mysqli_query($conn,$sql1);
    $result1 =json_encode(mysqli_fetch_all($result1,MYSQLI_ASSOC));
    echo $result1;
?>