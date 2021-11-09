$(window).scroll(function(event){
	if($(document).scrollTop()<1){
		$('#nav').removeClass('nav_effect');
        $('#nav').addClass('transparent');
		$('#nav').height(50);
        $("#monrovia-mercadoria-inicial").hide();


    }else if($(document).scrollTop()>200){
        $("#monrovia-mercadoria-inicial").show();
        $(".box-mercadorias").show();

    }else if($(document).scrollTop()>100){
		$('#nav').addClass('nav_effect');
		$('#nav').height(65);
        $('#nav').removeClass('transparent');
	}else{
    }
});


$("#x_fechar_obj").click(function(){
$(".obj_down").hide();
$("#fundo_cinza").hide();

});

function enviar_mensagem(){
	mensagem = $("#enviar-mensagem").val()
	window.open("https://api.whatsapp.com/send?phone=5527995159491&text="+mensagem)
}


$(".whatsicon").click(function(){
	$(".obj_down").show();
	$("#fundo_cinza").show();
});


//auto resize no textearea estilo whatsapp

$(function(){
    var textArea = $('#enviar-mensagem'),
    hiddenDiv = $(document.createElement('div')),
    content = null;
    
    hiddenDiv.addClass('hiddendiv');
    
    $(textArea).after(hiddenDiv);
    
    textArea.on('keyup', function(){
        content = $(this).val();
        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br class="lbr">');
        $(this).css('height', hiddenDiv.height());
    });
});