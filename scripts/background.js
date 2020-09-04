chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.greeting){
      
          var nameItem = {
              "id": `${request.leng}`,
              "title": `${request.greeting}`,
              "contexts": ["selection"]
          };
         
          console.log(request.greeting)
          chrome.contextMenus.create(nameItem);
   
     
    }
    
  });

