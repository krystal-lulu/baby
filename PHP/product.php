<?php
    include('common.php');
    $num=$_GET['num'];
    $start=($num-1)*size;
    if($_GET['type']==''){
        $sql1="SELECT * FROM product LIMIT $start".','.size;
    }else{
        $sql1="SELECT * FROM product WHERE type='feed' LIMIT $start".','.size;
    }
    $result1=mysqli_query($conn,$sql1);
    $result1 =json_encode(mysqli_fetch_all($result1,MYSQLI_ASSOC));
    echo $result1;
?>