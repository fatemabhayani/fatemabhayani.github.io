function revealEmail(user, domain){
  const a = document.getElementById('email-link');
  a.href = "mailto:" + user + "@" + domain;
  a.querySelector('span').textContent = user + "@" + domain;
  a.classList.add('revealed');
}