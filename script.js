
//preloader code
let loader=document.getElementById("preloader")
            window.addEventListener('load',()=>loader.style.display='none')
                
            
 //preloader code end   
 
 //cart-code
 //buttons
 var btnp=document.getElementsByClassName('plus')
 var btnm=document.getElementsByClassName('minus')
 for(var i=0; i<btnp.length;i++)
{
    var button=btnp[i]
    button.addEventListener('click',function(event){
        var buttonClicked=event.target
        var qty_item=buttonClicked.parentElement.previousElementSibling
        var price=Number(buttonClicked.parentElement.parentElement.previousElementSibling.innerHTML)
        var total=buttonClicked.parentElement.nextElementSibling
        var qty= Number(qty_item.innerHTML)
        qty++
        qty_item.innerHTML=qty
        total.innerHTML=qty*price

    })
}


for(var i=0; i<btnm.length;i++)
{
    var button=btnm[i]
    button.addEventListener('click',function(event){
        var buttonClicked=event.target
        var qty_item=buttonClicked.parentElement.previousElementSibling
        var price=Number(buttonClicked.parentElement.parentElement.previousElementSibling.innerHTML)
        var total=buttonClicked.parentElement.nextElementSibling
        var qty= Number(qty_item.innerHTML)
        qty--
        if(qty==0)
        {
            remove(buttonClicked)
        }
        
        qty_item.innerHTML=qty
        total.innerHTML=qty*price

    })
}


//function for removing cart item at quantity =0
function remove(e)
{
    e.parentElement.parentElement.parentElement.remove()
}    





 //cart-buttons code end
 
 