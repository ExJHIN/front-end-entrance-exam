export function saveContent(element) {
  const key = element.getAttribute('data-key');
  localStorage.setItem(key, element.innerHTML);
}

export function loadContent() {
  document.querySelectorAll('[contenteditable]').forEach((element) => {
    const key = element.getAttribute('data-key');
    if (localStorage.getItem(key)) {
      element.innerHTML = localStorage.getItem(key);
    }
  });
}
