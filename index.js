let txt = document.getElementById('txt');
let task1 = document.getElementById('task1');
let task2 = document.getElementById('task2');
let task3 = document.getElementById('task3');
let task4 = document.getElementById('task4');
let del1 = document.getElementById('del1');
let del2 = document.getElementById('del2');
let del3 = document.getElementById('del3');
let del4 = document.getElementById('del4');




document.getElementById('my-btn').addEventListener("click", function () {
    if (task1.innerHTML.indexOf('Task-1') != - 1 && txt.value!='')  {
        task1.innerHTML = txt.value;
        txt.value='';
        txt.placeholder = 'Enter a task'
    }
    else if (task1.innerHTML.indexOf('Task-1') == -1 && task2.innerHTML.indexOf('Task-2') != - 1 && txt.value!='') {
        task2.innerHTML = txt.value;
         txt.value='';
        txt.placeholder = 'Enter a task'
    }
    else if (task1.innerHTML.indexOf('Task-1') == -1 &&
        task2.innerHTML.indexOf('Task-2') == -1 &&
        task3.innerHTML.indexOf('Task-3') != - 1 && txt.value!='')  {
        task3.innerHTML = txt.value;
         txt.value='';
        txt.placeholder = 'Enter a task'
    }
    else if (task1.innerHTML.indexOf('Task-1') == -1 &&
        task2.innerHTML.indexOf('Task-2') == -1 &&
        task3.innerHTML.indexOf('Task-3') == - 1 &&
        task4.innerHTML.indexOf('Task-4') != - 1 && txt.value!='') {

        task4.innerHTML = txt.value;
         txt.value='';
        txt.placeholder = 'Enter a task'
    }

});

del1.addEventListener("click", function () {
    if (task1.innerHTML.indexOf('Task-1') == - 1) {
        task1.innerHTML = "Task-1";
    }
});
del2.addEventListener("click", function () {
    if (task2.innerHTML.indexOf('Task-2') == - 1) {
        task2.innerHTML = "Task-2";
    }
});

del3.addEventListener("click", function () {
    if (task3.innerHTML.indexOf('Task-3') == - 1) {
        task3.innerHTML = "Task-3";
    }
});

del4.addEventListener("click", function () {
    if (task4.innerHTML.indexOf('Task-4') == - 1) {
        task4.innerHTML = "Task-4";
    }
});
 
edit1 = document.getElementById('edit1');
edit1.addEventListener('click',function(){
    if (task1.innerHTML.indexOf('Task-1') == - 1){
        txt.placeholder = 'EDIT TASK';
        
         if (txt.value ==''){
            alert('you cant submit empty text'); return false;
         }
         task1.innerHTML = txt.value;
         txt.placeholder = 'Enter a task';
         txt.value='';
    }
  
})
edit2 = document.getElementById('edit2');
edit2.addEventListener('click',function(){
    if (task2.innerHTML.indexOf('Task-2') == - 1){
        txt.placeholder = 'EDIT TASK';
        
         if (txt.value ==''){
            alert('you cant submit empty text'); return false;
         }
         task2.innerHTML = txt.value;
         txt.placeholder = 'Enter a task';
         txt.value='';
    }
  
})
edit3 = document.getElementById('edit3');
edit3.addEventListener('click',function(){
    if (task3.innerHTML.indexOf('Task-3') == - 1){
        txt.placeholder = 'EDIT TASK';
        
         if (txt.value ==''){
            alert('you cant submit empty text'); return false;
         }
         task3.innerHTML = txt.value;
         txt.placeholder = 'Enter a task';
         txt.value='';
    }
  
})
edit4 = document.getElementById('edit4');
edit4.addEventListener('click',function(){
    if (task4.innerHTML.indexOf('Task-4') == - 1){
        txt.placeholder = 'EDIT TASK';
        
         if (txt.value ==''){
            alert('you cant submit empty text'); return false;
         }
         task4.innerHTML = txt.value;
         txt.placeholder = 'Enter a task';
         txt.value='';
    }
  
}); 






