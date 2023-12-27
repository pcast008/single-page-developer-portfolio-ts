export function isEmailValid(emailAddress: string): boolean {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export function isNameValid(name: string): boolean {
  return typeof name === "string" && name.length >= 2 ? true : false;
}

export function isMessageValid(message: string): boolean {
  return message?.length > 0 ? true : false;
}
