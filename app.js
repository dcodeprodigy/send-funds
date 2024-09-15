const footer = document.querySelector("footer");
const closeModalBtn = document.getElementById("close-modal ");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const elements = {
    "accountModal": `<section class="bg-white p-6 rounded-[10px] absolute max-w-[400px] mx-3" id="accountInfoModal"><div class="text-right"><button class="text-xl" id="close-modal ">X</button></div><h2 class="font-bold text-center text-[#141517] text-xl">Account Information</h2><p class="mb-4 text-center">Send the money here make i see food chop, thanks</p><div class="info-container mt-10"><div class="flex justify-between mb-2"><span class="text-start">Name:</span><span class="text-end">Izuchukwu Nwodo</span></div><div class="flex justify-between mb-2"><span class="text-start">Account Number:</span><strong class="text-end">9010623825</strong></div><div class="flex justify-between mb-2"><span class="text-start">Bank Name:</span><span class="text-end">Opay</span></div></div><button class="bg-none border rounded-[32px] w-[100%] p-3 my-6">Sent?</button></section>`
}

// Appending account information modal to page
yesBtn.addEventListener("click", ()=>{
    footer.insertAdjacentHTML("afterend", elements.accountModal);
    activateCloseModal(); 
});
noBtn.addEventListener("click", ()=>{
    footer.insertAdjacentHTML("afterend", elements.accountModal);
    activateCloseModal();
})


// Don't close this modal without sending some funds
function activateCloseModal(){
    closeModalBtn.addEventListener("click", ()=>{
        const accountInfoModal = document.getElementById("accountInfoModal");
        accountInfoModal.classList.toggle("hidden");
    })
}