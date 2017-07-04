/**
 * Created by Administrator on 2017/6/28.
 */
$(function(){


    // 获取分类 id  categoryId
    var categoryId =  Route.getUrlParam("data-catId");
    console.log(categoryId);



    Home($('#haha'),categoryId);
    function Home(dom,categoryid,callback){
            Route.getcategorybyid(categoryid,function(res){
                var html = template('moneyCtrl4',res)
                dom.html(html);
            })
        }







   TvList($('#xixi'),categoryId);
    function TvList(dom,categoryid,pageid,callback){
        Route.getproductlist(categoryid,pageid,function(res){
            var html=template('moneyCtrl5',res);
            console.log( html );
            dom.html(html);
            console.log(res,dom);

        })
    }


   //Skip('.paging',pageid)
   // function Skip(dom,pageid,callback){
   //     Route.getmoneyctrl(pageid,function(res){
   //         var html=template('moneyCtrl6',res);
   //         dom.html(html);
   //     })
   // }

})