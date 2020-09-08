
 




   
 let newobj = [];
 function logStorageChange(changes, bgsN) {
   newobj.push(changes.bgsN.newValue)
   console.log(newobj)
   Object.keys(newobj);
   let nn = newobj[Object.keys(newobj)[Object.keys(newobj).length - 1]]
   console.log(nn)

   for (let itms of nn){
   console.log(itms)
   var newval = {
   "title": `${itms}`,
   "contexts": ["selection"]
 };
 
   }

   chrome.contextMenus.create(newval)
 }
 chrome.storage.onChanged.addListener(logStorageChange);
 
 chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.delete === "true"){
      chrome.contextMenus.removeAll();
    }

  });
 
 




   