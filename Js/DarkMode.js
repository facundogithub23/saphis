const SwitchButton = document.getElementById ("swith")
SwitchButton.addEventListener("click",()=>{
    document.body.classList.toggle('dark');
    SwitchButton.classList.toggle('active')

})