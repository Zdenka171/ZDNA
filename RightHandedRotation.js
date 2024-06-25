EB.ScreenOrientation.rightHanded();
						
function applicationCallback(params){	
	console.log("device event="+params.applicationEvent);
   EB.ScreenOrientation.rightHanded();
}

EB.Application.setApplicationNotify(applicationCallback);
