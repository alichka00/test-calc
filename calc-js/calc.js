var str;
 function onClickClear () {
    str = document.getElementById("output");
    str.value="";
}
 function onClickNumber (num) {
    str = document.getElementById("output");
    str.value = str.value + num;
}
 function onclickCalculate () {
    str = document.getElementById("output");
    str.value=eval(str.value);
}