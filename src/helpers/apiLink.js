import axios from 'axios';
import { apiUrl } from '../assets/config';

export function getTopics() {
  return axios.get(`${apiUrl}topics`).catch(error => {
    console.error(error);
  });
}

export function getLessonsForTopic(id) {
  return axios.get(`${apiUrl}lessons/`, {
    params: { topic: id }
  });
}

export function getOutput(input) {
  return axios
    .get(`${apiUrl}compute/`, {
      params: { input: input }
    })
    .then(res => {
      if (res.data.output === '') {
        return res.data.error_output !== '' ? res.data.error_output : 'No result';
      } else {
        return res.data.output;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export function initializeUserWithUid(uid) {
  return axios.post(`${apiUrl}students/?uid=${uid}&action=create-user`);
}

export function getCompletedTopics(uid) {
  return axios.get(`${apiUrl}students/`, { params: { uid: uid } }).then(res => {
    return res.data.topics;
  });
}

export function addCompletedTopic(uid, id) {
  return axios.post(`${apiUrl}students/?uid=${uid}&action=add-topic&topic-id=${id}`);
}
