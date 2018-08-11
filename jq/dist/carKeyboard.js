(function () {
    let data={
        domObj:null,
        keymap:{
            provience:[
                ['京','津','渝','沪','冀','晋','辽','吉','黑','苏'],
                ['浙','皖','闽','赣','鲁','豫','鄂','湘','粤','琼'],
                ['川','贵','云','陕','甘','青','蒙','桂','宁','新'],
                ['藏','使','领','警','学','港','澳']
            ],
            others:[
                ['1','2','3','4','5','6','7','8','9','0'],
                ['Q','W','E','R','T','Y','U','I','O','P'],
                ['A','S','D','F','G','H','J','K','L'],
                ['Z','X','C','V','B','N','M']
            ]
        },
        img:{// 两张图片，不想用文件，路径不好处理，所以转成base64了
            down:'data:image/png;base64,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',
            delet:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAQEBAQEBAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/2wBDAQEBAQEBAQICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL/wAARCAAiAC0DAREAAhEBAxEB/8QAHQAAAQQCAwAAAAAAAAAAAAAACQMGCAoEBwACBf/EADoQAAEDBAEDAQQGBwkAAAAAAAMBAgQFBgcIEQAJEiETFBUxFhkjM0FRGCIlNDVDVllhkZWXwdPW8P/EABoBAAIDAQEAAAAAAAAAAAAAAAAEAQMFAgb/xAAxEQABAwIDBQYFBQAAAAAAAAABAAIDBBESIUEUMWGR4SJCUXGB8BUyM1LRI2KhscH/2gAMAwEAAhEDEQA/ADJiEQ5GiC1Xkcq8NThPRqcuVXL6IiJ6qqqiInqqonr16j+PNedLrFAK297juac55wXRftfSYtayDDlkgZs2ciRgVe2cdhQixqjQ7HmmYSM4sZ3mOVVPEikkMdEp7Fcw0mPnz1L3vws56J6OFjWYn8kzB9pnuBVATZlV7oO0qVMzGmqTIGT7ugwxSX/eJHhhuBGiZ5cojeG8JwnCdRsk2G5kNzojaIQPkXPqj98P7UXa7/Vy8v8AsP8A7/Do2OY99AqYj3Ak5Pan7jdthNWbM7nOy8q7KaN0qhwriyNdNYpMioCb7SMGoUuZXDMINy8IqOAZOP5bk9Og0kze+eHnxRtUP2KTHbd7iV45LouZ8H7vrCt7ZDV+9oFi3hc1JiRYEW/adVWzGUitzqeJjADnsfTpTJL44xikidGk+yE8rxtthqgQQ8NLhldV1FPGSCLgFaA3m3EzxuDmq6O2x2/vilK+GVI1qbU7Fx2yY0e2QDkOhV+w7Zni8XxmBew0adIG9kqbJGWHHcGOKRIbVUSvkkwN9Su4YY4mB7s9R1RRdI9H8P6M4op2Pca0scmvSGCk3pfEsQSV26ay4SNPKkymoi+KL6DG3gYmcDGjWJyrkMDIWi2Z1uqJJHSuuVoTufj3mt2ysY5m0kvGRGnYXuGfdWQ8TjpkKdDytTPAbQQaqwn2soIQtONafyMZ0P5sIyUMDkqqzIBiboc/JWQGK9na5KB1+9+SPk/CVmWTqbhu65e92VCVGzKpjGr0aZLoGDa/DVsGrXM2VKG1tTYqueWmCMgmQmo99W9m6OoiUOrrxgNviPXorhStY67iMI95IxWjVk7C481sx3a+02R5mVM0iPU6ncN0zxgSZHh1ef7/AE63jTAo10v3FpHBbKM1hSJ82IxrER2nxtjGPf8A4lKhzHEkDK3vxVbW4COb3Ke5z4ucznLOOlXx9OV+C1X1XrIeP1328U/vhZfw/ClttLiPYrtebS393CNWKSfJmDMx3BNru0eETscQcsNYqpKvXarBMBjzR3JIkHlR5gmqWDIIRz2nhlKFrUkb6aQvbm07xr7yVMcjJYwx3oeKOPrTszhvbvEFAzdg25G1+0ax4xapS5ThCuax7iYNHzLRvOmNVVjTAKv6r/uZQvCRGe8T0Xp2OVkwuN6XkY6J1jz0UN+6BsTtVh+wMf4s0+xdOujLOxFXqdjxcpKgZlJxJD9mwc2aSmla9EnSREesWZIR0WI0RSeBpCR45aqp8jGWAzcbf3+FMTY3HtHIZoSte7MWwerONsfbUa2ZYrFS3ZxnUqlkK+iSD++QL0PUn+/VKjChTvMbk8VOIjDqRs5pCJL8XvYUKRpJI2hwzcmzUxvdhI7Onu6sFaUZ+vzZ3XbH+ZMo4pn4ZyBXDVGlXPZcx5FA+qUKWkCXcVHjHRDxoM8jXGjRpP2wE5YriMRhX6UUr5mXcM9ySnY1hIBGYVaa41RO5T3OOVROcs4745Xjn9iVX8+so/Wf5haB+kzyVu+oU+BVoE2lVWFHqVLqUcsSfT5g2miy4xm+BAlG9FThUXj5dbBzFtDvWYq5ud9Q9j+2jnqXuF27aQ+8cWXhL8c3axSDvS3bhpymUsocOGxeB8eTyRiiT3mAZVJF9qxz4pM6SF1M/FHu8NU5HI2VuF3oVsr6+qx1bDWt9u/cgFYh+JTBj0mmT4tNqaM9mf4ZMmwmFcxF5RhHNa9WfP167+IE72uy4dVGxt+4c0v9ftj/AJ5/QC3aXnnnmjUheUX588xvx/H/AH6PiH7HcuqBSG3zN4Z9FgG78tFbTiwsddufbWbdCieO2KRcMGJRbUNVi/ug6xLpUJ5gxnEVFM4TfLjleeg13ZsGO5I2QWzc3mvX7cOjeSb6NsXtfulSY9Dy1tTkOm3p9DoDGBDa9HpLZ74sRRNerWfxH2TBteXwjxwI97ieS9FPTF+IutmUT1AFgNAjy9PpRdwiFIc8BxDOEgyIQJmNIIiIiqiPG/lF+SfPqEJjmtG1FKRVti3lVXKqqtFpqqq/mv2fRYKblJfRC0/6Xt3/ACSm/wDH0WCLlZUO07VbIE5ts2+1WvarVbRqciovPzRUH0WCLlPIrGIRWI1qMY1rWNRERrGono1rfwT+7qVC/9k='

        }
    }



    window.carKeyboard={
        init:function (domObj) {
            data.domObj=domObj;
            data.domObj.click(function () {
                carKeyboard.keyboardShow(true)
            })

            //追加dom
            let domStr=`<div class="carKeybdBox" hidden>
                 <div class="carKeybdClose"> <img src="${data.img.down}" class="carKeybdClose"/></div>
                 <div class="carKeybdPro">
                        ${(function () {
                            let ulDom='';
                            data.keymap.provience.forEach(function (ulArrCurr,index1,ulArr) {
                                ulDom+=`<ul>${(function () {
                                    let liDom='';
                                    ulArrCurr.forEach(function (liCurr,index2,liArr) {
                                        if(index1==ulArr.length-1 && index2==liArr.length-1){
                                            liDom+=`<li class="deleteBtn" ><img src="${data.img.delet}"/></li>`;
                                        }else{
                                            liDom+=`<li>${liCurr}</li>`;
                                        }
                                    })
                                    return liDom;
                                })()}</ul>`;
                            })
                            return ulDom;
                        })()}
                </div>
                <div class="carKeybdOther" hidden>
                    ${(function () {
                       let ulDom = '';
                            data.keymap.others.forEach(function (ulArrCurr, index1, ulArr) {
                                ulDom +=`<ul>${(function () {
                                let liDom = '';
                                ulArrCurr.forEach(function (liCurr, index2, liArr) {
                                    if (index1 == ulArr.length - 1 && index2 == liArr.length - 1) {
                                        liDom +=`<li class="deleteBtn" ><img src="${data.img.delet}"/></li>`;
                                    }else{
                                        liDom+=`<li>${liCurr}</li>`;
                                    }
                                })
                                return liDom;
                            })()}</ul>`;
                        })
                        return ulDom;
                    })()}
                </div>
            </div>`
            let body=$('html').append(domStr)
        },
        //键盘显示隐藏
        keyboardShow:function(b){
            if(b){
                // $("#keyboardBox").animate({bottom:'0px'},500);
                $(".carKeybdBox").show()
            }else{
                // $("#keyboardBox").animate({bottom:'-250px'},500);
                $(".carKeybdBox").hide()
            }
        }
    }

    //键盘绑定事件
    $('html').on('click','li',function(){
        var self = $(this);
        var selfTxt=self.html();
        var domObjTxt=data.domObj.val();
        var reg=/^[\u4e00-\u9fa5]+$/;//汉字


        if(self.attr('class')=='deleteBtn'){
            if(domObjTxt.length==0){
                $('.carKeybdPro').show();
                $('.carKeybdOther').hide();
            }
            if(domObjTxt.length>0){
                data.domObj.val(domObjTxt.substring(0,domObjTxt.length-1));
            }
        }else{
            if(domObjTxt.length<7){
                data.domObj.val(domObjTxt+selfTxt)
            }


            if(reg.test(selfTxt)){
                $('.carKeybdPro').hide();
                $('.carKeybdOther').show();

                if( reg.test(domObjTxt)){
                    data.domObj.val(selfTxt)
                }
            }
        }
    })

    //其他绑定事件
    $('html').on('click','.carKeybdClose',function(){
        carKeyboard.keyboardShow(false)
    })





})()