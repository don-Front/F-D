import { useEffect, useState } from 'react';

import { getHeaderOffset } from '@/utils/scroll';

function resolveActiveSection(sectionIds) {
  if (!sectionIds.length) return '';

  const scrollBottom = window.scrollY + window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollBottom >= docHeight - 4) {
    return sectionIds[sectionIds.length - 1];
  }

  const offset = getHeaderOffset() + 12;
  let activeId = sectionIds[0];

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top - offset <= 0) {
      activeId = id;
    }
  }

  return activeId;
}

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setActiveId(resolveActiveSection(sectionIds));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sectionIds]);

  return activeId;
}
