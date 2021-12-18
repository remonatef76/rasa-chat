const handleMessageTime = (timestamp) => {
  timestamp = (Date.now() - timestamp) / 1000;
  let minutes = Math.floor(timestamp / 60);

  if (!minutes) {
    if (!Math.floor(timestamp)) {
      return "Just Now";
    }
    return `${Math.floor(timestamp)} seconds ago`;
  }

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  let hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  let days = Math.floor(hours / 24);
  return `${days} days ago`;
};

const addGetLocalstorage = (key, value, action) => {
  if (action === "ADD") {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
  }

  let result = window.localStorage.getItem(key);

  try {
    result = JSON.parse(result);
  } catch (e) {}

  return result;
};

export { handleMessageTime, addGetLocalstorage };
