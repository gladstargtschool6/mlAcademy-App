import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export function getTopics() {
  return axios.get(`${apiUrl}/topics`);
}

export function getLessonsForTopic(id) {
  return axios.get(`${apiUrl}/lessons/`, {
    params: { topic: id },
  });
}

export function getOutput(input) {
  return axios
    .get(`${apiUrl}/compute/`, {
      params: { input },
    })
    .then(res => {
      if (res.data.output === '') {
        return res.data.error_output !== '' ? res.data.error_output : 'No result';
      } else {
        return res.data.output;
      }
    });
}

export function initializeUserWithUid(uid) {
  return axios.post(`${apiUrl}/students/?uid=${uid}&action=create-user`);
}

export function getCompletedTopics(uid) {
  initializeUserWithUid(uid);
  return axios.get(`${apiUrl}/students/`, { params: { uid } }).then(res => res.data.topics);
}

export function addCompletedTopic(uid, id) {
  initializeUserWithUid(uid);
  return axios.post(`${apiUrl}/students/?uid=${uid}&action=add-topic&topic-id=${id}`);
}
