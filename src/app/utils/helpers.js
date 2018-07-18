export function fireEvent(node, eventName) {
  let doc = {};
  if (node.ownerDocument) {
    doc = node.ownerDocument;
  } else if (node.nodeType === 9) {
    doc = node;
  }
  if (node.dispatchEvent) {
    let eventClass = '';
    switch (eventName) {
      case 'click':
      case 'mousedown':
      case 'mouseup':
        eventClass = 'MouseEvents';
        break;
      case 'focus':
      case 'change':
      case 'blur':
      case 'select':
        eventClass = 'HTMLEvents';
        break;
      default:
        break;
    }
    const event = doc.createEvent(eventClass);
    event.initEvent(eventName, true, true); // All events created as bubbling and cancelable.

    event.synthetic = true; // allow detection of synthetic events
    // The second parameter says go ahead with the default action
    node.dispatchEvent(event, true);
  } else if (node.fireEvent) {
    // IE-old school style
    const event = doc.createEventObject();
    event.synthetic = true; // allow detection of synthetic events
    node.fireEvent('on' + eventName, event);
  }
}

export function executionEnvironment() {
  const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  return {
    canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen
  };
}

export function loadImages(arr) {
  if (!executionEnvironment().canUseDOM) return Promise.reject(Error('no server rendering for new Image'));

  const createImg = path => {
    const img = new Image();
    img.src = path;
    img.alt = 'img';

    return new Promise(res => {
      if (img.naturalWidth) res(img);

      img.onload = () => res(img);
      img.onerror = () => res(img);
    });
  };

  return Promise.all(arr.map(c => createImg(c)));
}
