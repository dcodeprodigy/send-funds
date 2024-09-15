const footer = document.querySelector("footer");
const btnContainer = document.getElementById("btnContainer");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const lettersContainer = document.querySelector(".letters-container");
let footerInPage = false;


const elements = {
    "accountModal": `<section class="bg-white p-6 rounded-[10px] fixed max-w-[400px] mx-3 z-50" id="accountInfoModal"><div class="text-right"><button class="text-xl" id="close-modal">X</button></div><h2 class="font-bold text-center text-[#141517] text-xl">Account Information</h2><p class="mb-4 text-center">Send the money here make i see food chop, thanks</p><div class="info-container mt-10"><div class="flex justify-between mb-2"><span class="text-start">Name:</span><span class="text-end">Izuchukwu Nwodo</span></div><div class="flex justify-between mb-2"><span class="text-start">Account Number:</span><strong class="text-end">9010623835</strong></div><div class="flex justify-between mb-2"><span class="text-start">Bank Name:</span><span class="text-end">Opay</span></div></div><button class="bg-none border rounded-[32px] w-[100%] p-3 my-6 hover:bg-slate-100" id="sentBtn">Sent?</button></section><div id="modal-overlay" class="absolute backdrop-blur-sm bg-opacity-50 w-[100vw] h-[100vh] z-0"></div>`,
    "happyGIF": `<img src="/images/happyme.gif" alt="Happy me" class="m-auto">`
}

function displayAccountInfoModal() {
    if (footerInPage === false) {
        footer.insertAdjacentHTML("afterend", elements.accountModal);
        footerInPage = true;
    } else {
        const accountInfoModal = document.getElementById("accountInfoModal");
        const modalOverlay = document.getElementById("modal-overlay");
        accountInfoModal.classList.remove("hidden");
        modalOverlay.classList.remove("hidden");
    }
}

// Don't close this modal without sending some funds
function activateCloseModalCode() {
    const closeModalBtn = document.getElementById("close-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const sentBtn = document.getElementById("sentBtn");
    const accountInfoModal = document.getElementById("accountInfoModal");

    closeModalBtn.addEventListener("click", () => {
        closeModal(modalOverlay,);

        accountInfoModal.classList.add("hidden");
        modalOverlay.classList.add("hidden");

    });

    // Display GIF
    sentBtn.addEventListener("click", () => {
        btnContainer.classList.add("hidden");
        closeModal(modalOverlay, accountInfoModal);
        updatePaidContent(); // thanks for sending
    });
}


// Appending account information modal to page
yesBtn.addEventListener("click", () => {
    displayAccountInfoModal();
    activateCloseModalCode();
});
noBtn.addEventListener("click", () => {
    displayAccountInfoModal();
    activateCloseModalCode();
})



function closeModal(modalOverlay, accountInfoModal) {
    accountInfoModal ? accountInfoModal.classList.add("hidden") : null;
    modalOverlay.classList.add("hidden");
    
};

function updatePaidContent() {
    // Clear the letters container
    const newTxt = "Thanks for saving me!"
    const txtContainer = document.querySelector(".letters-container");
    txtContainer.innerHTML = "";

    // Count number of string characters.
    const newTxtArr = Array.from(newTxt);
    console.log(newTxtArr);
    for (let i = 0; i < newTxtArr.length; i++) {
        let newSpan = document.createElement("span");

        if (newTxtArr[i] === " "){
            newSpan.innerHTML = "";
            txtContainer.textContent += " ";
            txtContainer.appendChild(newSpan);
        } else {
            newSpan.innerHTML = newTxtArr[i];
            txtContainer.appendChild(newSpan);
        }
        console.log(newSpan);
        


    }

    // Add GIF
    lettersContainer.insertAdjacentHTML("afterend", elements.happyGIF);


}
