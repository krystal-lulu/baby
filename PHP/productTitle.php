<?php
    include('common.php');
//    $sql1="UPDATE productTitle SET type='cloth' WHERE id='2'";
    $sql1="SELECT * FROM productTitle";
    $result1=mysqli_query($conn,$sql1);
    $result1 =json_encode(mysqli_fetch_all($result1,MYSQLI_ASSOC));
    echo $result1;

?>