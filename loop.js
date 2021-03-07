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
      iteamorded = '<img src="/Images/mn.jpeg" />';
}
else 
{    
    iteamorded = '<img src="/Images/sephora.png" />';
}
var NumofOrderd = prompt('How many piece do you want ?')
var Result ='';
for (var i=0 ; i<NumofOrderd ; i++)
{  
      Result=Result+iteamorded;
}
document.write(Result);
