export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export function parseJson(jsonString){

  try{

    return JSON.parse(jsonString);
  } catch(errors){

    throw new ParseError("Bro, there is a mistake.")
  }
}
// END
