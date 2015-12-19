/**
 * Created by yingqian on 2015/4/22 0022.
 */
function AddTextNode(x, y, str, scene)
{
    var node = new JTopo.Node(str);
    node.setLocation(x, y);
    node.serializedProperties.push('id');
    node.id = x+y;
    node.fillColor = '255,255,255';
    node.textPosition = 'Middle_Center';
    node.fontColor = '0,0,0';
    node.setSize(120,30);
    node.dragable = false;
    node.showSelected = false;
    node.selected = false;
    scene.add(node);
}

function handler(event, obj){
    $("#linkmenu").hide();
    if(event.button == 2){
        currentNode = obj;
        tmpx = event.pageX + 30;
        tmpy = event.pageY + 30;
        $("#contextmenu").css({
            top:event.pageY,
            left:event.pageX
        }).show();
    }
}

function handlelink(event){
    $("#contextmenu").hide();
    if(event.button == 2){
        $("#linkmenu").css({
            top:event.pageY,
            left:event.pageX
        }).show();
    }
}