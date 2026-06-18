const burger=document.getElementById('burger'),menu=document.getElementById('menu');
  burger.addEventListener('click',()=>menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));

  // Animación al hacer scroll (incluye secciones que ya existían)
  document.querySelectorAll('.grid-serv,.grid-proy,.pasos,.grid-testi,.cifras-grid,.faq-list').forEach(g=>{
    [...g.children].forEach((c,i)=>{c.classList.add('reveal');c.style.transitionDelay=(i%4*60)+'ms';});
  });
  document.querySelectorAll('.sec-head').forEach(s=>s.classList.add('reveal'));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Formulario de presupuesto → abre WhatsApp con los datos
  function enviarPresupuesto(e){
    e.preventDefault();
    const f=e.target;
    const t=`Hola, soy ${f.nombre.value}. Quiero pedir un presupuesto.\n\nTeléfono: ${f.telefono.value}\nEmail: ${f.email.value||'-'}\nServicio: ${f.tipo.value}\n\n${f.mensaje.value}`;
    window.open('https://wa.me/34600000000?text='+encodeURIComponent(t),'_blank');
    return false;
  }
