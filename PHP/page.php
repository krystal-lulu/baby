<?php
    include('common.php');
    if($_GET['type']==''){
        $sql='SELECT * FROM product';
        $result=mysqli_query($conn,$sql);
        $row=mysqli_affected_rows($conn);
        $count=ceil($row/size);
        echo '{"page":'.$count.',"all":'.$row.'}';
    }else{
       $type= $_GET['type'];
       $sql="SELECT * FROM product WHERE type='".$type."'";
       $result=mysqli_query($conn,$sql);
       $row=mysqli_affected_rows($conn);
       $count=ceil($row/size);
       echo '{"page":'.$count.',"all":'.$row.'}';
    }
?>