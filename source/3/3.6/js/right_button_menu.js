function down(){
$(this).children("ul").stop(true,true).slideDown("fast");
}
function up(){
$(this).children("ul").stop(true,true).slideUp("fast");
}
//��ֹ�����IE��safari���Ҽ��˵�����
document.oncontextmenu=function(e){return false;}
//���������
function click(e) {
	var e=e||event;
	if(e.which==3||e.button==2){
		    x=e.clientX;
		    y=e.clientY;
            $("#right_button_menu").css({left:x,top:y,zIndex:1000,display:"none"});
			$("#right_button_menu").slideDown("fast");
			
		}
	else if (e.which==2||e.button==4||e.which==1||e.button==1){
				$("#right_button_menu").slideUp("slow");
				}
				}
document.onmousedown=click;
$(function(){
$(".has_sec_menu").hover(down,up)}
);
