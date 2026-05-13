export const STARTER_MISSION = 'Record one honest idea. Turn it into ten useful assets.';

export const STARTER_CHECK_IN = {
  energy: '7',
  focus: 'Build the machine',
  win: '',
};

export const starterEpisodes = [
  { id: 1, title: 'The Loneliness of Functioning', status: 'Published', clips: 8, next: 'Post 2 follow-up reels' },
  { id: 2, title: 'What You’re Actually Chasing', status: 'Repurpose', clips: 5, next: 'Turn best quote into TikTok' },
  { id: 3, title: 'The Performance Architecture', status: 'Draft', clips: 0, next: 'Finish hook and description' },
];

export const starterProducts = [
  { id: 1, name: 'Breaking to Begin Workbook', progress: 72, price: 17, next: 'Finish final Canva polish' },
  { id: 2, name: 'Stillness in Motion eBook', progress: 64, price: 27, next: 'Add Gumroad sales copy' },
  { id: 3, name: 'Podcast to Profit Template', progress: 18, price: 47, next: 'Outline template sections' },
];

export const starterTasks = [
  { id: 1, title: 'Record one 20 minute episode segment', area: 'Create', done: false },
  { id: 2, title: 'Turn best idea into a paid worksheet', area: 'Products', done: false },
  { id: 3, title: 'Post one honest TikTok invite', area: 'Marketing', done: true },
];

export const starterPipeline = [
  { id: 1, asset: 'Episode 5 master audio', stage: 'Clip', owner: 'Clip Miner', value: '50+ shorts' },
  { id: 2, asset: 'Loneliness of Functioning newsletter', stage: 'Script', owner: 'Script Writer', value: 'email list' },
  { id: 3, asset: 'Breaking to Begin offer page', stage: 'Offer', owner: 'Product Builder', value: '$17 workbook' },
  { id: 4, asset: 'Founder intro TikTok', stage: 'Post', owner: 'Marketing Agent', value: 'audience trust' },
];

export const starterAgents = [
  { id: 1, name: 'Script Writer', objective: 'Turn raw ideas into podcast scripts, hooks, and descriptions.', queue: 3, throughput: 7, completed: 12, status: 'Ready' },
  { id: 2, name: 'Clip Miner', objective: 'Extract short-form moments, captions, and post angles from long audio.', queue: 5, throughput: 9, completed: 28, status: 'Active' },
  { id: 3, name: 'Product Builder', objective: 'Convert podcast ideas into workbooks, templates, and digital offers.', queue: 2, throughput: 6, completed: 5, status: 'Active' },
  { id: 4, name: 'Revenue Analyst', objective: 'Watch RPH, conversion, offer gaps, and next best monetization moves.', queue: 1, throughput: 4, completed: 3, status: 'Ready' },
];
