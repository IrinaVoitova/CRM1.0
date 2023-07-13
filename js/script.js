'use strict';



const functional = () => {
    const form = document.querySelector('.modal__form');
    const totalPriceModal = document.querySelector('.add__p_span');

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

        const addProductData = product => {
            const tableBody = document.querySelector('.table__body');
            const newTr = document.createElement('tr');
            newTr.classList.add('product');
            tableBody.append(newTr);
            newTr.push(product);
        };

        const addNewProduct = () => {      
            const addProductPage = (product, form) => {
                form.append(product)
            };
      
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
                console.log(newProduct);
                // addProductPage(newProduct);
                // addProductData(newProduct);

                resetForm();
                exitModal();
            });
        };
        addNewProduct();
    };


    const totalSumProduct = document.querySelector('.header__total-sum');
    const rowProduct = document.querySelectorAll('.table__body-row');
    console.log(rowProduct.length);
    const rowTotalPrice = document.querySelectorAll('.table__total-price');

    const getTotalSum = () => {
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


    const table = document.querySelector('.table');
    const deleteRow = table.addEventListener('click', e => {
        if(e.target.closest('.table__body_btn-delete')) {
            e.target.closest('.table__body-row').remove();
            getTotalSum();
        };
    });
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