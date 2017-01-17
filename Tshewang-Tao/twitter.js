function openRelevantPage(event){
	alert(event.target.nodeName);
	/*delegate event*/
	var target = event.target;
    if(target.tagName.toLowerCase()=="a"){
     /*get the id of the container that we want to show*/
       var customAttributeId = target.getAttribute("customAttributeId");
    		alert (customAttributeId); 
        /*get all container by class name: sectionContainer*/ 
       var containers = document.getElementsByClassName("sectionContainer");
        
        for (var i=0; i < containers.length; i++){
            var currentContainer = containers[i];
            if (currentContainer.id == customAttributeId){
                currentContainer.style.display ="block";
            }else{
                currentContainer.style.display ="none";
            }
        }	
   }		
}
window.onload = function(){
  document.getElementById("navigation").addEventListener("click",openRelevantPage); 
}    
// And here