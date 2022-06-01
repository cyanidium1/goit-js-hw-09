
const form = document.querySelector('.form')
function kek(event){
  event.preventDefault();
  let el = event.currentTarget.elements;
  let am = Number(el.amount.value);
  let fD = Number(el.delay.value);
  let dS = Number(el.step.value);
  let i = 0;
    setTimeout(() => {
      let fDbase = fD;
        const id = setInterval(() => {
            if (i > am - 2) {
                clearInterval(id)
            }
            const promise = new Promise((resolve, reject) => {
                const mark = Math.random() > 0.3;
                if (mark) {
                resolve(mark);
                }
                reject(mark);
            });
            promise
                .then(result => console.log(`✅ Fulfilled promise ${i} in ${fDbase}ms`))
                .catch(result => console.log(`❌ Rejected promise ${i} in ${fDbase}ms`));
            fDbase += dS;
            i+=1;
        }, dS);
    }, fD);

}


form.addEventListener('submit', kek)