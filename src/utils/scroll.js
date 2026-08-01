export function getHeaderOffset() {
  const header = document.querySelector('header');
  return header?.offsetHeight ?? 80;
}

export function scrollToSection(id, { behavior = 'smooth' } = {}) {
  const target = document.getElementById(id);
  if (!target) return;

  const top = window.scrollY + target.getBoundingClientRect().top - getHeaderOffset();
  window.scrollTo({ top: Math.max(0, top), behavior });
}
