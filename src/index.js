(function () {
    var checkAll = document.querySelector('.checkAll'), tbody = document.getElementsByTagName('tbody')[0], ckbox = tbody.querySelectorAll('input'), input = tbody.querySelectorAll('input');
    var checkeds = 0;
    var thead = document.getElementsByTagName('thead')[0], trs = tbody.querySelectorAll('tr'), ths = thead.querySelectorAll('th');

    // 程序入口函数
    var init = function () {
        initEvent();
    }

    // 事件入口函数
    var initEvent = function () {
        // 全选按钮
        checkAll.addEventListener('click', OncheckAll);
        // 单选按钮事件绑定
        input.forEach(element => {
            element.addEventListener('click', Oncheckbox);
        });
        // 编号排序
        for (let i = 1; i < ths.length; i++) {
            ths[i].addEventListener('click', Ontheadclick.bind(ths[i], i));
        }
    }

    // 全选按钮
    var OncheckAll = function () {
        var checkAllChecked = this.checked;
        ckbox.forEach(element => {
            element.checked = checkAllChecked;
        });
    };

    // 单选按钮
    var Oncheckbox = function () {
        this.checked ? checkeds++ : checkeds--;
        checkAll.checked = checkeds === input.length;
    }

    // 编号、年龄排序
    var Ontheadclick = function (index, e) {
        var arr = Array.prototype.slice.call(trs).sort(function (a, b) {
            if (index === 2 || index === 4) {
                return a.querySelectorAll('td')[index].innerHTML.localeCompare(b.querySelectorAll('td')[index].innerHTML, 'zh');
            }
            return a.querySelectorAll('td')[index].innerHTML - b.querySelectorAll('td')[index].innerHTML;
        })
        arr.forEach(tr => {
            tbody.appendChild(tr);
        });
    }

    init();
})()