const apiLockerURL = "http://localhost:3344/lockers";

export async function getAllLockers() {
  const response = await fetch(apiLockerURL);

  return response.json();
}

export async function createLocker(locker) {
  const response = await fetch(apiLockerURL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(locker),
  });

  return response.json();
}

export async function deleteLocker(locker) {
  const response = await fetch(apiLockerURL + "/" + locker.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "DELETE",
    // body: JSON.stringify(guest),
  });

  return response.json();
}

export async function putShoes(locker) {
  const response = await fetch(apiLockerURL + "/" + locker.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(locker),
  });

  return response.json();
}

export async function takeShoes(locker) {
  const response = await fetch(apiLockerURL + "/" + locker.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(locker),
  });

  return response.json();
}

export async function closeLocker(locker) {
  const response = await fetch(apiLockerURL + "/" + locker.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(locker),
  });

  return response.json();
}

export async function openLocker(locker) {
  const response = await fetch(apiLockerURL + "/" + locker.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(locker),
  });

  return response.json();
}
