var slider = document.getElementById("rate");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}


function compute() {
    const resultsdiv = document.getElementById('computation-text');
    const deposit = document.getElementById("principal");
    const rate1 = document.getElementById("rate");
    const years1 = document.getElementById("years");


    document.getElementById('computation-text').innerHTML = '';

  if (deposit.value == 0 || rate1.value == 0 || years1.value == 0) {
    const p = document.createElement('p');
    const pText = document.createTextNode('Please enter all fields');

    resultsdiv.style.color = 'red';
    resultsdiv.style.fontStyle = 'italic';
    p.appendChild(pText);
    resultsdiv.appendChild(p);


  } else {
    const result = document.getElementById('result');
    
    const currentdate = new Date().getFullYear();
    const p = document.createElement('p');
    const t = document.createElement('p');
    const v = document.createElement('p');
    const x = document.createElement('p');
    const time = currentdate + parseInt(years1.value);
    const amount = (deposit.value * rate1.value)/100 * parseInt(years1.value);
    

    const pText = document.createTextNode('If you deposit '+ principal.value);
    const tText = document.createTextNode('at an interest rate of  '+ rate1.value+'%');
    const vText = document.createTextNode('You will receive an amount of  ' + amount);
    const xText = document.createTextNode('In the year  ' + time);
   

    resultsdiv.style.color = 'black';
    resultsdiv.style.fontStyle = 'normal';
    p.appendChild(pText);
    resultsdiv.appendChild(p);
    t.appendChild(tText);
    resultsdiv.appendChild(t);
    v.appendChild(vText);
    resultsdiv.appendChild(v);
    x.appendChild(xText);
    resultsdiv.appendChild(x);

  
    getElementsByClassName("button").style.color = 'yellow';
    
 
    
    principal.value.style.background = 'black';
  }
}
