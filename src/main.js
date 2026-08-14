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
        };
    });

    // timer

    const timer = document.querySelector('.timer');

    const deadline = '2026-09-01';
    function getTimeDifference(endtime) {
        const currentUserTime = new Date();
        const differenceTimeInMs = Date.parse(endtime) - Date.parse(currentUserTime),
              days = Math.floor(differenceTimeInMs / (1000 * 60 * 60 * 24)),
              hours = Math.floor((differenceTimeInMs / (1000 * 60 * 60) % 24)),
              minutes = Math.floor(((differenceTimeInMs / 1000 / 60) % 60)),
              seconds = Math.floor((differenceTimeInMs / 1000) % 60);
        return {
            allTime: differenceTimeInMs, // <= main obj, very important
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };

    function addZeroToTime(n) {
        return (n < 10 && n >= 0) ? `0${n}` : n;
    };

    // set clock in DOM
    function setClock(endtime, selector) {
    
        const clock = document.querySelector(selector),
              days = clock.querySelector('#days'),
              hours = clock.querySelector('#hours'),
              minutes = clock.querySelector('#minutes'),
              seconds = clock.querySelector('#seconds');

        const updateTime = setInterval(updateClock, 1000);

        updateClock();
        function updateClock(endtime) {
            const difference = getTimeDifference(deadline); // function getTimeDefference as variable with obj/name of obj, cause it returnes the obj
            days.innerHTML = addZeroToTime(difference.days);
            hours.innerHTML = addZeroToTime(difference.hours);
            minutes.innerHTML = addZeroToTime(difference.minutes);
            seconds.innerHTML = addZeroToTime(difference.seconds);
            if (difference.allTime <= 0) {
                clearInterval(updateTime);
            };
        };
    };

    setClock(deadline, '.timer');
});