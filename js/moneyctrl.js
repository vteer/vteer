$(function() {

    Discount($('.discount-details'), Route.getUrlParam('pageid')||1);
    function Discount(dom, pageid, callback) {
        Route.getmoneyctrl(pageid-1, function (res) {
          res.TotalPages=Math.floor(res.totalCount / res.pagesize);
            console.log(res);
            res.page = [];
            for(i=0;i<res.TotalPages;i++){
                var haha={pageid:i+1,pageCount:res.TotalPages};
                res.page.push(haha);
            }
            console.log(res.TotalPages);
            var html=template('moneyCtrl9',res);
            dom.html(html);
            console.log(res,dom);
            $('.shang').click(function(){
                $('.shang').attr('href','moneyctrl.html?pageid='+(+pageid-1));
                //$('#selectPage').innerText=window.location.href;
            })
            $('.xia').click(function(){
                $('.xia').attr('href','moneyctrl.html?pageid='+(+pageid+1));
            })
            $('#selectPage').on('change',function(e){
                window.location.href="moneyctrl.html?pageid="+$(this).val();
            })
            //$('.shang').attr('href','moneyctrl.html?pageid='+(+pageid-1));
            //$('.xia').attr('href','moneyctrl.html?pageid='+(+pageid+1));

        })


    }
})


