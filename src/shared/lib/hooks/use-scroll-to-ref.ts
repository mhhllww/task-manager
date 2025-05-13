export function useScrollToRef(elementId: string) {
  const element = document.getElementById(elementId);
  return element?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}
