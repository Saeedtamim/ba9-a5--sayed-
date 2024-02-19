const allBtn = document.getElementsByClassName('seat-btn');
const totalPrices = document.getElementById('amount-prices');
const applyBtnInputField = document.getElementById('input-id-value');
const nextBtn = document.getElementById('next-btn');
const list = document.getElementById('selected-id-container');
const applyBtnInput = document.getElementById('input-id-value');
const applyBtn = document.getElementById('apply-btn');

let count = 0;
let count2 = 40;
const maxSeats = 4;
let clickCount = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        count2 = count2 - 1;

        // seat-btn
        const seatNumber = allBtn.innerText
        console.log(seatNumber)

        // All boolean
        btn.disabled = true;
        nextBtn.disabled = false;
        applyBtnInputField.disabled = true ;

        // Click condition
        if (count > 4) {

            alert('You can only booked 4 tickets.')
        }
        else {
            btn.classList.add('bg-colour');
            setInnerText('seat-count', count);
            setInnerText('seat-left', count2);
        }

        if( count >= 4){
            applyBtnInputField.disabled = false;
        }

       

        if (count <= 4) {

            const item1 = document.createElement('li');
            item1.innerText = seatNumber;
    
            const item2 = document.createElement('li');
            item2.textContent = 'Economy';
    
            const item3 = document.createElement('li');
            item3.textContent = '550';

            list.appendChild(item1);
            list.appendChild(item2);
            list.appendChild(item3);

            // Total BDT
            const price = document.getElementById('amount-prices').innerText
            const totalPrices = document.getElementById('total-amount').innerText
            const converTotalPrices = parseInt(totalPrices);
            const sum = converTotalPrices + parseInt(price);
            setInnerText('total-amount', sum);
        }
       

        

    })
}


applyBtn.addEventListener('click', function (e) {
    if (applyBtnInput.value === '') {
    }

    // For 15% discount
    else if (applyBtnInput.value === 'NEW15') {
        let totalMainPrice = parseInt(document.getElementById('total-amount').innerText);
        let fifteenPercent = totalMainPrice * 0.15;
        let result = totalMainPrice - fifteenPercent;
        setInnerText('grand-total-amount', result);

        const inputFields1 = document.getElementById('apply-div');
        inputFields1.classList.add('hidden');
    }

    // For 20% discount
    else if (applyBtnInput.value === 'NEW20') {
        let totalMainPrice = parseInt(document.getElementById('total-amount').innerText);
        let twentyPercent = totalMainPrice * 0.20;
        let result = totalMainPrice - twentyPercent;
        setInnerText('grand-total-amount', result);

        const inputFields2 = document.getElementById('apply-div');
        inputFields2.classList.add('hidden')
    }
})

function hidHomeScreen(){
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    const succesfullScreen = document.getElementById('succesfull');
    succesfullScreen.classList.remove('hidden')

}
function hidesuccesfullScreen(){
    const succesfullScreen = document.getElementById('succesfull');
    succesfullScreen.classList.add('hidden')
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.remove('hidden')
}



