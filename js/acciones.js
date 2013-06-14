// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('.enviar').tap(function(){
			var formulario=$(this).parents('form');
			var usuario=document.getElementById('usuario').value;
			var password=document.getElementById('password').value;
			var ID_Usuario="";

			loginconectar(usuario,password);
			function loginconectar(U,P)
			{
				datos="usuario="+U+"&password="+P;
				$.ajax({
					type:"post",
					url:"http://192.168.1.162/Sitio6/log_in_m.php",
					data:datos
				}).done(function(msg){
					alert(msg);
					if(msg==""|| msg==null)
					{alert("usuario incorrecto");}
					else
					{
					var oUsuario=jquery.porseJSON(msg);
					ID_usuario=OUsuario.usuario;
					alert("Bienbenido "+ ID_usuario);
					location.href="#Busqueda";
					
					}
				});//function msg
			}//function
		});//tap
	});//device ready
});//ready
