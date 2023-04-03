export const parseHTML = (html: string): HTMLElement => {
  const elem = document.createElement("div");
  elem.innerHTML = html.trim();
  const parsed = elem.firstChild;

  if (parsed instanceof HTMLElement) {
    return parsed;
  }
  throw new Error(`parse error: ${html}`);
};
