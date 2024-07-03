document.addEventListener('DOMContentLoaded', function() {
var button = document.querySelector('.menu-button');
var button2 = document.getElementById('menu-button');
var cover = document.querySelector('.menu-cover');
var resume =document.getElementById('re');
var insta =document.getElementById('re2');
var link =document.getElementById('re3');
var gaps =document.querySelector('.menu-item1');
var menu_items =document.querySelector('.menu-item2');
var toggle =document.querySelector(".toggle");
var res_menu=document.querySelector('.res-ul');
var skill_items=document.querySelector(".skill-items");
var top1=document.getElementById('top1');
var top2=document.getElementById('top2');
var top3=document.getElementById('top3');
var about_items=document.querySelector(".about-items");
var about=document.querySelector(".about");
var lable_1=document.getElementById('la1');
var lable_2=document.getElementById('la2');
var lable_3=document.getElementById('la3');
var pro_1=document.getElementById('project1');
var pro_2=document.getElementById('project2');
var pro_3=document.getElementById('project3');
var contact=document.querySelectorAll(".co1");
var image_item=document.querySelector(".image-item");
var welcome=document.querySelector(".welcome");
var project=document.querySelector('.projects');
var id_project1=document.getElementById('project1');
var id_project2=document.getElementById('project2');
var id_project3=document.getElementById('project3');
var contacts=document.querySelector('.contact-me');
var w=document.getElementById("w1");

button.onclick=function(){
    gaps.classList.add('active');
    resume.classList.add('active');
    menu_items.classList.add('active');
    button.style.display="none";
    button2.style.display="block";
      cover.style.display="block";
      insta.classList.add('active');
      link.classList.add('active');

      gaps.classList.remove('active2');
      resume.classList.remove('active2');
menu_items.classList.remove('active2');
insta.classList.remove('active2');
link.classList.remove('active2');
}
button2.onclick=function(){
        gaps.classList.remove('active')
        resume.classList.remove('active');
        menu_items.classList.remove('active');
        button.style.display="block";
        button2.style.display="none";
          cover.style.display="none";
          insta.classList.remove('active');
          link.classList.remove('active');


          gaps.classList.add('active2');
          resume.classList.add('active2');
   menu_items.classList.add('active2');
   insta.classList.add('active2');
   link.classList.add('active2');
}
toggle.onclick=function(){
 res_menu.classList.toggle('active');
 toggle.classList.toggle('active');
}
window.addEventListener('scroll', function() {
 

  if (window.scrollY > 200) {
    
  skill_items.classList.add('active');
  top1.classList.add('active');
  top2.classList.add('active');
  top3.classList.add('active');

  }
 
else if(window.scrollY <200){
  skill_items.classList.remove('active');
  top1.classList.remove('active');
  top2.classList.remove('active');
  top3.classList.remove('active');
 
}
if(window.scrollY > 450){
  about_items.classList.add('active');
  about.classList.add('active');
  
}
else if(window.scrollY < 450){
  about_items.classList.remove('active');
  about.classList.remove('active');
}
if(window.scrollY > 1100){
  lable_1.classList.add('active');
  lable_2.classList.add('active');
  lable_3.classList.add('active');
  pro_1.classList.add('active');
  pro_2.classList.add('active');
  pro_3.classList.add('active'); 
   project.classList.add('active');
   id_project1.classList.add('active');
   id_project2.classList.add('active');
   id_project3.classList.add('active');
}
else if(window.scrollY < 1000){
  lable_1.classList.remove('active');
  lable_2.classList.remove('active');
  lable_3.classList.remove('active');
  pro_1.classList.remove('active');
  pro_2.classList.remove('active');
  pro_3.classList.remove('active');
  project.classList.remove('active');
  id_project1.classList.remove('active');
  id_project2.classList.remove('active');
  id_project3.classList.remove('active');
}
if (contact.length > 0) {
  if (window.scrollY > 1450) {
    contact.forEach(function (element) {
      element.classList.add("active");
    });
    contacts.classList.add("active");
  }
  else if(window.scrollY < 1450){
    contact.forEach(function (element) {
      element.classList.remove("active");
    });
    contacts.classList.remove("active");
  }

}
});
window.addEventListener('load', function() {
  welcome.classList.add('active');
  image_item.classList.add('active');
  w.classList.add('active');
  skills.classList.add('active');
  pro_welcome.classList.add('active');
});

});/* 

  
 else {
  
}
*/