import React, { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const COLORS = {
  bg: '#061316',
  panel: '#0B1B22',
  card: '#10262E',
  card2: '#14323A',
  border: '#254853',
  text: '#F4FBFC',
  muted: '#9AB3B8',
  teal: '#52E0D4',
  orange: '#FF9A3D',
  green: '#71E083',
  red: '#FF6B6B',
  yellow: '#FFD166',
};

const TABS = ['HQ', 'Create', 'Products', 'Agents', 'Money'];

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

const starterAgents = [
  { id: 1, name: 'Script Writer', job: 'Turns rough ideas into podcast outlines and episode hooks.', status: 'Ready' },
  { id: 2, name: 'Clip Miner', job: 'Finds short-form moments and writes captions.', status: 'Queued' },
  { id: 3, name: 'Product Builder', job: 'Turns episodes into workbooks, guides, and templates.', status: 'Active' },
  { id: 4, name: 'Revenue Analyst', job: 'Tracks offers, RPH, and next best money move.', status: 'Ready' },
];

function Pill({ children, tone = 'teal' }) {
  const color = tone === 'orange' ? COLORS.orange : tone === 'green' ? COLORS.green : tone === 'red' ? COLORS.red : COLORS.teal;
  return <Text style={[styles.pill, { color, borderColor: color }]}>{children}</Text>;
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Metric({ label, value, sub }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
      {sub ? <Text style={styles.metricSub}>{sub}</Text> : null}
    </View>
  );
}

function Card({ title, children, right }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <Text style={styles.cardTitle}>{title}</Text>
        {right}
      </View>
      {children}
    </View>
  );
}

function ProgressBar({ value }) {
  return (
    <View style={styles.progressTrack}>
      <View style={[styles.progressFill, { width: `${Math.min(100, Math.max(0, value))}%` }]} />
    </View>
  );
}

function EmptyButton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonGhost}>
      <Text style={styles.buttonGhostText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [active, setActive] = useState('HQ');
  const [mission, setMission] = useState('Record one honest idea. Turn it into ten useful assets.');
  const [episodes, setEpisodes] = useState(starterEpisodes);
  const [products, setProducts] = useState(starterProducts);
  const [agents, setAgents] = useState(starterAgents);
  const [revenue, setRevenue] = useState('0');
  const [hours, setHours] = useState('3');

  const projectedValue = useMemo(() => products.reduce((sum, p) => sum + p.price * Math.round(p.progress / 20), 0), [products]);
  const rph = useMemo(() => {
    const rev = Number(revenue || 0);
    const h = Number(hours || 1);
    return h > 0 ? Math.round(rev / h) : 0;
  }, [revenue, hours]);

  const publishNextClip = () => {
    setEpisodes((list) => list.map((e, index) => index === 0 ? { ...e, clips: e.clips + 1, next: 'Clip posted. Pick the next strongest moment.' } : e));
  };

  const advanceProduct = (id) => {
    setProducts((list) => list.map((p) => p.id === id ? { ...p, progress: Math.min(100, p.progress + 8), next: p.progress + 8 >= 100 ? 'Ready to sell' : p.next } : p));
  };

  const activateAgent = (id) => {
    setAgents((list) => list.map((a) => a.id === id ? { ...a, status: a.status === 'Active' ? 'Ready' : 'Active' } : a));
  };

  const renderHQ = () => (
    <>
      <View style={styles.hero}>
        <Text style={styles.brand}>🐻 WILDBEAR.CO</Text>
        <Text style={styles.title}>HQ Command Center</Text>
        <Text style={styles.subtitle}>Your company-of-one cockpit for podcast content, products, AI agents, and revenue per hour.</Text>
      </View>

      <View style={styles.metricsRow}>
        <Metric label="Episodes" value={episodes.length} sub="content fuel" />
        <Metric label="Products" value={products.length} sub="offer stack" />
        <Metric label="Agents" value={agents.filter((a) => a.status === 'Active').length} sub="active now" />
      </View>

      <Section title="Today’s Mission">
        <TextInput value={mission} onChangeText={setMission} multiline placeholder="Type today’s mission" placeholderTextColor={COLORS.muted} style={styles.input} />
        <View style={styles.actionRow}>
          <EmptyButton label="Post a clip" onPress={publishNextClip} />
          <EmptyButton label="Advance top product" onPress={() => advanceProduct(products[0].id)} />
        </View>
      </Section>

      <Section title="Next Best Moves">
        <Card title="1. Create once">
          <Text style={styles.body}>Record or write one high-truth piece of content today.</Text>
        </Card>
        <Card title="2. Slice it everywhere">
          <Text style={styles.body}>Turn it into reels, captions, email, blog bullets, and product notes.</Text>
        </Card>
        <Card title="3. Sell the lesson">
          <Text style={styles.body}>Convert the best idea into a workbook, template, or paid guide.</Text>
        </Card>
      </Section>
    </>
  );

  const renderCreate = () => (
    <Section title="Content Engine">
      {episodes.map((e) => (
        <Card key={e.id} title={e.title} right={<Pill tone={e.status === 'Published' ? 'green' : e.status === 'Draft' ? 'orange' : 'teal'}>{e.status}</Pill>}>
          <Text style={styles.body}>Clips created: {e.clips}</Text>
          <Text style={styles.muted}>Next: {e.next}</Text>
        </Card>
      ))}
      <TouchableOpacity style={styles.primaryButton} onPress={publishNextClip}>
        <Text style={styles.primaryButtonText}>+ Log New Clip</Text>
      </TouchableOpacity>
    </Section>
  );

  const renderProducts = () => (
    <Section title="Product Vault">
      {products.map((p) => (
        <Card key={p.id} title={p.name} right={<Pill tone="orange">${p.price}</Pill>}>
          <ProgressBar value={p.progress} />
          <Text style={styles.body}>{p.progress}% complete</Text>
          <Text style={styles.muted}>Next: {p.next}</Text>
          <EmptyButton label="Advance +8%" onPress={() => advanceProduct(p.id)} />
        </Card>
      ))}
    </Section>
  );

  const renderAgents = () => (
    <Section title="AI Employee Board">
      {agents.map((a) => (
        <Card key={a.id} title={a.name} right={<Pill tone={a.status === 'Active' ? 'green' : 'teal'}>{a.status}</Pill>}>
          <Text style={styles.body}>{a.job}</Text>
          <EmptyButton label={a.status === 'Active' ? 'Pause Agent' : 'Activate Agent'} onPress={() => activateAgent(a.id)} />
        </Card>
      ))}
    </Section>
  );

  const renderMoney = () => (
    <>
      <Section title="Revenue Center">
        <View style={styles.metricsRow}>
          <Metric label="RPH" value={`$${rph}`} sub="revenue/hour" />
          <Metric label="Vault" value={`$${projectedValue}`} sub="rough product value" />
        </View>
        <Text style={styles.label}>Revenue this week</Text>
        <TextInput value={revenue} onChangeText={setRevenue} keyboardType="numeric" placeholder="0" placeholderTextColor={COLORS.muted} style={styles.input} />
        <Text style={styles.label}>Creative hours worked</Text>
        <TextInput value={hours} onChangeText={setHours} keyboardType="numeric" placeholder="3" placeholderTextColor={COLORS.muted} style={styles.input} />
      </Section>

      <Section title="Money Rule">
        <Card title="Protect the founder">
          <Text style={styles.body}>Do strategy, voice, taste, offers, and decisions. Automate admin, formatting, repurposing, tracking, and follow-up.</Text>
        </Card>
      </Section>
    </>
  );

  const renderScreen = () => {
    if (active === 'HQ') return renderHQ();
    if (active === 'Create') return renderCreate();
    if (active === 'Products') return renderProducts();
    if (active === 'Agents') return renderAgents();
    return renderMoney();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>{renderScreen()}</ScrollView>
      <View style={styles.nav}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActive(tab)} style={[styles.navItem, active === tab && styles.navActive]}>
            <Text style={[styles.navText, active === tab && styles.navTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  content: { padding: 18, paddingTop: 48, paddingBottom: 120 },
  hero: { backgroundColor: COLORS.panel, borderWidth: 1, borderColor: COLORS.border, borderRadius: 28, padding: 22, marginBottom: 16 },
  brand: { color: COLORS.teal, fontWeight: '900', letterSpacing: 2, marginBottom: 10 },
  title: { color: COLORS.text, fontSize: 36, lineHeight: 40, fontWeight: '900', letterSpacing: -1 },
  subtitle: { color: COLORS.muted, fontSize: 15, lineHeight: 23, marginTop: 10 },
  metricsRow: { flexDirection: 'row', gap: 10, marginBottom: 14 },
  metric: { flex: 1, backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border, borderRadius: 20, padding: 14 },
  metricValue: { color: COLORS.teal, fontSize: 27, fontWeight: '900' },
  metricLabel: { color: COLORS.text, fontSize: 12, fontWeight: '800', marginTop: 4 },
  metricSub: { color: COLORS.muted, fontSize: 10, marginTop: 2 },
  section: { marginBottom: 16 },
  sectionTitle: { color: COLORS.text, fontSize: 22, fontWeight: '900', marginBottom: 12 },
  card: { backgroundColor: COLORS.card, borderWidth: 1, borderColor: COLORS.border, borderRadius: 22, padding: 18, marginBottom: 12 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 8 },
  cardTitle: { color: COLORS.orange, fontSize: 18, fontWeight: '900', flex: 1 },
  body: { color: COLORS.text, fontSize: 14, lineHeight: 22, marginBottom: 8 },
  muted: { color: COLORS.muted, fontSize: 13, lineHeight: 20, marginBottom: 10 },
  pill: { borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 5, fontSize: 11, fontWeight: '900', overflow: 'hidden' },
  input: { backgroundColor: COLORS.card, borderColor: COLORS.border, borderWidth: 1, borderRadius: 18, color: COLORS.text, padding: 15, minHeight: 52, marginBottom: 12, fontSize: 15 },
  actionRow: { flexDirection: 'row', gap: 10 },
  buttonGhost: { borderWidth: 1, borderColor: COLORS.teal, borderRadius: 16, paddingVertical: 11, paddingHorizontal: 13, alignSelf: 'flex-start', marginTop: 8 },
  buttonGhostText: { color: COLORS.teal, fontWeight: '900' },
  primaryButton: { backgroundColor: COLORS.teal, borderRadius: 18, paddingVertical: 15, alignItems: 'center', marginTop: 4 },
  primaryButtonText: { color: '#041012', fontWeight: '900', fontSize: 16 },
  progressTrack: { height: 10, backgroundColor: '#071E24', borderRadius: 999, overflow: 'hidden', marginBottom: 10 },
  progressFill: { height: 10, backgroundColor: COLORS.teal, borderRadius: 999 },
  label: { color: COLORS.muted, marginBottom: 6, fontWeight: '800' },
  nav: { position: 'absolute', left: 10, right: 10, bottom: 12, backgroundColor: '#071E24', borderColor: COLORS.border, borderWidth: 1, borderRadius: 24, padding: 7, flexDirection: 'row' },
  navItem: { flex: 1, alignItems: 'center', paddingVertical: 11, borderRadius: 17 },
  navActive: { backgroundColor: COLORS.card2 },
  navText: { color: COLORS.muted, fontSize: 11, fontWeight: '900' },
  navTextActive: { color: COLORS.teal },
});
