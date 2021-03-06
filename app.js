// for single customer
// document.getElementById('button1').addEventListener('click',loadCustomer);
// for multiple customer
document.getElementById('button2').addEventListener('click',loadCustomers);

// function loadCustomer(e){
//   const xhr=new XMLHttpRequest();
//   xhr.open('GET','customer.json',true);

//   xhr.onload=function(){
//     if(this.status === 200){
//       console.log(this.responseText);
//       let customer=JSON.parse(this.responseText);
//       let output=`
//       <ul>
//       <li>${customer.id}</li>
//       <li>${customer.name}</li>
//       <li>${customer.company}</li>
//       <li>${customer.phone}</li>
//       </ul>
//       `
//       document.getElementById('customer').innerHTML=output;
//     }
//   }

//   xhr.send();
// }

function loadCustomers(e){
  const xhr=new XMLHttpRequest();
  xhr.open('GET','customers.json',true);

  xhr.onload=function(){
    if(this.status === 200){
      let customers=JSON.parse(this.responseText);
      let output='';
      customers.forEach(customer => {
         output+=`
              <ul>
              <li>${customer.id}</li>
              <li>${customer.name}</li>
              <li>${customer.company}</li>
              <li>${customer.phone}</li>
              </ul>
              `
      });
      document.getElementById('customers').innerHTML=output;
    }
  }

  xhr.send();
}