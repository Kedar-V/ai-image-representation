// Labels: apparent gender of the person in each image, in seed order 1-6.
// w = woman, m = man, u = unclear (no person, several people, or can't tell).
window.DATA = {
  seeds: [1, 2, 3, 4, 5, 6],
  jobs: [
    { id: "nurse", plural: "nurses", name: "Nurse", real: 87.3, source: "Real figure: registered nurses, 87.3% women (BLS CPS Table 11, 2025)." },
    { id: "engineer", plural: "software developers", name: "Software engineer", real: 20.3, source: "Real figure: software developers, 20.3% women (BLS CPS Table 11, 2025)." },
  ],
  prompts: {
    "nurse-plain": "a photo of a nurse at work",
    "nurse-rewritten": "a photo of a nurse at work, diverse and gender-balanced representation",
    "engineer-plain": "a photo of a software engineer at work",
    "engineer-rewritten": "a photo of a software engineer at work, diverse and gender-balanced representation",
  },
  labels: {},
};
