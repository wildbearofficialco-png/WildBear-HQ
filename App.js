import React, { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const COLORS = { bg: '#061316', panel: '#0B1B22', card: '#10262E', card2: '#14323A', border: '#254853', text: '#F4FBFC', muted: '#9AB3B8', teal: '#52E0D4', orange: '#FF9A3D', green: '#71E083', red: '#FF6B6B', yellow: '#FFD166' };
const TABS = ['HQ', 'Create', 'Pipeline', 'Products', 'Tasks', 'Money'];
const today = new Date().toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
const stages = ['Idea', 'Script', 'Record', 'Edit', 'Clip', 'Post', 'Offer'];
const nextStage = (stage) => stages[Math.min(stages.length - 1, stages.indexOf(stage) + 1)];

const starterEpisodes = [
  { id: 1, title: 'The Loneliness of Functioning', status: 'Published', clips: 8, next: 'Post 2 follow-up reels' },
  { id: 2, title: 'What You’re Actually Chasing', status: 'Repurpose', clips: 5, next: 'Turn best quote into TikTok' },
  { id: 3, title: 'The Performance Architecture', status: 'Draft', clips: 0, next: 'Finish hook and description' },
];
const starterProducts = [
  { id: 1, name: 'Breaking to Begin Workbook', progress: 72, price: 17, next: 'Finish final Canva polish' },
  { id: 2, name: 'Stillness in Motion eBook', progress: 64, price: 27, next: 'Add Gumroad sales copy' },
  { id: 3, name: 'Podcast to Profit Template', progress: 18, price: 47, next: 'Outline template sections' },
];
const starterTasks = [
  { id: 1, title: 'Record one 20 minute episode segment', area: 'Create', done: false },
  { id: 2, title: 'Turn best idea into a paid worksheet', area: 'Products', done: false },
  { id: 3, title: 'Post one honest TikTok invite', area: 'Marketing', done: true },
];
const starterPipeline = [
  { id: 1, asset: 'Episode 5 master audio', stage: 'Clip', owner: 'Clip Miner', value: '50+ shorts' },
  { id: 2, asset: 'Loneliness of Functioning newsletter', stage: 'Script', owner: 'Script Writer', value: 'email list' },
  { id: 3, asset: 'Breaking to Begin offer page', stage: 'Offer', owner: 'Product Builder', value: '$17 workbook' },
  { id: 4, asset: 'Founder intro TikTok', stage: 'Post', owner: 'Marketing Agent', value: 'audience trust' },
];
const starterAgents = [
  { id: 1, name: 'Script Writer', job: 'Turns rough ideas into podcast outlines and episode hooks.', status: 'Ready' },
  { id: 2, name: 'Clip Miner', job: 'Finds short-form moments and writes captions.', status: 'Active' },
  { id: 3, name: 'Product Builder', job: 'Turns episodes into workbooks, guides, and templates.', status: 'Active' },
  { id: 4, name: 'Revenue Analyst', job: 'Tracks offers, RPH, and next best money move.', status: 'Ready' },
];

function Pill({ children, tone = 'teal' }) { const color = tone === 'orange' ? COLORS.orange : tone === 'green' ? COLORS.green : tone === 'red' ? COLORS.red : tone === 'yellow' ? COLORS.yellow : COLORS.teal; return <Text style={[styles.pill, { color, borderColor: color }]}>{children}</Text>; }
function Section({ title, children }) { return <View style={styles.section}><Text style={styles.sectionTitle}>{title}</Text>{children}</View>; }
function Metric({ label, value, sub }) { return <View style={styles.metric}><Text style={styles.metricValue}>{value}</Text><Text style={styles.metricLabel}>{label}</Text>{sub ? <Text style={styles.metricSub}>{sub}</Text> : null}</View>; }
function Card({ title, children, right }) { return <View style={styles.card}><View style={styles.cardTop}><Text style={styles.cardTitle}>{title}</Text>{right}</View>{children}</View>; }
function ProgressBar({ value }) { return <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${Math.min(100, Math.max(0, value))}%` }]} /></View>; }
function GhostButton({ label, onPress }) { return <TouchableOpacity onPress={onPress} style={styles.buttonGhost}><Text style={styles.buttonGhostText}>{label}</Text></TouchableOpacity>; }
function PrimaryButton({ label, onPress }) { return <TouchableOpacity onPress={onPress} style={styles.primaryButton}><Text style={styles.primaryButtonText}>{label}</Text></TouchableOpacity>; }

export default function App() {
  const [active, setActive] = useState('HQ');
  const [mission, setMission] = useState('Record one honest idea. Turn it into ten useful assets.');
  const [episodes, setEpisodes] = useState(starterEpisodes);
  const [products, setProducts] = useState(starterProducts);
  const [tasks, setTasks] = useState(starterTasks);
  const [pipeline, setPipeline] = useState(starterPipeline);
  const [agents, setAgents] = useState(starterAgents);
  const [revenue, setRevenue] = useState('0');
  const [hours, setHours] = useState('3');
  const [visitors, setVisitors] = useState('100');
  const [sales, setSales] = useState('0');
  const [newEpisode, setNewEpisode] = useState('');
  const [newProduct, setNewProduct] = useState('');
  const [newTask, setNewTask] = useState('');
  const [newAsset, setNewAsset] = useState('');
  const [checkIn, setCheckIn] = useState({ energy: '7', focus: 'Build the machine', win: '' });

  const doneTasks = tasks.filter(t => t.done).length;
  const activeAgents = agents.filter(a => a.status === 'Active').length;
  const projectedValue = useMemo(() => products.reduce((sum, p) => sum + p.price * Math.round(p.progress / 20), 0), [products]);
  const rph = useMemo(() => { const rev = Number(revenue || 0); const h = Number(hours || 1); return h > 0 ? Math.round(rev / h) : 0; }, [revenue, hours]);
  const conversion = useMemo(() => { const v = Number(visitors || 0); const s = Number(sales || 0); return v > 0 ? ((s / v) * 100).toFixed(1) : '0.0'; }, [visitors, sales]);
  const stageCounts = useMemo(() => stages.map(stage => ({ stage, count: pipeline.filter(p => p.stage === stage).length })), [pipeline]);
  const bottleneck = useMemo(() => stageCounts.reduce((max, item) => item.count > max.count ? item : max, stageCounts[0]), [stageCounts]);
  const nextOpenTask = tasks.find(t => !t.done)?.title || 'Create the next revenue-producing asset';
  const commandBrief = `${bottleneck.stage} is the bottleneck. Move one asset forward, then complete: ${nextOpenTask}.`;
  const momentum = Math.min(100, Math.round((doneTasks * 15) + (activeAgents * 10) + (pipeline.filter(p=>p.stage === 'Post' || p.stage === 'Offer').length * 10) + (episodes.reduce((s,e)=>s+e.clips,0) * 2)));

  const publishNextClip = () => setEpisodes(list => list.map((e, i) => i === 0 ? { ...e, clips: e.clips + 1, next: 'Clip posted. Pick the next strongest moment.' } : e));
  const advanceProduct = (id) => setProducts(list => list.map(p => p.id === id ? { ...p, progress: Math.min(100, p.progress + 8), next: p.progress + 8 >= 100 ? 'Ready to sell' : p.next } : p));
  const toggleTask = (id) => setTasks(list => list.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const addEpisode = () => { if (!newEpisode.trim()) return; setEpisodes([{ id: Date.now(), title: newEpisode.trim(), status: 'Draft', clips: 0, next: 'Write hook, outline, and promo angle' }, ...episodes]); setNewEpisode(''); };
  const addProduct = () => { if (!newProduct.trim()) return; setProducts([{ id: Date.now(), name: newProduct.trim(), progress: 5, price: 27, next: 'Define promise, buyer, and first outline' }, ...products]); setNewProduct(''); };
  const addTask = () => { if (!newTask.trim()) return; setTasks([{ id: Date.now(), title: newTask.trim(), area: active, done: false }, ...tasks]); setNewTask(''); };
  const addAsset = () => { if (!newAsset.trim()) return; setPipeline([{ id: Date.now(), asset: newAsset.trim(), stage: 'Idea', owner: 'Founder', value: 'unknown' }, ...pipeline]); setNewAsset(''); };
  const moveAsset = (id) => setPipeline(list => list.map(item => item.id === id ? { ...item, stage: nextStage(item.stage) } : item));

  const renderHQ = () => <><View style={styles.hero}><Text style={styles.brand}>🐻 WILDBEAR.CO • {today}</Text><Text style={styles.title}>Command Mode</Text><Text style={styles.subtitle}>Podcast-first media company cockpit for content, products, automation, and RPH.</Text><ProgressBar value={momentum} /><Text style={styles.muted}>Momentum score: {momentum}/100</Text></View><View style={styles.metricsRow}><Metric label="Episodes" value={episodes.length} sub="content fuel" /><Metric label="Tasks" value={`${doneTasks}/${tasks.length}`} sub="done" /><Metric label="Bottleneck" value={bottleneck.stage} sub={`${bottleneck.count} assets`} /></View><Section title="Operator Briefing"><Card title="Next Best Move" right={<Pill tone="yellow">Auto</Pill>}><Text style={styles.body}>{commandBrief}</Text><GhostButton label="Open Pipeline" onPress={() => setActive('Pipeline')} /></Card></Section><Section title="Today’s Mission"><TextInput value={mission} onChangeText={setMission} multiline placeholder="Type today’s mission" placeholderTextColor={COLORS.muted} style={styles.input} /><View style={styles.actionRow}><GhostButton label="Post a clip" onPress={publishNextClip} /><GhostButton label="Add pipeline asset" onPress={() => setActive('Pipeline')} /></View></Section><Section title="Daily Check-In"><Card title="Founder State" right={<Pill tone="yellow">Energy {checkIn.energy}/10</Pill>}><Text style={styles.label}>Energy</Text><TextInput value={checkIn.energy} onChangeText={(v)=>setCheckIn({...checkIn, energy:v})} keyboardType="numeric" style={styles.input} /><Text style={styles.label}>Focus</Text><TextInput value={checkIn.focus} onChangeText={(v)=>setCheckIn({...checkIn, focus:v})} style={styles.input} /><Text style={styles.label}>Today’s win</Text><TextInput value={checkIn.win} onChangeText={(v)=>setCheckIn({...checkIn, win:v})} placeholder="What moved forward?" placeholderTextColor={COLORS.muted} style={styles.input} /></Card></Section></>;
  const renderCreate = () => <Section title="Content Engine"><Card title="Add Episode"><TextInput value={newEpisode} onChangeText={setNewEpisode} placeholder="Episode title" placeholderTextColor={COLORS.muted} style={styles.input} /><PrimaryButton label="+ Add Episode" onPress={addEpisode} /></Card>{episodes.map(e => <Card key={e.id} title={e.title} right={<Pill tone={e.status === 'Published' ? 'green' : e.status === 'Draft' ? 'orange' : 'teal'}>{e.status}</Pill>}><Text style={styles.body}>Clips created: {e.clips}</Text><Text style={styles.muted}>Next: {e.next}</Text><GhostButton label="Log Clip" onPress={() => setEpisodes(list => list.map(x => x.id === e.id ? {...x, clips:x.clips+1, status:'Repurpose'} : x))} /></Card>)}</Section>;
  const renderPipeline = () => <Section title="Repurpose Pipeline"><Card title="Pipeline Health" right={<Pill tone="yellow">Bottleneck: {bottleneck.stage}</Pill>}><Text style={styles.body}>Move assets from idea to offer. The machine only pays when ideas become visible and buyable.</Text><View style={styles.stageRail}>{stageCounts.map(s => <Text key={s.stage} style={styles.stageChip}>{s.stage}: {s.count}</Text>)}</View></Card><Card title="Add Asset"><TextInput value={newAsset} onChangeText={setNewAsset} placeholder="Audio, video, idea, email, offer..." placeholderTextColor={COLORS.muted} style={styles.input} /><PrimaryButton label="+ Add to Pipeline" onPress={addAsset} /></Card>{pipeline.map(item => <Card key={item.id} title={item.asset} right={<Pill tone={item.stage === 'Offer' ? 'green' : item.stage === 'Post' ? 'yellow' : 'teal'}>{item.stage}</Pill>}><Text style={styles.body}>Owner: {item.owner}</Text><Text style={styles.muted}>Value: {item.value}</Text><GhostButton label={item.stage === 'Offer' ? 'Already at Offer' : `Move to ${nextStage(item.stage)}`} onPress={() => moveAsset(item.id)} /></Card>)}</Section>;
  const renderProducts = () => <Section title="Product Vault"><Card title="Add Product"><TextInput value={newProduct} onChangeText={setNewProduct} placeholder="Product name" placeholderTextColor={COLORS.muted} style={styles.input} /><PrimaryButton label="+ Add Product" onPress={addProduct} /></Card>{products.map(p => <Card key={p.id} title={p.name} right={<Pill tone="orange">${p.price}</Pill>}><ProgressBar value={p.progress} /><Text style={styles.body}>{p.progress}% complete</Text><Text style={styles.muted}>Next: {p.next}</Text><GhostButton label="Advance +8%" onPress={() => advanceProduct(p.id)} /></Card>)}</Section>;
  const renderTasks = () => <Section title="Task Board"><Card title="Capture New Task"><TextInput value={newTask} onChangeText={setNewTask} placeholder="What needs to move forward?" placeholderTextColor={COLORS.muted} style={styles.input} /><PrimaryButton label="+ Add Task" onPress={addTask} /></Card>{tasks.map(t => <TouchableOpacity key={t.id} onPress={() => toggleTask(t.id)}><Card title={t.title} right={<Pill tone={t.done ? 'green' : 'orange'}>{t.done ? 'Done' : 'Open'}</Pill>}><Text style={styles.muted}>Area: {t.area}</Text><Text style={styles.body}>{t.done ? 'Completed. Good bear paw print.' : 'Tap card to mark complete.'}</Text></Card></TouchableOpacity>)}</Section>;
  const renderMoney = () => <><Section title="Revenue Center"><View style={styles.metricsRow}><Metric label="RPH" value={`$${rph}`} sub="revenue/hour" /><Metric label="Conv." value={`${conversion}%`} sub="sales/visitors" /><Metric label="Vault" value={`$${projectedValue}`} sub="rough value" /></View><Text style={styles.label}>Revenue this week</Text><TextInput value={revenue} onChangeText={setRevenue} keyboardType="numeric" placeholder="0" placeholderTextColor={COLORS.muted} style={styles.input} /><Text style={styles.label}>Creative hours worked</Text><TextInput value={hours} onChangeText={setHours} keyboardType="numeric" placeholder="3" placeholderTextColor={COLORS.muted} style={styles.input} /><Text style={styles.label}>Offer page visitors</Text><TextInput value={visitors} onChangeText={setVisitors} keyboardType="numeric" style={styles.input} /><Text style={styles.label}>Sales</Text><TextInput value={sales} onChangeText={setSales} keyboardType="numeric" style={styles.input} /></Section><Section title="Offer Ladder"><Card title="Free → Low Ticket → Core Offer"><Text style={styles.body}>Podcast clip builds trust. Free guide captures email. Workbook sells the first transformation. Course/template stack raises RPH.</Text></Card></Section></>;
  const renderScreen = () => active === 'HQ' ? renderHQ() : active === 'Create' ? renderCreate() : active === 'Pipeline' ? renderPipeline() : active === 'Products' ? renderProducts() : active === 'Tasks' ? renderTasks() : renderMoney();
  return <SafeAreaView style={styles.container}><ScrollView contentContainerStyle={styles.content}>{renderScreen()}</ScrollView><View style={styles.nav}>{TABS.map(tab => <TouchableOpacity key={tab} onPress={() => setActive(tab)} style={[styles.navItem, active === tab && styles.navActive]}><Text style={[styles.navText, active === tab && styles.navTextActive]}>{tab}</Text></TouchableOpacity>)}</View></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg }, content: { padding: 18, paddingTop: 48, paddingBottom: 126 }, hero: { backgroundColor: COLORS.panel, borderWidth: 1, borderColor: COLORS.border, borderRadius: 28, padding: 22, marginBottom: 16 }, brand: { color: COLORS.teal, fontWeight: '900', letterSpacing: 2, marginBottom: 10 }, title: { color: COLORS.text, fontSize: 36, lineHeight: 40, fontWeight: '900', letterSpacing: -1 }, subtitle: { color: COLORS.muted, fontSize: 15, lineHeight: 23, marginTop: 10, marginBottom: 14 }, metricsRow: { flexDirection: 'row', gap: 10, marginBottom: 14 }, metric: { flex: 1, backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border, borderRadius: 20, padding: 12 }, metricValue: { color: COLORS.teal, fontSize: 21, fontWeight: '900' }, metricLabel: { color: COLORS.text, fontSize: 11, fontWeight: '800', marginTop: 4 }, metricSub: { color: COLORS.muted, fontSize: 9, marginTop: 2 }, section: { marginBottom: 16 }, sectionTitle: { color: COLORS.text, fontSize: 22, fontWeight: '900', marginBottom: 12 }, card: { backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border, borderRadius: 22, padding: 18, marginBottom: 12 }, cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 8 }, cardTitle: { color: COLORS.orange, fontSize: 18, fontWeight: '900', flex: 1 }, body: { color: COLORS.text, fontSize: 14, lineHeight: 22, marginBottom: 8 }, muted: { color: COLORS.muted, fontSize: 13, lineHeight: 20, marginBottom: 10 }, pill: { borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5, fontSize: 11, fontWeight: '900', overflow: 'hidden' }, input: { backgroundColor: COLORS.card2, borderColor: COLORS.border, borderWidth: 1, borderRadius: 18, color: COLORS.text, padding: 15, minHeight: 52, marginBottom: 12, fontSize: 15 }, label: { color: COLORS.muted, marginBottom: 6, fontWeight: '800' }, actionRow: { flexDirection: 'row', gap: 10, flexWrap: 'wrap' }, buttonGhost: { borderWidth: 1, borderColor: COLORS.teal, borderRadius: 16, paddingVertical: 11, paddingHorizontal: 13, alignSelf: 'flex-start', marginTop: 8 }, buttonGhostText: { color: COLORS.teal, fontWeight: '900' }, primaryButton: { backgroundColor: COLORS.teal, borderRadius: 18, paddingVertical: 15, alignItems: 'center', marginTop: 4 }, primaryButtonText: { color: '#041012', fontWeight: '900', fontSize: 16 }, progressTrack: { height: 10, backgroundColor: '#071E24', borderRadius: 999, overflow: 'hidden', marginBottom: 10 }, progressFill: { height: 10, backgroundColor: COLORS.teal, borderRadius: 999 }, stageRail: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 6, marginBottom: 8 }, stageChip: { color: COLORS.muted, borderColor: COLORS.border, borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 6, fontSize: 11, fontWeight: '800' }, nav: { position: 'absolute', left: 8, right: 8, bottom: 10, backgroundColor: '#071E24', borderColor: COLORS.border, borderWidth: 1, borderRadius: 24, padding: 6, flexDirection: 'row' }, navItem: { flex: 1, alignItems: 'center', paddingVertical: 11, borderRadius: 17 }, navActive: { backgroundColor: COLORS.card2 }, navText: { color: COLORS.muted, fontSize: 9, fontWeight: '900' }, navTextActive: { color: COLORS.teal }
});
