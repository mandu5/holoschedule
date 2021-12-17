const BASE_URL = `https://api.holotools.app/v1`;

export async function fetchLive() {
  const response = await fetch(`${BASE_URL}/live`);
  const json = await response.json();
  return json.live;
}
export async function fetchUpcoming() {
  const response = await fetch(`${BASE_URL}/live?max_upcoming_hours=48`);
  const json = await response.json();
  return json.upcoming;
}
export async function fetchChannels() {
  const response = await fetch(`${BASE_URL}/channels?limit=50`);
  const json = await response.json();
  return json.channels;
}