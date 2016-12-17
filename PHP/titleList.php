<?php
    include('common.php');
    //    $info=$_GET['productAll'];
    $sql1="INSERT INTO titleList (type) VALUES ('playtime')";
    //    $sql1="UPDATE productTitle SET imgUrl='nav5.png' WHERE id='4'";
//    $sql1="SELECT * FROM productTitle";
    $result1=mysqli_query($conn,$sql1);
//    $result1 =json_encode(mysqli_fetch_all($result1,MYSQLI_ASSOC));
//    echo $result1;
?>