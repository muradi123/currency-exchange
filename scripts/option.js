
function editDeleteSave(){
  let index;
$(".zimpvyvzds").click(function () {
chrome.runtime.sendMessage({delete: "true"});
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


let index2;
$('.jylzvkgxxk').on('click', function() {
  index2 = $(this).parent().parent().parent().parent().parent().parent().index();
  console.log(index2);
  if($(this).hasClass('xfunloppbp') && $('.cxvlaxyzlh').eq(index2).hasClass('scptwsygwd')){
    $('.miyhwhxnaj').eq(index2).toggleClass("denjnyqajo");
  }
});
$( function() {
$( "#sortable" ).sortable();
$( "#sortable" ).disableSelection();
});

$(".fwiqxrwsvl").click(function () {
  $(this).parent().parent().parent().parent().remove();
    let allU = document.querySelector('.ui-sortable');
     let ts = JSON.stringify(allU.outerHTML);
     chrome.storage.local.set({objVal:ts});

});
$(".miyhwhxnaj li input").click(function () {
  let value =  $( this ).val();
  $('.alaepzlpla').eq(index2).text(value);
  $('.gbmghponmn').eq(index2).attr(`src`, `../images/${value}.png`);
  $(this).parent().parent().removeClass('denjnyqajo') 
  $('.gbmghponmn').eq(index2).css("display", "block")
  $('.gbmghponmn').eq(index2).parent().addClass('box-no')
  });
  $(".dvzowjifyb li input").click(function () {
  let value =  $( this ).val();
  $('.xwswmowfii').eq(index2).text(value);
  $('.ywnifddqjx').eq(index2).attr(`src`, `../images/${value}.png`);
  $('.ywnifddqjx').eq(index2).css("display", "block")
  $('.ywnifddqjx').eq(index2).parent().addClass('box-no')
  $(this).parent().parent().removeClass('denjnyqajo')
  });

  $(".rpyeyrjzqb").click(function () {
    index2 = $(this).parent().parent().parent().parent().parent().parent().index();
    if($(this).hasClass('xfunloppbp') && $('.kxbqmvmapu').eq(index2).hasClass('scptwsygwd')){
    $('.dvzowjifyb').eq(index2).toggleClass("denjnyqajo");
    
    }
    });


let index3;

$('.dvbakbohhy').click(function() {

let objs = [];
index3 =  $(this).parent().parent().parent().parent().index();
$('.dvbakbohhy').eq(index3).removeClass('dgsrbipams');
$('.zimpvyvzds').eq(index3).removeClass('uuuhuzxnpd');
console.log(index3)
$('.jylzvkgxxk').eq(index3).removeClass( "xfunloppbp" );
$('.cxvlaxyzlh').eq(index3).removeClass( "scptwsygwd" );
$('.rpyeyrjzqb').eq(index3).removeClass( "xfunloppbp" );
$('.kxbqmvmapu').eq(index3).removeClass( "scptwsygwd" );
let allU = document.querySelector('.ui-sortable');
let ts = JSON.stringify(allU.outerHTML);
chrome.storage.local.set({objVal:ts});
// first clicked save after reload

  chrome.storage.local.get(['objVal', 'txt'], function(result) {
    let objs = [];
    console.log(result.objVal);
    console.log(result.txt);
    let numb = result.txt;
    document.querySelector('.gyfpyxmhmcpllye').innerHTML = '<div class="dgnownlamlcnsjj"><div class="ugpvlpxayggfdln"></div><div class="sekbvoujtoswvbd"><span class="cmwnyoemtinmmaf">Base currency</span></div><div class="prycpqedgjhoqdb">Convert to</div><div class="hyxjejbqjtfkplr"></div></div>' + '<div>'+ JSON.parse(result.objVal) + '</div>';
    editDeleteSave();
  
 
  let allUl = document.querySelectorAll('.ui-state-default');
  for(let i = 0; i < allUl.length ; i ++) { 
  
  const from_currencyEl = document.querySelectorAll('.alaepzlpla')[i];
  const from_ammountEl = document.getElementById('from_ammount');
  const to_currencyEl = document.querySelectorAll('.xwswmowfii')[i];
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
    rateEl.innerText = `${numb} ${from_currency} = ${rate} ${to_currency}`;
    to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
    objs.push(`${numb} ${from_currency} = ${rate} ${to_currency}`);

 
 let ht='';
       for (let i=0; i < objs.length; i++) {
       ht += '<div>' + objs[i] + '</div>';
       }

       fullUL.innerHTML = ht;
       console.log(ht)
  })
  }
  calculate();
  
}

$( function() {
  $("#sortable").sortable({
    start: function (event, ui) {
      $(this).data('idx', ui.item.index());
    },
    change: function (event, ui) {
      var idx = ui.placeholder.prevAll().filter(':not(.ui-sortable-helper)').length;
      console.log(idx - $(this).data('idx'));
      console.log(idx) 
      chrome.storage.local.set({sorted: idx})
      chrome.storage.onChanged.addListener(changes => {
        if (changes.sorted) {
          console.log('sorted');
      let ob = [];
         setTimeout(()=>{
          let allU = document.querySelector('.ui-sortable');
          let ts = JSON.stringify(allU.outerHTML);
          chrome.storage.local.set({objVal:ts});
          chrome.storage.local.get(['objVal', 'bgsN'], function(result) {
            document.querySelector('.gyfpyxmhmcpllye').innerHTML = '<div class="dgnownlamlcnsjj"><div class="ugpvlpxayggfdln"></div><div class="sekbvoujtoswvbd"><span class="cmwnyoemtinmmaf">Base currency</span></div><div class="prycpqedgjhoqdb">Convert to</div><div class="hyxjejbqjtfkplr"></div></div>' + '<div>'+ JSON.parse(result.objVal) + '</div>';
          
          editDeleteSave()
          

          location.reload();

          });
         },2000)
         
        }
      });
      $(this).data('idx', idx);
    }  
  });
  $( "#sortable" ).disableSelection();
});

  });
  
});

}
editDeleteSave();
chrome.storage.onChanged.addListener(changes => {
  if (changes.txt) {
   
    console.log('changed');
    console.log(changes.txt.newValue);
    let nw = changes.txt.newValue;

    let allUl = document.querySelectorAll('.ui-state-default');
    for(let i = 0; i < allUl.length ; i ++) { 
      let objs = [];
    
    const from_currencyEl = document.querySelectorAll('.alaepzlpla')[i];
    const from_ammountEl = document.getElementById('from_ammount');
    const to_currencyEl = document.querySelectorAll('.xwswmowfii')[i];
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
      rateEl.innerText = `${nw} ${from_currency} = ${rate} ${to_currency}`;
      to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
      objs.push(`${nw} ${from_currency} = ${rate} ${to_currency}`);
      
        chrome.storage.local.set({bgsN:objs})
      
   
   let ht='';
         for (let i=0; i < objs.length; i++) {
         ht += '<div>' + objs[i] + '</div>';
         }
  
         fullUL.innerHTML = ht;
         console.log(ht)
    })
    }
    calculate();
    
  }
  $( function() {
    $("#sortable").sortable({
      start: function (event, ui) {
        $(this).data('idx', ui.item.index());
      },
      change: function (event, ui) {
        var idx = ui.placeholder.prevAll().filter(':not(.ui-sortable-helper)').length;
        console.log(idx - $(this).data('idx'));
        console.log(idx) 
        chrome.storage.local.set({sorted: idx})
        chrome.storage.onChanged.addListener(changes => {
          if (changes.sorted) {
            console.log('sorted');
        let ob = [];
           setTimeout(()=>{
            let allU = document.querySelector('.ui-sortable');
            let ts = JSON.stringify(allU.outerHTML);
            chrome.storage.local.set({objVal:ts});
            chrome.storage.local.get(['objVal', 'bgsN'], function(result) {
              document.querySelector('.gyfpyxmhmcpllye').innerHTML = '<div class="dgnownlamlcnsjj"><div class="ugpvlpxayggfdln"></div><div class="sekbvoujtoswvbd"><span class="cmwnyoemtinmmaf">Base currency</span></div><div class="prycpqedgjhoqdb">Convert to</div><div class="hyxjejbqjtfkplr"></div></div>' + '<div>'+ JSON.parse(result.objVal) + '</div>';
            
            editDeleteSave()
            

            location.reload();

            });
           },2000)
           
          }
        });
        $(this).data('idx', idx);
      }  
    });
    $( "#sortable" ).disableSelection();
  });
    

  setTimeout(()=>{
    chrome.runtime.sendMessage({delete: "true"});
  },1000)

  }
});




// only after reload

  
  chrome.storage.local.get(['objVal', 'txt','premium'], function(result) {
if(result.premium === 'true'){
  $('.secrurity_key').css('display', 'none')
  $('.tambkeygglneujs').text('You are on the premium version')
  $('.email').text('You are right know on the premium version! Need support?  Email ')
  $('.gyfpyxmhmcpllye').addClass('topmargin')
  $(".miyhwhxnaj ").children().slice(5, 32).css('display', 'block')
  $(".miyhwhxnaj ").children().slice(37, 64).css('display', 'block')
  $(".miyhwhxnaj").children().slice(69, 96).css('display', 'block')
  $(".miyhwhxnaj ").children().slice(101, 128).css('display', 'block')
  $(".dvzowjifyb").children().slice(5, 32).css('display', 'block')
  $(".dvzowjifyb").children().slice(37, 64).css('display', 'block')
  $(".dvzowjifyb").children().slice(69, 96).css('display', 'block')
  $(".dvzowjifyb").children().slice(101, 128).css('display', 'block')
  addNew();
}
    let objs = [];
    console.log(result.objVal);
    console.log(result.txt);
    let txts = result.txt;
    document.querySelector('.gyfpyxmhmcpllye').innerHTML = '<div class="dgnownlamlcnsjj"><div class="ugpvlpxayggfdln"></div><div class="sekbvoujtoswvbd"><span class="cmwnyoemtinmmaf">Base currency</span></div><div class="prycpqedgjhoqdb">Convert to</div><div class="hyxjejbqjtfkplr"></div></div>' + '<div>'+ JSON.parse(result.objVal) + '</div>';
  editDeleteSave();

$( function() {
  $("#sortable").sortable({
    start: function (event, ui) {
      $(this).data('idx', ui.item.index());
    },
    change: function (event, ui) {
      var idx = ui.placeholder.prevAll().filter(':not(.ui-sortable-helper)').length;
      console.log(idx - $(this).data('idx'));
      console.log(idx) 
      chrome.storage.local.set({sorted: idx})
      chrome.storage.onChanged.addListener(changes => {
        if (changes.sorted) {
          console.log('sorted');
      let ob = [];
         setTimeout(()=>{
          let allU = document.querySelector('.ui-sortable');
          let ts = JSON.stringify(allU.outerHTML);
          chrome.storage.local.set({objVal:ts});
          chrome.storage.local.get(['objVal', 'bgsN'], function(result) {
            document.querySelector('.gyfpyxmhmcpllye').innerHTML = '<div class="dgnownlamlcnsjj"><div class="ugpvlpxayggfdln"></div><div class="sekbvoujtoswvbd"><span class="cmwnyoemtinmmaf">Base currency</span></div><div class="prycpqedgjhoqdb">Convert to</div><div class="hyxjejbqjtfkplr"></div></div>' + '<div>'+ JSON.parse(result.objVal) + '</div>';
          
          editDeleteSave()
          

          location.reload();

          });
         },2000)
         
        }
      });
      $(this).data('idx', idx);
    }  
  });
  $( "#sortable" ).disableSelection();
});






  });
 






  let newLi = `
  <li class="ui-state-default"  data-arrange="1">
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
                                 <div class="icon-div">
                                     <img class="gbmghponmn" style="display:none" src="./images/USD.png">
                                 </div>
                                
                                 <div class="mducnkuoek">
                                     <div class="ulList">
                                        <div class="jylzvkgxxk xfunloppbp">
                                            <div class="alaepzlpla" style="width: 100%;"></div>
                                            <div style="width: 120px;"> <img class="cxvlaxyzlh " src="./images/down-arrow.png"></div>
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
                                 <div class="icon-div2">
                                     <img class="ywnifddqjx" style="display:none" src="./images/USD.png">
                                 </div>
                                
                                 <div class="leodwiuutx">
                                     <div class="ulList">
                                        <div class="rpyeyrjzqb xfunloppbp">
                                            <div class="xwswmowfii" style="width: 100%;"></div>
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
                                    <div class="zimpvyvzds">Edit</div>
                                    <div class="dvbakbohhy"><span class="djttbbjuyc">Save</spa></div>
                                    <div class="fwiqxrwsvl">Delete</div>
                                </div>
                            </div>
                        </div>
                     </li>
 `
 
 function addNew(){
  document.querySelector('.bsjavjekfp').addEventListener('click',function(){
    console.log('works');
    let main = document.querySelector('.ui-sortable');
    main.innerHTML += newLi;
    editDeleteSave();
    let allU = document.querySelector('.ui-sortable');
    let ts = JSON.stringify(allU.outerHTML);
    chrome.storage.local.set({objVal:ts});
  })
 }

 
 console.log($(".miyhwhxnaj").children())
 $(".miyhwhxnaj ").children().slice(5, 32).css('display', 'none')
 $(".miyhwhxnaj ").children().slice(37, 64).css('display', 'none')
 $(".miyhwhxnaj").children().slice(69, 96).css('display', 'none')
 $(".miyhwhxnaj ").children().slice(101, 128).css('display', 'none')
 $(".dvzowjifyb").children().slice(5, 32).css('display', 'none')
 $(".dvzowjifyb").children().slice(37, 64).css('display', 'none')
 $(".dvzowjifyb").children().slice(69, 96).css('display', 'none')
 $(".dvzowjifyb").children().slice(101, 128).css('display', 'none')
 $( ".key" ).click(function() {
  //let rand = Math.floor(Math.random() * 2) + 1;
  //console.log(rand)
  let rand = $('.keyinput').val();
  console.log(rand)
  if(rand === 'INICX_63767'){
    chrome.storage.local.set({premium: 'true'});
    $(this).parent().css('display', 'none');
    $('.tambkeygglneujs').text('You are on the premium version')
    $('.email').text('You are right know on the premium version! Need support?  Email ')
    $('.gyfpyxmhmcpllye').addClass('topmargin')
    $(".miyhwhxnaj ").children().slice(5, 32).css('display', 'block')
    $(".miyhwhxnaj ").children().slice(37, 64).css('display', 'block')
    $(".miyhwhxnaj").children().slice(69, 96).css('display', 'block')
    $(".miyhwhxnaj ").children().slice(101, 128).css('display', 'block')
    $(".dvzowjifyb").children().slice(5, 32).css('display', 'block')
    $(".dvzowjifyb").children().slice(37, 64).css('display', 'block')
    $(".dvzowjifyb").children().slice(69, 96).css('display', 'block')
    $(".dvzowjifyb").children().slice(101, 128).css('display', 'block')
    addNew();
  }
  else{
    console.log('second')
  }
});
