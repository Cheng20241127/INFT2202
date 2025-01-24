document.getElementById('home').addEventListener('click', () => {
  history.go(1 - history.length);
});

document.getElementById('last').addEventListener('click', () => {
  history.go(history.length - 1);
});

document.getElementById('back').addEventListener('click', () => {
  history.back();
});

document.getElementById('forward').addEventListener('click', () => {
  history.forward();
});

document.getElementById('pushState').addEventListener('click', () => {
  history.pushState({ page: 'about' }, null, '?page=about');
  document.getElementById('content').textContent = 'About Page';
});
//replace current state with new state
document.getElementById('replaceState').addEventListener('click', () => {
  history.replaceState({ page: 'contact' }, null, '?page=contact');
  document.getElementById('content').textContent = 'Contact Page';
});

window.addEventListener('popstate', (event) => {
  const content = document.getElementById('content');
  if (event.state) {
    content.textContent = `${event.state.page.charAt(0).toUpperCase() + event.state.page.slice(1)} Page`;
  } else {
    content.textContent = 'Home';
  }
});

function addPageToHistory(page, state) {
  if (history.state && history.state.page === page) {
    // The page is already the current state, no need to push
    return;
  }
  history.pushState(state, '', page);
}