// const chart = document.querySelector("#chart").getContext('2d');

// new Chart(chart, {
//     type: 'line',
//     data: {
//         labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

//         datasets: [
//             {
//                 label: 'BTC',
//                 data: [29374, 33537, 49631, 59895, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
//                 borderColor: 'red',
//                 borderWidth: 2
//             },
//             {
//                 label: 'ETH',
//                 data: [33537, 49631, 59895, 57828, 36684, 33572, 39974, 48847, 48116, 61004, 29374],
//                 borderColor: 'blue',
//                 borderWidth: 2
//             },
//         ]
//     },
//     options : {
//         responsive: true
//     }
// })

// SHOW HIDE SIDEBAR
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// Change Color
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');  
    themeBtn.querySelector('span:last-child').classList.toggle('active');  
})

$(".sidebar").hover(
    function() {
        $(this).addClass('hovered');
    }, function() {
        if(!$(this).hasClass('clicked') ){
            $(this).removeClass('hovered');
        }
    }
);

$(".sidebar").click(function(e){
    e.preventDefault(); 
    e.stopPropagation;
    $('.clicked:not(:hover)').removeClass('clicked hovered');
    $(this).addClass('clicked');
});

