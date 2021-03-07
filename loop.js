var names = prompt("Please Enter your name ?")
document.write('Welcome '+ names )
var order = prompt("What do you want MN OR sephora ? ");
while(order != 'MN' && order != 'sephora')
{   
     order = prompt("What do you want MN OR sephora ? ");  
}
var iteamorded='';
if (order=='MN')
{  
      iteamorded = '<img src="https://rukminim1.flixcart.com/image/612/612/kjabs7k0-0/combo-kit/o/u/o/combo-kit-make-up-kit-defining-eyeliner-lipliner-24-mn-original-imafywdaqnfcadgh.jpeg?q=70"/>';
}
else 
{    
    iteamorded = '<img src="https://i.pinimg.com/originals/bd/95/87/bd95876422b820e7c5132e9f4a7ae2ad.png"/>';
}
var NumofOrderd = prompt('How many piece do you want ?')
var Result ='';
for (var i=0 ; i<NumofOrderd ; i++)
{  
      Result=Result+iteamorded;
}
document.write(Result);
