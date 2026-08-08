document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // animated forecast chart
  const actualPts = [[20,150],[55,145],[90,152],[125,130],[160,138],[195,112],[230,108],[260,100]];
  const forecastPts = [[260,100],[300,90],[340,96],[380,72],[420,66],[460,50]];
  const bandUpper = [[260,100],[300,72],[340,70],[380,40],[420,28],[460,10]];
  const bandLower = [[260,100],[300,108],[340,120],[380,104],[420,116],[460,110]];

  function toPath(pts){
    return pts.map((p,i)=> (i===0? 'M':'L') + p[0] + ',' + p[1]).join(' ');
  }
  function toBandPath(upper, lower){
    return toPath(upper) + ' ' + lower.slice().reverse().map(p=>'L'+p[0]+','+p[1]).join(' ') + ' Z';
  }

  window.addEventListener('DOMContentLoaded', () => {
    const actualPath = document.getElementById('actualPath');
    const forecastPath = document.getElementById('forecastPath');
    const bandPath = document.getElementById('bandPath');

    setTimeout(() => {
      actualPath.setAttribute('d', toPath(actualPts));
    }, 150);
    setTimeout(() => {
      forecastPath.setAttribute('d', toPath(forecastPts));
      bandPath.setAttribute('d', toBandPath(bandUpper, bandLower));
    }, 750);
  });

  // contact form — actually submits to Netlify Forms
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const form = this;
    const msg = document.getElementById('formMsg');
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    })
    .then(() => {
      msg.textContent = "Thanks — we've received your request and will follow up within 1 business day.";
      msg.classList.add('show','success');
      form.reset();
    })
    .catch(() => {
      msg.textContent = "Something went wrong — please try again or email us directly.";
      msg.classList.add('show');
      msg.style.background = '#FBE4E1';
      msg.style.color = '#B3392B';
      msg.style.border = '1px solid #B3392B';
    });
  });
