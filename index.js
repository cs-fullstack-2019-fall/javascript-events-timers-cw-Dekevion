let check = document.getElementById('chckbox');

let string = document.getElementById('dont'); // !! : this is a bad variable name 

let type = document.getElementById('input');

let btton = document.getElementById('btton');

// code for number 1
// check.addEventListener('click', function (e) {

//     alert('I told you not to click');
//     e.preventDefault();
// });

// code for number 2
// !! : you should toggle this behaviour 
btton.addEventListener('click',function (e) {
    type.removeAttribute('disabled');
    type.innerHTML = 'Type Something';
});

