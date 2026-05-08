import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const TABS = ['Home', 'Create', 'Products', 'Team', 'Life', 'Money'];

const COLORS = {
  bg: '#071018',
  card: '#0F1722',
  card2: '#16202D',
  border: '#263241',
  text: '#F7FAFC',
  muted: '#A0AEC0',
  teal: '#4FD1C5',
  orange: '#F6AD55',
  green: '#68D391',
};

const screenData = {
  Home: [
    ['Today Mission', 'Create one valuable asset, then let the system turn it into many smaller assets.'],
    ['Next Best Action', 'Pick one episode or product and move it one clear step forward.'],
    ['Founder Rule', 'You handle voice, vision, and decisions. The system handles repeatable work.'],
  ],
  Create: [
    ['The Wind Under the Sea', 'Episode planning, script drafts, hooks, clips, and publishing prep.'],
    ['Content Queue', 'TikTok ideas, YouTube Shorts, newsletters, blogs, and quote posts.'],
    ['Repurpose Flow', 'One long episode becomes many useful pieces of content.'],
  ],
  Products: [
    ['Breaking to Begin Workbook', '7-day guide connected to the podcast ecosystem. Progress: 72%.'],
    ['Stillness in Motion eBook', 'Core digital product for stress, balance, and inner strength. Progress: 64%.'],
    ['Podcast to Profit Template', 'Future creator template for turning audio into income. Progress: 18%.'],
  ],
  Team: [
    ['Script Writer', 'Drafts podcast outlines, intros, captions, and descriptions.'],
    ['Clip Builder', 'Finds short-form moments and turns them into social posts.'],
    ['Product Builder', 'Turns episodes into workbooks, templates, and digital offers.'],
    ['Automation Manager', 'Connects workflows between sheets, email, content, and publishing.'],
  ],
  Life: [
    ['Morning Reset', 'Water, movement, short planning, and one clear mission.'],
    ['Focus Sprint', 'Work in simple blocks. Fewer tabs, clearer wins.'],
    ['Evening Review', 'What moved forward? What gets easier tomorrow?'],
  ],
  Money: [
    ['RPH Focus', 'Maximize revenue per hour by doing high-leverage creative work.'],
    ['Product Stack', 'Build low-maintenance digital products from podcast ideas.'],
    ['Automation Goal', 'Reduce manual work and protect creative energy.'],
  ],
};

function Header({ active }) {
  return (
    <View style={styles.header}>
      <Text style={styles.brand}>🐻 WildBear OS</Text>
      <Text style={styles.title}>{active}</Text>
      <Text style={styles.subtitle}>Solo-founder command center for media, products, automation, and focus.</Text>
    </View>
  );
}

function Card({ title, text }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
}

function Metric({ value, label }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

export default function App() {
  const [active, setActive] = useState('Home');
  const items = screenData[active];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header active={active} />

        {active === 'Home' && (
          <View style={styles.metricsRow}>
            <Metric value="1" label="main mission" />
            <Metric value="3" label="products" />
            <Metric value="4" label="AI roles" />
          </View>
        )}

        {items.map(([title, text]) => (
          <Card key={title} title={title} text={text} />
        ))}
      </ScrollView>

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
  content: { padding: 20, paddingTop: 58, paddingBottom: 120 },
  header: { marginBottom: 18 },
  brand: { color: COLORS.teal, fontSize: 18, fontWeight: '900', marginBottom: 10 },
  title: { color: COLORS.text, fontSize: 38, fontWeight: '900', letterSpacing: -1 },
  subtitle: { color: COLORS.muted, fontSize: 16, lineHeight: 24, marginTop: 8 },
  metricsRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  metric: { flex: 1, backgroundColor: COLORS.card, borderColor: COLORS.border, borderWidth: 1, borderRadius: 18, padding: 14 },
  metricValue: { color: COLORS.teal, fontSize: 28, fontWeight: '900' },
  metricLabel: { color: COLORS.muted, fontSize: 11, marginTop: 4 },
  card: { backgroundColor: COLORS.card, borderRadius: 22, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: COLORS.border },
  cardTitle: { color: COLORS.orange, fontSize: 21, fontWeight: '800', marginBottom: 8 },
  cardText: { color: '#CBD5E0', fontSize: 15, lineHeight: 23 },
  nav: { position: 'absolute', left: 10, right: 10, bottom: 12, backgroundColor: '#0A121C', borderColor: COLORS.border, borderWidth: 1, borderRadius: 24, padding: 7, flexDirection: 'row' },
  navItem: { flex: 1, alignItems: 'center', paddingVertical: 10, borderRadius: 17 },
  navActive: { backgroundColor: COLORS.card2 },
  navText: { color: COLORS.muted, fontSize: 10, fontWeight: '800' },
  navTextActive: { color: COLORS.teal },
});
