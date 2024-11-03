import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const checkForm = document.querySelector(".form");
const input = document.querySelector('[name="delay"]'); 

    
checkForm.addEventListener("submit", makePromise);

function makePromise(event) {
    event.preventDefault();
    handleSubmit();
}


function handleSubmit() {
    const radio = document.querySelector('input[name="state"]:checked');  
    const delay = input.value;
    const state = radio.value;

    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
                console.log("resolve", delay);
                
            } else {
                reject(delay);
                console.log("reject", delay);

            }
        }, delay);
    })
    promise
        .then((delay) => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: "topRight",
                icon: false,
            });
            checkForm.reset();
        })
        .catch((delay) => {
                iziToast.error({
                    message: `❌ Rejected promise in ${delay}ms`,
                    position: "topRight",
                    icon: false,
                });
            checkForm.reset();
        })

}
