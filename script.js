const min =parseInt(prompt("Enter Minimum Value!"));
const max =parseInt(prompt("Enter Maximum Value"));
let hp =12;
const hpModifier = document.getElementById("HP");
const target = Random(min,max);
function Random(min,max)
{
return Math.floor(Math.random()*(max-min+1)+min);
}
const para = document.getElementById("result");
const myForm =document.getElementById("number");
const inputField = document.getElementById("try");
const button1 =document.getElementById("submit");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
button1.addEventListener("click",Compare);
function Compare(event)
{
    const input = inputField.value;
    if(target>input)
    {
      para.textContent ="Higher";
      hp--;
      changeHp();
    }
    else if(target<input)
    {
      para.textContent ="Lower";
      hp--;
      changeHp();
    }
    else
    {
        para.textContent ="Correct";
        tryAgain();
    }
}

function changeHp()
{

if(hp==11)
hpModifier.src = "Image/hp11.png";
else if(hp==10)
hpModifier.src= "Image/hp10.png";
else if(hp==9)
hpModifier.src= "Image/hp9.png";
else if(hp==8)
hpModifier.src= "Image/hp8.png";
else if(hp==7)
hpModifier.src= "Image/hp7.png";
else if(hp==6)
hpModifier.src= "Image/hp6.png";
else if(hp==5)
hpModifier.src= "Image/hp5.png";
else if(hp==4)
hpModifier.src= "Image/hp4.png";
else if(hp==3)
hpModifier.src= "Image/hp3.png";
else if(hp==2)
hpModifier.src= "Image/hp2.png";
else if(hp==1)
hpModifier.src= "Image/hp1.png";
else
tryAgain();
}
function tryAgain()
{
  const answer = prompt("Would you like to play again? Y/N");
  if(answer=="Y")
  window.location.reload();
}