let name1 = prompt("Введите первое число", " ");
let action = prompt("Введите действие( + - * / )" , "");
let name2 = prompt("Введите второе число", " ");
function isNumeric(name1,name2) {
      return !isNaN(parseFloat(name1,name2)) && isFinite(name1,name2);
 }
if(!isNumeric(name1,name2))
{alert('Error');
}
   else  if (action!=='+'||action!=='-'||action!=='*'||action!=='/') {
      alert('Error');
      }
  if (action === '+') { 
  result = name1 + name2;
  alert(result);
}
else if (action === '-') {
  result = name1 - name2;
  alert(result);
 }
else if (action=== '*') {
  result = name1 * name2;
  alert(result);
}
else if (action === '/') {
  if(name2==='0'){
    alert('Infinity');
  }
  result = name1 / name2;
  alert(result);
 }
 



