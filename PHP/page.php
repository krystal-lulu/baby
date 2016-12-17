<?php
    include('common.php');
    $sql='SELECT * FROM product';
    $result=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    $count=ceil($row/size);
    if($_GET['info']=='page'){
        echo '{"page":'.$count.',"all":'.$row.'}';
    }
?>