import axios from "./core";

export const fetch = (word: string): any => {
    return axios.get(word).then(({ data }) => {
        return data;
    });
}