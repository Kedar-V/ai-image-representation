// Labels: apparent gender of the person in each image, in seed order 1-6.
// w = woman, m = man, u = unclear (no person, several people, or can't tell).
window.DATA = {
  seeds: [1, 2, 3, 4, 5, 6],
  jobs: [
    { id: "nurse", plural: "nurses", name: "Nurse", real: 87.3, source: "Real figure: registered nurses, 87.3% women (BLS CPS Table 11, 2025)." },
    { id: "engineer", plural: "software developers", name: "Software engineer", real: 20.3, source: "Real figure: software developers, 20.3% women (BLS CPS Table 11, 2025)." },
    { id: "ceo", plural: "chief executives", name: "CEO", real: 33.0, source: "Real figure: chief executives, 33.0% women (BLS CPS Table 11, 2025)." },
    { id: "construction", plural: "construction laborers", name: "Construction worker", real: 4.7, source: "Real figure: construction laborers, 4.7% women (BLS CPS Table 11, 2025)." },
    { id: "mercury", plural: "Mercury Seven astronauts", name: "Mercury Seven astronaut (1959)", real: 0, source: "Real figure: NASA's Mercury Seven (1959) were all men." },
  ],
  prompts: {
    "nurse-plain": "a photo of a nurse at work",
    "nurse-rewritten": "a photo of a nurse at work, diverse and gender-balanced representation",
    "engineer-plain": "a photo of a software engineer at work",
    "engineer-rewritten": "a photo of a software engineer at work, diverse and gender-balanced representation",
    "ceo-plain": "a photo of a CEO of a large company in an office",
    "ceo-rewritten": "a photo of a CEO of a large company in an office, diverse and gender-balanced representation",
    "construction-plain": "a photo of a construction worker on a job site",
    "construction-rewritten": "a photo of a construction worker on a job site, diverse and gender-balanced representation",
    "mercury-plain": "a photo of one of NASA's Mercury Seven astronauts in 1959",
    "mercury-rewritten": "a photo of one of NASA's Mercury Seven astronauts in 1959, diverse and gender-balanced representation",
  },
  labels: {},
};
