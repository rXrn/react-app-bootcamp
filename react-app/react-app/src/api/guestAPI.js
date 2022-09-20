const apiGuestURL = "http://localhost:3344/guests";

export async function getAllGuests() {
  const response = await fetch(apiGuestURL);

  return response.json();
}

export async function createGuest(guest) {
  const response = await fetch(apiGuestURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(guest),
  });

  return response.json();
}

export async function deleteGuest(guest) {
  const response = await fetch(apiGuestURL + "/" + guest.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
    // body: JSON.stringify(guest),
  });

  return response.json();
}

export async function updateGuest(guest) {
  const response = await fetch(apiGuestURL + "/" + guest.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(guest),
  });

  return response.json();
}
