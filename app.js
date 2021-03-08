var names = prompt("Please Enter your name ?")
document.write('Welcome '+ names )
var order = prompt("What do you want MN OR sephora ? ");

function askUser()
{
      while(order != 'MN' && order != 'sephora')
      {   
      order = prompt("What do you want MN OR sephora ? ");  
      }
}

askUser();
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
function displayImages()
{
      for (var i=0 ; i<NumofOrderd ; i++)
      {  
            Result=Result+iteamorded;
      }
      document.write(Result);
}

displayImages();


