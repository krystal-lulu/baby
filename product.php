<?php
    echo '哈哈';
    $conn=mysql_connect('127.0.0.1','root');
    mysql_select_db('info');
    mysql_query('set names utf8');
    echo  $conn;
    if($conn){
        echo '连接成功';
    }else{
        echo '连接失败';
    }
//    $sql="INSERT INTO produce (age,height) VALUES ('18','180')";
//    $res=mysql_query($sql);
//   $sql="SELECT * FROM produce WHERE id=1";
//    $res=mysql_query($sql);
//    while ($res1=mysql_fetch_assoc($res)) {
//        print_r($res1);
//    }

?>