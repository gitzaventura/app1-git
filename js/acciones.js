// JavaScript Document

 $(document).ready(function (e){
   document.addEventListener ("deviceready",function(){
	   $('#disp tableid').eq(3).text(device.model);
	   $('#disp tableid').eq(5).text(device.cordova);
	   $('#disp tableid').eq(7).text(device.platform);
	   $('#disp tableid').eq(9).text(device.version);
	   $('#disp tableid').eq(11).text(device.uuid);
	  document.addEventLister("pause",function(){
		  escribehistoria ('la app se pauso');
	  },false);//pause
	  document.addEventListener("resume",function(){
		  escribehistoria ('la app se reinicio');
	  },false);//resume
	  document.addEventListener("online",function(){
		  escribehistoria ('la app se conecto a la red');
	  },false);//se conecto
	  document.addEventListener("offline",function(){
		   escribehistoria ('la app se desconecto de la red')
	   },false);//se desconecto
	   
	   
   },false);//ready device
   
   
 });//document
 
 function escrihistoria(accion){
	 $('#eHistoria').append('<li>'+accion+'</li>');
 }