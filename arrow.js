
var data =  [{"name":"待接单","status":"WAIT_ACCEPT","isShadowed":true},
    {"name":"待发货","status":"WAIT_DELIVER","isShadowed":true,"isCurrentStatus":true},
    {"name":"验货入库","status":"STOCK_IN"},{"name":"已完成","status":"DELIVERED"}];

var data2 = [{"name":"已终止","status":"WAIT_ACCEPT"}];

function createArrow(classList) {
    var arrow = document.createElement("div");
    arrow.className = classList;
    return arrow
}

var createItem = function(data,index){
    var container = document.createElement("div");
    var content = document.createElement("p");
    content.innerText = data.name ;
    var containerClass = "arrow-item";
    if(data.isCurrentStatus){
        containerClass = "arrow-item active";
    }
    else if(data.isShadowed){
        containerClass = "arrow-item arrow-gray";

    }
    container.className = containerClass;

    content.className = "arrow-content";


    switch (index){
        case 0:
            container.appendChild(createArrow("arrow arrow-right"));
            break;
        case 1:
        case 2:
            container.appendChild(createArrow("arrow arrow-right"));
            container.appendChild(createArrow("arrow arrow-left"));
            break;
        case 3:
            container.appendChild(createArrow("arrow arrow-left"));
            break;
        default:
            break;
    }

    container.appendChild(content);
    return container
};

var createEnd = function(data){
    var item = document.createElement("div");
    item.className = "end";
    item.innerText = data.name;
    return item;
};

function createArrowList(dataList,containerId){
    var container = document.getElementById(containerId);
    if(dataList.length > 1){
        dataList.forEach(function(data,index){
            container.appendChild(createItem(data,index));
        })
    }
    else if(dataList.length === 1 ){
        container.appendChild(createEnd(dataList[0]));
    }
}

createArrowList(data,"arrow-container");
createArrowList(data2,"arrow-container");
