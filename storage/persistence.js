import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = 'wildbear_hq_state_v1';

export async function saveAppState(state) {
  try {
    const serialized = JSON.stringify(state);
    await AsyncStorage.setItem(STORAGE_KEY, serialized);
    return true;
  } catch (error) {
    console.error('WildBear HQ save failed:', error);
    return false;
  }
}

export async function loadAppState() {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    return JSON.parse(raw);
  } catch (error) {
    console.error('WildBear HQ load failed:', error);
    return null;
  }
}

export async function resetAppState() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('WildBear HQ reset failed:', error);
    return false;
  }
}

export function createPersistedState({
  mission,
  episodes,
  products,
  tasks,
  pipeline,
  agents,
  revenue,
  hours,
  visitors,
  sales,
  checkIn,
}) {
  return {
    mission,
    episodes,
    products,
    tasks,
    pipeline,
    agents,
    revenue,
    hours,
    visitors,
    sales,
    checkIn,
    updatedAt: new Date().toISOString(),
  };
}
