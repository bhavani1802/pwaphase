function getfile(file,callback)
{
var xhr=new XMLHttpRequest()
xhr.overrideMimeType("Application/json");
xhr.open('GET',file,true);
xhr.onreadystatechange=function()
{
  if(xhr.readyState===4  && xhr.status=="200")
  {
    callback(xhr.responseText);
  }
}
xhr.send(null)
}
getfile("dynamic.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  carer(data.career);
  edu(data.education);
  skills(data.skills);
})
var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro)
{
  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);
  var nam=document.createElement('h2');
  nam.textContent=pro.name;
  left.append(nam);
  var des=document.createElement('h2');
  des.textContent=pro.designation;
  left.append(des);
  var mail=document.createElement('h2');
  mail.textContent=pro.email;
  left.append(mail);
}
function carer(br)
{
  var head=document.createElement('h2');
  head.textContent="Resume";
  right.append(head);
  var bb=document.createElement('hr');
  right.append(bb);
  var hh=document.createElement('h3');
  hh.textContent=br.objective;
  right.append(hh);

}
function edu(c){
  var s=document.createElement('h2');
  s.textContent="Education Details";
  right.append(s);
  var line=document.createElement('hr');
  right.append(line);
  var table=document.createElement('table');
  let row='';
  row+="<tr>"+"<td>"+"sno"+"<td>"+"<td>"+"degree"+"<td>"+"<td>"+"institute"+"<td>"+"<td>"+"yop"+"<td>"
  for(i in c){
    row+="<tr>"+"<td>"+c[i].sno+"<td>"+"<td>"+c[i].degree+"<td>"+"<td>"+c[i].institute+"<td>"+"<td>"+c[i].yop+"<td>"+

  }
  table.innerHTML=row;
  right.appendChild(table);
  main.appendChild(right);

}
function skills(sk){
  var m=document.createElement('h2');
  m.textContent="Technical skills";
  right.append(m);
  var lin=document.createElement('hr');
  right.append(lin);
  var ul=document.createElement('ul');
  right.appendChild(ul);
  for(i in sk){
    var li=document.createElement("li");
    li.textContent=sk[i].info;
    ul.append(li);
  }


}
