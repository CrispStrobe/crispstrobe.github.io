const editor = document.querySelector('#editor');
const fallback = document.querySelector('#fallback');
const suffix = location.search + location.hash;
editor.href += suffix;
fallback.href += suffix;
try {
  const response = await fetch('/brickwright/brickwright-pages.json', {cache: 'no-store'});
  if (response.ok && (await response.json()).repositoryId === 1291854269) {
    location.replace(editor.href);
  }
} catch (error) {
  // Keep both links available until the new Pages editor is online.
}
