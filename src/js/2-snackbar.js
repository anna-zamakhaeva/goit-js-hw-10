import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const submitBtn = document.querySelector("button");
const checkForm = document.querySelector(".form");

checkForm.addEventListener("submit", makePromise);




const makePromise = ({ value, delay, shouldResolve = true }) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
			if(shouldResolve) {
				resolve(value)
			} else {
				reject(value)
			}
		}, delay);
});
};
makePromise();


new Promise((resolve, reject) => {
    setTimeout(() => {
        if (input.value) {
            resolve(`✅ Fulfilled promise in ${delay}ms`);
        } else {
            reject(`❌ Rejected promise in ${delay}ms`)
        }
    }), delay
})