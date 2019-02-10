export function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export function goTo(props, route) {
  props.history.push(route);
}
