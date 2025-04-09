const ele = document.getElementById('btn-red');
ele.addEventListener('click',function(even){
    even.target.className = '';
    even.target.className = 'btn-md';
    alert(even.target.className);
});
// create new component
