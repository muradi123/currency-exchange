  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

 
  $(".fwiqxrwsvl").click(function () {
    $(this).parent().parent().parent().parent().remove();
  });
 
   
  
   let index2;
   $('.jylzvkgxxk').on('click', function() {

      index2 = $(this).parent().parent().parent().parent().parent().parent().index();
      console.log(index2);
      if($(this).hasClass('xfunloppbp')){
        $('.miyhwhxnaj').eq(index2).toggleClass("denjnyqajo");
       
      }
      
      
  
});
   
   
   let index;
   $(".zimpvyvzds").click(function () {
    index = $(this).parent().parent().parent().parent().index();
    $(this).addClass('uuuhuzxnpd');
    $('.dvbakbohhy').eq(index).addClass('dgsrbipams');
    console.log(index);
   
    if (index >= 0) {
     $('.jylzvkgxxk').eq(index).addClass( "xfunloppbp" );
     $('.cxvlaxyzlh').eq(index).addClass( "scptwsygwd" );
     $('.rpyeyrjzqb').eq(index).addClass( "xfunloppbp" );
     $('.kxbqmvmapu').eq(index).addClass( "scptwsygwd" );
   }
 
 });


setTimeout(function(){  var obj = [];
  let allUl = document.querySelectorAll('.ui-state-default');
  for(let i = 0; i < allUl.length ; i ++) {
   let firsthtml =  $('.alaepzlpla').eq(i).html();
   let secondthtml =  $('.xwswmowfii').eq(i).html();
   obj.push([firsthtml, secondthtml]);
   chrome.storage.local.set({objVal: obj});
   console.log(obj);
 }; }, 5000);

 setTimeout(function(){ 
  chrome.storage.local.get(['objVal'], function(result) {
    let valob = result.objVal;
    let allUl = document.querySelectorAll('.ui-state-default');
   for(let i = 0; i < allUl.length ; i ++) {
    let test = valob[i];
    $('.alaepzlpla').eq(i).text(test[1]);
    $('.gbmghponmn').eq(i).attr(`src`, `../images/${test[1]}.png`);
    console.log(test[1]);
   }
  
   
   
  
  });
  }, 5000);


 let index3;
    $( ".dvbakbohhy" ).click(function() {
      index3 =  $(this).parent().parent().parent().parent().index();
     $('.dvbakbohhy').eq(index3).removeClass('dgsrbipams');
     $('.zimpvyvzds').eq(index3).removeClass('uuuhuzxnpd');
     console.log(index3)

      

  
     
    if (index >= 0) {
     $('.jylzvkgxxk').eq(index3).removeClass( "xfunloppbp" );
     $('.cxvlaxyzlh').eq(index3).removeClass( "scptwsygwd" );
     $('.rpyeyrjzqb').eq(index3).removeClass( "xfunloppbp" );
     $('.kxbqmvmapu').eq(index3).removeClass( "scptwsygwd" );
   }

   
  
  
   });
 


   $(".rpyeyrjzqb").click(function () {
     index2 = $(this).parent().parent().parent().parent().parent().parent().index();
     if($(this).hasClass('xfunloppbp')){
      $('.dvzowjifyb').eq(index2).toggleClass("denjnyqajo");
     
    }
   });
  
 
 
   $(".miyhwhxnaj li input").click(function () {
     let value =  $( this ).val();
     $('.alaepzlpla').eq(index2).text(value);
     $('.gbmghponmn').eq(index2).attr(`src`, `../images/${value}.png`);
     $(this).parent().parent().removeClass('denjnyqajo') 
   });
 
 
 
   $(".dvzowjifyb li input").click(function () {
     let value =  $( this ).val();
     $('.xwswmowfii').eq(index2).text(value);
     $('.ywnifddqjx').eq(index2).attr(`src`, `../images/${value}.png`);
     $(this).parent().parent().removeClass('denjnyqajo')
   });
  
  let div = `
  <li class="ui-state-default ui-sortable-handle">
                       <div class="nnspczfzpudilqu">
                           <div class="qzehdwqopehnfwx">
                               <div class="xputjotzgs">
                                   <div class="txnpehwobm">
                                    <span style='font-size:30px;'>&#8226;</span>
                                    <span style='font-size:30px;'>&#8226;</span>
                                   </div>

                                   <div class="xcrrnlscqs">
                                    <span style='font-size:30px;'>&#8226;</span>
                                    <span style='font-size:30px;'>&#8226;</span>
                                   </div>

                                   <div class="trbmtswzcp">
                                    <span style='font-size:30px;'>&#8226;</span>
                                    <span style='font-size:30px;'>&#8226;</span>
                                   </div>
                               </div>
                           </div>

                           <div class="jblkjcydvikjiqv">
                            <div class="aotlbvatmz">
                                <div>
                                    <img class="gbmghponmn" src="./images/USD.png">
                                </div>
                               
                                <div class="mducnkuoek">
                                    <div class="ulList">
                                       <div class="lpmczgnbnr ">
                                           <div class="alaepzlpla" style="width: 100%;">USD</div>
                                           <div style="width: 120px;"> <img class="cxvlaxyzlh" src="./images/down-arrow.png"></div>
                                       </div>
                                       <div class="rhhmtkuwpa">
                                           <ul class="miyhwhxnaj">
                                               <li><input type="button" value="AUD"></li>
                                               <li><input type="button" value="BGN"></li>
                                               <li><input type="button" value="BRL"></li>
                                               <li><input type="button" value="CAD"></li>
                                               <li><input type="button" value="CHF"></li>
                                               <li><input type="button" value="CNY"></li>
                                               <li><input type="button" value="CZK"></li>
                                               <li><input type="button" value="DKK"></li>
                                               <li><input type="button" value="EUR"></li>
                                               <li><input type="button" value="GBP"></li>
                                               <li><input type="button" value="HKD"></li>
                                               <li><input type="button" value="HRK"></li>
                                               <li><input type="button" value="HUF"></li>
                                               <li><input type="button" value="GEO"></li>
                                               <li><input type="button" value="IDR"></li>
                                               <li><input type="button" value="ILS"></li>
                                               <li><input type="button" value="INR"></li>
                                               <li><input type="button" value="JPY"></li>
                                               <li><input type="button" value="KRW"></li>
                                               <li><input type="button" value="MXN"></li>
                                               <li><input type="button" value="MYR"></li>
                                               <li><input type="button" value="NOK"></li>
                                               <li><input type="button" value="NZD"></li>
                                               <li><input type="button" value="PHP"></li>
                                               <li><input type="button" value="PLN"></li>
                                               <li><input type="button" value="RON"></li>
                                               <li><input type="button" value="RUB"></li>
                                               <li><input type="button" value="SEK"></li>
                                               <li><input type="button" value="SGD"></li>
                                               <li><input type="button" value="THB"></li>
                                               <li><input type="button" value="TRY"></li>
                                               <li><input type="button" value="USD"></li>
                                               <li><input type="button" value="ZAR"></li>
                                           </ul>
                                       </div>
                                    </div>
                                </div>
                            </div>
                           </div>

                           <div class="zhjgpsesqfndlls">
                            <div class="rvtrxcxkcz">
                                <div>
                                    <img class="ywnifddqjx" src="./images/USD.png">
                                </div>
                               
                                <div class="leodwiuutx">
                                    <div class="ulList">
                                       <div class="rpyeyrjzqb">
                                           <div class="xwswmowfii" style="width: 100%;">USD</div>
                                           <div style="width: 120px;"> <img class="kxbqmvmapu" src="./images/down-arrow.png"></div>
                                       </div>
                                       <div class="rhhmtkuwpa">
                                           <ul class="dvzowjifyb">
                                               <li><input type="button" value="AUD"></li>
                                               <li><input type="button" value="BGN"></li>
                                               <li><input type="button" value="BRL"></li>
                                               <li><input type="button" value="CAD"></li>
                                               <li><input type="button" value="CHF"></li>
                                               <li><input type="button" value="CNY"></li>
                                               <li><input type="button" value="CZK"></li>
                                               <li><input type="button" value="DKK"></li>
                                               <li><input type="button" value="EUR"></li>
                                               <li><input type="button" value="GBP"></li>
                                               <li><input type="button" value="HKD"></li>
                                               <li><input type="button" value="HRK"></li>
                                               <li><input type="button" value="HUF"></li>
                                               <li><input type="button" value="GEO"></li>
                                               <li><input type="button" value="IDR"></li>
                                               <li><input type="button" value="ILS"></li>
                                               <li><input type="button" value="INR"></li>
                                               <li><input type="button" value="JPY"></li>
                                               <li><input type="button" value="KRW"></li>
                                               <li><input type="button" value="MXN"></li>
                                               <li><input type="button" value="MYR"></li>
                                               <li><input type="button" value="NOK"></li>
                                               <li><input type="button" value="NZD"></li>
                                               <li><input type="button" value="PHP"></li>
                                               <li><input type="button" value="PLN"></li>
                                               <li><input type="button" value="RON"></li>
                                               <li><input type="button" value="RUB"></li>
                                               <li><input type="button" value="SEK"></li>
                                               <li><input type="button" value="SGD"></li>
                                               <li><input type="button" value="THB"></li>
                                               <li><input type="button" value="TRY"></li>
                                               <li><input type="button" value="USD"></li>
                                               <li><input type="button" value="ZAR"></li>
                                           </ul>
                                       </div>
                                    </div>
                                </div>
                            </div>
                           </div>
                           <div class="nuertaryteqckdc">
                               <div class="wruzmkqwvu">
                                   <div class="ontabbcmca">Edit</div>
                                   <div class="dvbakbohhy"><span class="djttbbjuyc">Save</spa></div>
                                   <div class="fwiqxrwsvl">Delete</div>
                               </div>
                           </div>
                       </div>
                    </li>
  `;
  
 
  $( ".fubospzpgh" ).click(function() {
   $('.ui-sortable').append(div)
   
   $(".fwiqxrwsvl").click(function () {
    $(this).parent().parent().parent().parent().remove();
  });
   
  let index;
  $(".ontabbcmca").click(function () {
   index = $(this).parent().parent().parent().parent().index();
   $(this).addClass('uuuhuzxnpd');
   $('.dvbakbohhy').eq(index).addClass('dgsrbipams');
   console.log(index);
  
   if (index >= 0) {
    $('.lpmczgnbnr').addClass( "xfunloppbp" );
    $('.cxvlaxyzlh').eq(index).addClass( "scptwsygwd" );
    $('.rpyeyrjzqb').eq(index).addClass( "xfunloppbp" );
    $('.kxbqmvmapu').eq(index).addClass( "scptwsygwd" );
  }

});

});

setTimeout(function(){
  let allUl = document.querySelectorAll('.ui-state-default');
  for(let i = 0; i < allUl.length ; i ++) {
      
  const from_currencyEl = document.querySelectorAll('.alaepzlpla')[i];
  console.log(from_currencyEl)
  const from_ammountEl = document.getElementById('from_ammount');
  const to_currencyEl = document.querySelectorAll('.xwswmowfii')[i];
  console.log(to_currencyEl)
  const to_ammountEl = document.getElementById('to_ammount');
  const rateEl = document.getElementById('rate');
  let fullUL = document.querySelector('.rfwfw');
  
console.log(i);
function calculate() {
	const from_currency = from_currencyEl.innerHTML;
	const to_currency = to_currencyEl.innerHTML;
	
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[to_currency];
   let currency = 	rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;
   let string =  fullUL.innerHTML += '<div>' + currency + '</div>';
   let putTosting = JSON.stringify(string);
   console.log(putTosting);
    to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
    chrome.runtime.sendMessage({greeting: string, leng: allUl.length})
    
	})
}
 
calculate();
     
}
}, 2000);

$( function() {
  $( "#sortable" ).sortable({
    start: function (event, ui) {
      $(this).data('idx', ui.item.index());
    },
    change: function (event, ui) {
      var idx = ui.placeholder.prevAll().filter(':not(.ui-sortable-helper)').length;
      // print relative change in index: negative is up, positive is down
      console.log(idx - $(this).data('idx')); 
      setTimeout(function(){
        let allUl = document.querySelectorAll('.ui-state-default');
        for(let i = 0; i < allUl.length ; i ++) {
            
        const from_currencyEl = document.querySelectorAll('.alaepzlpla')[i];
        console.log(from_currencyEl)
        const from_ammountEl = document.getElementById('from_ammount');
        const to_currencyEl = document.querySelectorAll('.xwswmowfii')[i];
        console.log(to_currencyEl)
        const to_ammountEl = document.getElementById('to_ammount');
        const rateEl = document.getElementById('rate');
        let fullUL = document.querySelector('.rfwfw');
        
      
      function calculate() {
        const from_currency = from_currencyEl.innerHTML;
        const to_currency = to_currencyEl.innerHTML;
        
        fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
          .then(res => res.json())
          .then(res => {
          const rate = res.rates[to_currency];
         let currency = 	rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;
         fullUL.innerHTML += currency;
          to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
        })
      }
       
      calculate();
           
      }
      }, 2000);
      $(this).data('idx', idx);
    }
  });
  $( "#sortable" ).disableSelection();
});