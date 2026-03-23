/* ============================================
   北斗金融 Beidou Financial — 全站脚本
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 移动端导航切换 ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    // 点击链接后关闭菜单
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  /* ---------- 滚动进场动画（Intersection Observer） ---------- */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback：直接显示
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ---------- 导航栏滚动阴影 ---------- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,.3)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }

  /* ---------- 表单模拟提交 ---------- */
  const form = document.querySelector('.booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary');
      const origText = btn.textContent;
      btn.textContent = '提交成功！';
      btn.style.background = '#22C55E';
      btn.style.borderColor = '#22C55E';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
        form.reset();
      }, 2000);
    });
  }

});
