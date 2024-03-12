import {BankAndGo_backend} from "../../declarations/BankAndGo_backend";

window.addEventListener("load",async ()=>{
    const currentAmount = Math.round(await BankAndGo_backend.checkBalance(),2);
    document.querySelector("#value").innerText = currentAmount;
});

document.querySelector("form").addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = e.target.querySelector("#submit-btn");
    
    if(document.getElementById("input-amount").value.length != 0){
        const inamount = parseFloat(document.getElementById("input-amount").value);       

        button.setAttribute("disabled",true);
        button.innerText="Processing...";

        await BankAndGo_backend.topUp(inamount);
    } 
    if (document.getElementById("withdrawal-amount").value.length != 0) {
        const outamount = parseFloat(document.getElementById("withdrawal-amount").value);

        button.setAttribute("disabled",true);
        button.innerText="Processing...";
        
        await BankAndGo_backend.withdraw(outamount);
    }
    const currentAmount = Math.round(await BankAndGo_backend.checkBalance(),2);
    document.querySelector("#value").innerText = currentAmount;
    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";
    button.removeAttribute("disabled");
    button.innerHTML="Finalize Transaction";  
});