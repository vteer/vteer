$(function(){
    SectionHeadings($('.household'));
    ApplianceList($('.oneli'));
    function SectionHeadings(dom,callback){
        Route.getcategorytitle(function(res){
            var html=template('moneyCtrl2',res);
            dom.html(html);
            //console.log(res);
            $(".product-list").one("click",function(){
                var _this=$(this).parent();
                var titleid=$(this).attr("title");
                $(this).on('click', function(){
                    $(this).siblings().toggleClass("hide");
                })
                ApplianceList(_this,titleid);
            })

        })
    }


    function  ApplianceList(dom,titleid,callback){
        Route.getcategory(titleid,function(res){
            var html=template('moneyCtrl3',res);
            console.log(res);
            dom.append(html);
        })
    }

})
