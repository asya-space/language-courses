'use strict';
import './scss/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    const parentTab = document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabcontent = document.querySelectorAll('.tabcontent');

    function hideTabs() {
        tabcontent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        }); // this function only hide tabs (without any choice)

        tabs.forEach((item) => {
            item.classList.remove('active');
        })
    };

    hideTabs();

    function showTabs(n = 0) {
        tabcontent[n].classList.add('show', 'fade');
        tabcontent[n].classList.remove('hide');
        tabs[n].classList.add('active');
    };

    showTabs();

    parentTab.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, index) => {
                if (event.target === item) { // compare element with target (it is needed to be THE SAME!)
                    hideTabs();
                    showTabs(index); // I need to find number of current tub (index)
                };
            });
        }
    })
})