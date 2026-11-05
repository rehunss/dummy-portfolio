const menu = document.querySelector<HTMLDialogElement>('#site-menu');
const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
if (menu && toggle) {
  const close = () => menu.close();
  toggle.addEventListener('click', () => {
    menu.showModal();
    document.body.classList.add('modal-open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.querySelector<HTMLButtonElement>('.menu-close')?.focus();
  });
  menu.querySelector('.menu-close')?.addEventListener('click', close);
  menu.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus({ preventScroll: true });
  });
  menu.querySelectorAll('nav a, .wordmark').forEach(link => link.addEventListener('click', close));
}

const brief = document.querySelector<HTMLDialogElement>('#brief-dialog');
const briefTrigger = document.querySelector<HTMLButtonElement>('[data-open-brief]');
if (brief && briefTrigger) {
  briefTrigger.addEventListener('click', () => {
    brief.showModal();
    document.body.classList.add('modal-open');
  });
  brief.querySelector('[data-close-brief]')?.addEventListener('click', () => brief.close());
  brief.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    briefTrigger.focus({ preventScroll: true });
  });
  const form = brief.querySelector<HTMLFormElement>('form');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const text = `MY NEXT MOVE — PROJECT BRIEF\n\nName: ${values.get('name')}\nProject: ${values.get('type')}\nGoal: ${values.get('goal')}\nTimeline: ${values.get('timeline')}\n\nPrepared with the Arka Pradana fictional portfolio demo.\nThis file was created on your device. Nothing was sent or saved to a server.\n`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url; a.download = 'my-project-brief.txt'; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    const status = brief.querySelector<HTMLElement>('[role="status"]');
    if (status) status.textContent = 'Your brief is ready. Downloaded to your device; nothing was sent.';
  });
}
