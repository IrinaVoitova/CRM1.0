'use strict';



const functional = () => {
    const form = document.querySelector('.modal__form');
    const totalPriceModal = document.querySelector('.add__p_span');
    const tableBody = document.querySelector('.table__body');
    const resetForm = () => {
        form.reset();
        totalPriceModal.textContent = `$ 0`;
    }

    const openModal = () => {
        const btnAdd = document.querySelector('.table__add');
        const overlay = document.querySelector('.overlay');
        const btnExit = document.querySelector('.modal__btn_close');

        const startModal = () => {
            overlay.classList.add('startModal')
        };

        const exitModal = () => {
            overlay.classList.remove('startModal')
            resetForm();
        };

        btnAdd.addEventListener('click', startModal);
        btnExit.addEventListener('click', exitModal);

        const createRow = ({name, category, units, amount, price}) => {

            const tr = document.createElement('tr');
            tr.classList.add('product', 'table__body-row');
        
            const tdId = document.createElement('td');
            tdId.textContent = `ID`;
            tdId.classList.add('table__body-column');

            const tdName = document.createElement('td');
            tdName.textContent = name;
            tdName.classList.add('table__body-column', 'table__body-name');

            const tdCategory = document.createElement('td');
            tdCategory.textContent = category;
            tdCategory.classList.add('table__body-column', 'table__body-category');

            const tdUnits = document.createElement('td');
            tdUnits.textContent = units;
            tdUnits.classList.add('table__body-column', 'table__body-units');

            const tdAmount = document.createElement('td');
            tdAmount.textContent = amount;
            tdAmount.classList.add('table__body-column', 'table__body-amount');

            const tdPrice = document.createElement('td');
            tdPrice.textContent = `$${price}`;
            tdPrice.classList.add('table__body-column', 'table__body-price');

            const tdTotal = document.createElement('td');
            let tdTotal_price = document.createElement('span');
            tdTotal_price.textContent = `${price * amount}`;
            tdTotal_price.classList.add('table__total-price');
            tdTotal.classList.add('table__body-column', 'table__body-total');
            tdTotal.textContent = `$`;
            tdTotal.append(tdTotal_price);

            const tdImg = document.createElement('td');
            const btnImg = document.createElement('button');
            const imgImage = document.createElement('img');
            imgImage.classList.add('body__btn-svg');
            imgImage.src = 'image/img_true.svg';
            btnImg.append(imgImage);
            tdImg.append(btnImg);
            tdImg.classList.add('table__body-column', 'table__body-img');

            const tdEdit = document.createElement('td');
            const btnEdit = document.createElement('button');
            const imgEdit = document.createElement('img');
            imgEdit.classList.add('body__btn-svg');
            imgEdit.src = 'image/icons_edit.svg';
            btnEdit.append(imgEdit);
            tdEdit.append(btnEdit);
            tdEdit.classList.add('table__body-column', 'table__body-correct');

            const tdDelete = document.createElement('td');
            const btnDelete = document.createElement('button');
            const imgDelete = document.createElement('img');
            imgDelete.classList.add('body__btn-svg');
            imgDelete.src = 'image/delete.svg';
            btnDelete.append(imgDelete);
            tdDelete.append(btnDelete);
            tdDelete.classList.add('table__body_btn-delete', 'table__body-column');

            tr.append(tdId, tdName, tdCategory, tdUnits, tdAmount, tdPrice, tdTotal, tdImg, tdEdit, tdDelete);
            return tr;
        };

        const totalSumProduct = document.querySelector('.header__total-sum');
        const rowProduct = document.querySelectorAll('.table__body-row');
        console.log(rowProduct.length);

        const table = document.querySelector('.table');
        const deleteRow = table.addEventListener('click', e => {
            if(e.target.closest('.table__body_btn-delete')) {
                e.target.closest('.table__body-row').remove();
                getTotalSum();
            };
        });

        const getTotalSum = () => {
            const rowTotalPrice = document.querySelectorAll('.table__total-price');

            const arrPrices = [];
            for(let i=0; i<rowTotalPrice.length; i++) {
                const totalPriceNum = Number(rowTotalPrice[i].textContent);
                arrPrices.push(totalPriceNum);
            }
            console.log(arrPrices)
            const totalSum = arrPrices.reduce((a, b) => {
                return a + b;
            }) 
            console.log(totalSum)
            totalSumProduct.textContent = `${totalSum}`;
        };
        getTotalSum();

        const addProductData = product => {
            const newTr = createRow(product);
            tableBody.append(newTr);
        };

        const addNewProduct = () => {   
            const priceModal = document.querySelector('.modal__input_price');
            const amountModal = document.querySelector('.modal__input_amount');
            priceModal.addEventListener('change', function() {
                const totalPrice = amountModal.value * priceModal.value;
                totalPriceModal.textContent = `$ ${totalPrice}`;
            });

            form.addEventListener('submit', e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const newProduct = Object.fromEntries(formData);
                addProductData(newProduct);
                resetForm();
                exitModal();
                getTotalSum();
            });
        };
        addNewProduct();
    };
    openModal();


    const addDiscount = () => {
        const modalInputDiscount = document.querySelector('.modal__input_discount');
        const modalInputCheckbox = document.querySelector('.modal__checkbox');
    
        if (modalInputCheckbox.checked) {
            modalInputDiscount.classList.add('modal__input_discount-checked');
            modalInputDiscount.disabled=false;
        }
        else {
            modalInputDiscount.classList.remove('modal__input_discount-checked');
            modalInputDiscount.disabled=true;
            modalInputDiscount.value = '';
        }
    modalInputCheckbox.addEventListener('click', addDiscount);
    };
    addDiscount();
};

functional()


