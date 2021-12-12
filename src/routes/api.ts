const BASE_URL = `https://api.holotools.app/v1/`;

export async function fetchHolo() {
  const response = await fetch(`${BASE_URL}/live`);
  return await response.json();
}