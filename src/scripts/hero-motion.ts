import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const scene = document.querySelector<HTMLElement>('[data-motion-scene]');
const mm = gsap.matchMedia();

mm.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)', () => {
  if (!scene) return;
  const panels = gsap.utils.toArray<HTMLElement>('[data-stage-panel]', scene);
  if (panels.length !== 3) return;
  scene.dataset.motionReady = 'true';
  gsap.set(panels.slice(1), { autoAlpha: 0, y: 35 });
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: scene.querySelector('.scene-pin'),
      start: 'top top',
      end: () => `+=${window.innerHeight * 1.5}`,
      pin: true,
      scrub: .55,
      invalidateOnRefresh: true,
      onUpdate: self => { scene.dataset.stage = self.progress < .32 ? '0' : self.progress < .68 ? '1' : '2'; },
    },
  });
  timeline.to(scene.querySelector('.brief-sheet'), { rotation: 0, scale: .96, duration: .2 }, .08)
    .to(panels[0], { autoAlpha: 0, y: -30, duration: .18 }, .28)
    .to(panels[1], { autoAlpha: 1, y: 0, duration: .2 }, .33)
    .fromTo(scene.querySelector('.idea-art'), { clipPath: 'inset(0 0 100% 0 round 12px)' }, { clipPath: 'inset(0 0 0% 0 round 12px)', duration: .22 }, .33)
    .to(panels[1], { autoAlpha: 0, y: -30, duration: .18 }, .67)
    .to(panels[2], { autoAlpha: 1, y: 0, duration: .2 }, .72)
    .fromTo(scene.querySelector('.launch-art'), { clipPath: 'inset(12% 12% round 12px)', scale: .94 }, { clipPath: 'inset(0% 0% round 12px)', scale: 1, duration: .22 }, .72)
    .to({}, { duration: .16 });
  return () => {
    delete scene.dataset.motionReady;
    scene.dataset.stage = '0';
  };
});

mm.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.fromTo('.hero-picture', { scale: 1 }, {
    scale: 1.055, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
});

// Refresh after font metrics and images settle; no per-frame layout measurement.
document.fonts.ready.then(() => ScrollTrigger.refresh());
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
window.addEventListener('pagehide', () => mm.revert(), { once: true });
window.addEventListener('pageshow', event => { if (event.persisted) window.location.reload(); });
