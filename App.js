import React from 'react';
import { SafeAreaView, View, Text, ScrollView, StyleSheet } from 'react-native';

const Card = ({ title, text }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardText}>{text}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.logo}>🐻 WildBear OS</Text>
        <Text style={styles.subtitle}>
          AI-powered command center for content, products, life, and automation.
        </Text>

        <Card
          title="🎙 Podcast Studio"
          text="Manage Wind Under the Sea episodes, scripts, and publishing workflows."
        />

        <Card
          title="⚡ Content Machine"
          text="Turn one podcast into TikToks, reels, newsletters, blogs, and clips."
        />

        <Card
          title="📦 Product Lab"
          text="Build workbooks, ebooks, templates, and digital products."
        />

        <Card
          title="🤖 AI Team"
          text="Future AI employees for scripting, editing, promotion, and sales."
        />

        <Card
          title="🌲 Life OS"
          text="Daily structure, focus tracking, habits, routines, and ADHD-friendly systems."
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071018',
  },
  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 100,
  },
  logo: {
    color: '#4FD1C5',
    fontSize: 34,
    fontWeight: '800',
    marginBottom: 10,
  },
  subtitle: {
    color: '#A0AEC0',
    fontSize: 16,
    marginBottom: 24,
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#0F1722',
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1F2A37',
  },
  cardTitle: {
    color: '#F6AD55',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardText: {
    color: '#CBD5E0',
    fontSize: 15,
    lineHeight: 22,
  },
});
