export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function hello(name: string): string {
  return "Hello " + capitalize(name);
}

console.log(hello("matt"));
