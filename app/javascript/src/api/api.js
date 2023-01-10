const baseURL = "http://127.0.0.1:3000/api/v1/";

const api = {
  fetchMessage: async () => {
    const response = await fetch(`${baseURL}messages`);
    const { message: message } = await response.json();

    return message;
  },
};

export default api;
