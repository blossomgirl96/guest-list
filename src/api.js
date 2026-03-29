const COHORT = "2601-ftb-ct-web-pt";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/guests`;

export async function fetchGuests() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.data;
}

export async function fetchGuest(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json.data;
}
