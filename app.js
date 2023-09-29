const inp=document.getElementById('inp');
const btn=document.getElementById('add');
const list=document.getElementById('list');
btn.onclick=function(e){
    const todoText=inp.value;
    const li=document.createElement('li');
    const i1=document.createElement('i')
    i1.setAttribute('class','fa-solid fa-circle-xmark');
    const i2=document.createElement('i')
    i2.setAttribute('class','fa-solid fa-pen-to-square');
    const i3=document.createElement('i')
    i3.setAttribute('class','fa-solid fa-arrow-down');
    const i4=document.createElement('i')
    i4.setAttribute('class','fa-solid fa-arrow-up');
    const icon=document.createElement('div');
    icon.setAttribute('class','icon')
    icon.append(i4);
    icon.append(i3);
    icon.append(i2);
    icon.append(i1);
    const span=document.createElement('span');
    span.innerText=todoText;
    li.append(span);
    li.append(icon);
    






    i1.onclick=function(e){
        console.log(e.target);
        li.remove();

    }
    list.append(li);
    inp.value=" ";
}