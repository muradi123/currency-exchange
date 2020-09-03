


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      if (request.greeting){
        for (i = 0; i < request.leng; i++) {
            var nameItem = {
                "id": `${i}`,
                "title": "Save as Name",
                "contexts": ["selection"]
            };
           
            console.log(request.greeting)
            chrome.contextMenus.create(nameItem);
          }
       
      }
      
    });

   