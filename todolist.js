$(function () {
    let lis = $('.tab>li');
    let contentBox = $('.content');
    let flag = true;
    lis.on('click', function () {
        let _this = $(this);
        let type = _this.attr('type');
        let index = _this.index();
        _this.addClass('hot').siblings('li').removeClass('hot');
        contentBox.css({display:'none'}).eq(index).css({display: 'block'});
        filterDate(type,index);
    });
    lis.triggerHandler('click');


    function filterDate(type,index) {
        // if (!flag){
        //     return;
        // }
        // flag = false;
        let xml = new XMLHttpRequest();
        xml.open('get', './todolist.php?type=' + type, true);
        xml.send();
        xml.onreadystatechange = function () {
            if (xml.readyState === 4) {
                if (xml.status === 200) {
                    let data = JSON.parse(xml.response);
                    // flag = true;
                    render(data,index);
                }
            }
        }
    }

    // 渲染
    function render(data,index) {
        let html = '';
        data.forEach(ele => {
            html += `
                 <li> <p>${ele.title}</p> <time>${ele.ctime}</time> </li>       
            `;
        })
        contentBox.eq(index).html(html);
    }
})

