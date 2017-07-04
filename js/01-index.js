$(function(){
    navigation($('#menu'));
    Recommend($('.product-list'))
    var $lastFour;
    function navigation(dom,callback){
        Route.getindexmenu(function(res){
            var html=template('moneyCtrl',res);
            console.log(res);
            dom.html(html);
             $lastFour = dom.children('.row').children('.menu-item:nth-last-child(-n+4)');
            console.log(dom)
            $lastFour.addClass('hide');
            console.log($lastFour);
            Show($('.row li:eq(7)'));
        })
    }
    function Show(dom,callback){
        $(dom).on('click',function(){
            $lastFour.toggleClass('hide');
        })
    }

   function Recommend(dom,pageid,callback){
       Route.getmoneyctrl(function(res){
           var html=template('moneyCtrl1',res);
           dom.html(html);
       })
   }


})