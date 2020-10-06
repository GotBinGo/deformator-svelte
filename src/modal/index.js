import { writable } from 'svelte/store';


const modal_hosts = {};

export function registerHost(name = 'default') {
  if (modal_hosts[name] !== undefined) {
    throw new Error('Modal Host registration error! - a host already registerd with the same name')
  }
  return modal_hosts[name] = writable([]);
}

export function unregisterHost(name = 'default') {
  modal_hosts[name] = undefined;
}

function removeFrom(token, name) {
  modal_hosts[name].update(x => x.filter(y => y.token !== token));
}

export function open(component /* Component */, options = {}) {
  const token = {};
  const props = options?.props ?? {};
  const name = options?.modalHost ?? 'default';

  if (!modal_hosts[name]) throw new Error('No ModalHost - ' + name);

  let afterClosedCallback = (x) => {};
  const close = (closeParams) => { removeFrom(token, name); afterClosedCallback(closeParams); };

  modal_hosts[name].update(x => [...x, { token, component, props, close }]);

  return {
    close,
    // TODO: handle reject OR never ending Promise?
    afterClosed: () => new Promise((resolve, reject) => (afterClosedCallback = resolve))
  };
}