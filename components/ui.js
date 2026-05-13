import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

const EMPTY_STYLES = {};

export function Pill({ children, tone = 'teal', styles = EMPTY_STYLES }) {
  const color = tone === 'orange' ? COLORS.orange : tone === 'green' ? COLORS.green : tone === 'red' ? COLORS.red : tone === 'yellow' ? COLORS.yellow : COLORS.teal;
  return <Text style={[styles.pill, { color, borderColor: color }]}>{children}</Text>;
}

export function Section({ title, children, styles = EMPTY_STYLES }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export function Metric({ label, value, sub, styles = EMPTY_STYLES }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
      {sub ? <Text style={styles.metricSub}>{sub}</Text> : null}
    </View>
  );
}

export function Card({ title, children, right, styles = EMPTY_STYLES }) {
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

export function ProgressBar({ value, styles = EMPTY_STYLES }) {
  return (
    <View style={styles.progressTrack}>
      <View style={[styles.progressFill, { width: `${Math.min(100, Math.max(0, value))}%` }]} />
    </View>
  );
}

export function GhostButton({ label, onPress, danger = false, styles = EMPTY_STYLES }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonGhost, danger && styles.buttonDanger]}>
      <Text style={[styles.buttonGhostText, danger && styles.buttonDangerText]}>{label}</Text>
    </TouchableOpacity>
  );
}

export function PrimaryButton({ label, onPress, styles = EMPTY_STYLES }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}
