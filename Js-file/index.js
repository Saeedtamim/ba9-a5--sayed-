const allBtn = document.getElementsByClassName('seat-btn');
const totalPrices = document.getElementById('amount-prices')
let count = 0;
let count2 = 40;
const maxSeats = 4;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        count2 = count2 - 1;
        btn.disabled = true;

        if (count > 4) {
            alert('asdfsd')
        }
        else {
            btn.classList.add('bg-colour');
            setInnerText('seat-count', count);
            setInnerText('seat-left', count2);

        }

        const list = document.getElementById('selected-id-container');

        // Create new list items
        const item1 = document.createElement('li');
        item1.textContent = 'A1';

        const item2 = document.createElement('li');
        item2.textContent = 'Economy';

        const item3 = document.createElement('li');
        item3.textContent = '550';

        // Append list items to the list
        list.appendChild(item1);
        list.appendChild(item2);
        list.appendChild(item3);

        const price = document.getElementById('amount-prices').innerText
        const totalPrices = document.getElementById('total-amount').innerText
        const converTotalPrices = parseInt(totalPrices);
        const sum = converTotalPrices + parseInt(price);

        setInnerText('total-amount', sum);

    })
}
const applyBtnInput = document.getElementById('input-id-value');
const applyBtn = document.getElementById('apply-btn')
applyBtn.addEventListener('click', function (e) {
    if (applyBtnInput.value === '') {
    }
    else if (applyBtnInput.value === 'NEW15') {
        let totalMainPrice = parseInt(document.getElementById('total-amount').innerText);
        let fifteenPercent = totalMainPrice * 0.15;
        let result = totalMainPrice - fifteenPercent;
        setInnerText('grand-total-amount', result);

        const inputFields1 = document.getElementById('apply-div');
        inputFields1.classList.add('hidden');


    }
    else if (applyBtnInput.value === 'NEW20') {
        let totalMainPrice = parseInt(document.getElementById('total-amount').innerText);
        let twentyPercent = totalMainPrice * 0.20;
        let result = totalMainPrice - twentyPercent;
        setInnerText('grand-total-amount', result);

        const inputFields2 = document.getElementById('apply-div');
        inputFields2.classList.add('hidden')
    }
})



