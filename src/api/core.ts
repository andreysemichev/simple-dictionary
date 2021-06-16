import axios from "axios";

axios.defaults.baseURL = `https://www.dictionaryapi.com/api/v3/references/learners/json/`;
axios.defaults.params = { key: "f1bc7a24-cde2-4c84-9b89-470fc6a55306" };

export default axios;