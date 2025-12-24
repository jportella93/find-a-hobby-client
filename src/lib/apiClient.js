import getUniqRandomIntArr from './getUniqRandomIntArr';
import demoHobbies from '../data/demoHobbies';

export const URL = process.env.REACT_APP_API_URL || 'https://find-a-hobby-api.jonportella.com';

const FORCE_DEMO_MODE = String(process.env.REACT_APP_DEMO_MODE || '').toLowerCase() === 'true';
const FETCH_TIMEOUT_MS = 8000;

let token = localStorage.getItem('token');
let demoModeActive = FORCE_DEMO_MODE;

const safeJsonParse = (text) => {
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (_) {
    return null;
  }
};

const readJsonSafely = async (res) => {
  // Some backends return empty bodies or non-JSON errors; avoid throwing.
  try {
    const text = await res.text();
    return safeJsonParse(text);
  } catch (_) {
    return null;
  }
};

const getDemoPostedHobbies = () => {
  try {
    const raw = localStorage.getItem('demoPostedHobbies');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
};

const setDemoPostedHobbies = (hobbies) => {
  try {
    localStorage.setItem('demoPostedHobbies', JSON.stringify(hobbies));
  } catch (_) {
    // ignore
  }
};

const demoAllHobbies = () => [...getDemoPostedHobbies(), ...demoHobbies];

const demoFetch = async (path, originalOptions = {}) => {
  const method = (originalOptions.method || 'GET').toUpperCase();

  if (path === '/hobbies/all' && method === 'GET') {
    return demoAllHobbies();
  }

  if (path === '/hobbies/random' && method === 'GET') {
    const all = demoAllHobbies();
    if (!all.length) return null;
    return all[Math.floor(Math.random() * all.length)];
  }

  if (path.startsWith('/hobbies/rec:') && method === 'GET') {
    // Demo "recommendations": return a shuffled subset.
    const all = demoAllHobbies();
    if (!all.length) return [];
    const idx = getUniqRandomIntArr(all.length);
    return idx.map((i) => all[i]);
  }

  if (path === '/hobbies/like' && method === 'PUT') {
    return { ok: true, demo: true };
  }

  if (path === '/hobbies/dislike' && method === 'PUT') {
    return { ok: true, demo: true };
  }

  if (path === '/hobbies' && method === 'POST') {
    let bodyObj = null;
    try {
      bodyObj = originalOptions.body ? JSON.parse(originalOptions.body) : null;
    } catch (_) {
      bodyObj = null;
    }
    if (!bodyObj) return { ok: false, demo: true };

    const posted = getDemoPostedHobbies();
    const now = Date.now();
    const hobby = {
      ...bodyObj,
      _id: bodyObj._id || `demo-posted-${now}`,
    };
    setDemoPostedHobbies([hobby, ...posted].slice(0, 50));
    return hobby;
  }

  return null;
};

const apiFetch = async (path, originalOptions = {}, ...rest) => {
  if (demoModeActive) return demoFetch(path, originalOptions);

  const url = `${URL}${path}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  const options = {
    ...originalOptions,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...originalOptions.headers,
    },
    signal: controller.signal,
  };

  try {
    const res = await fetch(url, options, ...rest);

    const newToken = res.headers.get('x-token');
    if (newToken) {
      token = newToken;
      localStorage.setItem('token', token);
    }

    const data = await readJsonSafely(res);

    // If the backend is down/misconfigured, fall back to demo mode so Pages deploy still works.
    if (!res.ok) {
      demoModeActive = true;
      return demoFetch(path, originalOptions);
    }

    return data;
  } catch (_) {
    demoModeActive = true;
    return demoFetch(path, originalOptions);
  } finally {
    clearTimeout(timeoutId);
  }
};

const getRandomHobbie = () => apiFetch('/hobbies/random');

const getRandomHobbies = async () => {
  // console.log('token:', token);
  let hobbies = await apiFetch('/hobbies/all');
  // console.log('----',hobbies);

  hobbies = Array.isArray(hobbies) ? hobbies : [];
  const hobbiesLGTH = hobbies.length;
  const randArr = getUniqRandomIntArr(hobbiesLGTH);

  let randomHobbies = [];
  for (let i = 0; i < hobbiesLGTH; i++) {
    randomHobbies.push(hobbies[randArr[i]])
  }

  return randomHobbies;
}

const getRecommendedHobbies = async () => {
  let hobbies = await apiFetch(`/hobbies/rec:${token}`);
  // console.log('now fetching recommended hobbies');
  // console.log(hobbies);

  return Array.isArray(hobbies) ? hobbies : [];
}

const likeHobbie = (hobbyId) => {
  hobbyId = JSON.stringify({hobbyId})
  return apiFetch('/hobbies/like', {
    method: 'PUT',
    body: hobbyId,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

const dislikeHobbie = (hobbyId) => {
  hobbyId = JSON.stringify({hobbyId})
  return apiFetch(`/hobbies/dislike`, {
    method: 'PUT',
    body: hobbyId,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

const postHobby = (hobby) => {
  hobby = JSON.stringify(hobby)
  return apiFetch(`/hobbies`, {
    method: 'POST',
    body: hobby,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export default {
  getRandomHobbie,
  getRandomHobbies,
  getRecommendedHobbies,
  likeHobbie,
  dislikeHobbie,
  postHobby,
};
