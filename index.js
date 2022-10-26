function buyPhone(){
      // increase solution first 

document.getElementById('phone-increase').addEventListener("click",function(){
      const phoneInput = document.getElementById('phone-count');
      const phoneNumber = parseInt(phoneInput.value);
      const phoneNewCount = phoneNumber + 1;
      phoneInput.value = phoneNewCount;

      const phoneTotal = phoneNewCount * 1219;
      document.getElementById('phone-total').innerText = phoneTotal;
      totalPrice() ;

})


document.getElementById('phone-decrease').addEventListener("click",function(){
      const phoneInput = document.getElementById('phone-count');
      const phoneNumber = parseInt(phoneInput.value);
      const phoneNewCount = phoneNumber - 1;
      phoneInput.value = phoneNewCount;

      const phoneTotal = phoneNewCount * 1219;
      document.getElementById('phone-total').innerText = phoneTotal;
      totalPrice() ;

})



// increase solution second
document.getElementById('case-increase').addEventListener('click',function(){
      const caseInput = document.getElementById('case-count');
      const caseNumber = parseInt(caseInput.value);
      const caseNewCount = caseNumber + 1;
      caseInput.value = caseNewCount;

      const caseTotal = caseNewCount * 59;
      document.getElementById('case-total').innerText = '$' + caseTotal;
      totalPrice() ;


})

// decrease solution 

document.getElementById('case-decrease').addEventListener('click',function(){
      const caseInput = document.getElementById('case-count');
      const caseNumber = parseInt(caseInput.value);
      const caseNewCount = caseNumber - 1;
      caseInput.value = caseNewCount;

      const caseTotal = caseNewCount * 59 ;
      document.getElementById("case-total").innerText = caseTotal;
      totalPrice() ;
})





}

function totalPrice(){
      const phoneInput = document.getElementById('phone-count');
      const phoneNumber = parseInt(phoneInput.value);

      const caseInput = document.getElementById('case-count');
      const caseNumber = parseInt(caseInput.value);

      const phoneTotalPrice = phoneNumber * 1219 + caseNumber * 59 ;
      document.getElementById('subtotal').innerText = phoneTotalPrice ;

      let taxTotal = phoneTotalPrice * 0.1 
      let roundTaxTotal = Math.round(taxTotal);
      document.getElementById('tax').innerText = roundTaxTotal;

      let allTotal = phoneTotalPrice + roundTaxTotal ;
      document.getElementById('grandTotal').innerText = allTotal;

}








 let AmountPhone = buyPhone();
 console.log(AmountPhone);


