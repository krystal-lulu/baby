/**
 * Created by lanou on 16/12/16.
 */
$(function(){
    $.ajax({
        url:'product.php',
        dataType:"json",
        success:function(json){
            for(var i=0;i<json.length;i++){
                // $('.ProductLis').append(
                //    '<div class="ProductLi">'
                //          + '<img src="img/product0.jpg" width="100%"/>'
                //    +'</div>'
                //    +' <div class="ProductName">3 IN 1 CONVERTIBLE PLAYMAT WIHT LIGHT,MUSIC,INCLUDE 2AA BATTERIES</div>'
                // );
            }
            console.log(json[0])


        }

    })
})