const markReadBtn = document.querySelector(".read-btn");
const notifications = document.querySelector(".notifications-count");
const unreadNotifications = document.querySelectorAll(".unread-notifications");
const redDot = document.querySelectorAll(".red-dot");
markReadBtn.addEventListener("click", ()=>{
notifications.innerHTML = 0;
unreadNotifications.forEach(element=>{ element.classList.remove("unread-notifications");} );
redDot.forEach(element =>{
  element.classList.remove("red-dot");
})
})