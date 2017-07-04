
$(function(){
    //Merchandise();
    var productid=Route.getUrlParam("productid");
    console.log(productid);
   Merchandise($('.details'),productid);
    function Merchandise(dom,productid,callback){
          Route.getproduct(productid, function(res){
              var html=template('moneyCtrl7',res);
              dom.html(html);
              console.log(res);
          })
      }


    Review($('.CommentInfo'),productid);
    function Review(dom,productid,callback){
        Route.getproductcom(productid,function(res){
            var html=template('moneyCtrl8',res);
            dom.html(html);
            console.log(res);
        })
    }
})