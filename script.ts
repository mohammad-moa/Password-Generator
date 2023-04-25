// VARIABLES
const BTNGeneratePass = document.querySelector(
  "#generate-pass"
) as HTMLButtonElement;

const getMyPassHTML = document.querySelector(".my-pass") as HTMLSpanElement;

const totalCheckTypePass: NodeListOf<HTMLInputElement> =
  document.querySelectorAll("#total-pass input");

let getTypePass: string[] = [];

let generatePass: (string | undefined)[] = [];

// CONSTANTS
const NUMBERS: string = "1234567890";
const LETTERS: string = "abcdefghijklmnopqrstuvwxyz";
const CHARACTERS: string = "~!@#$%^&*()/|_:;";

// GET DATA PASSWORD FROM CONSTANTS WHEN CHECKED INPUTS (SINGLE OR MULTIPLE)
const GetConstantPass: Function = () => {
  BTNGeneratePass.addEventListener("click", () => {
    getMyPassHTML.innerHTML = "";
    getTypePass = [];
    generatePass = [];
    totalCheckTypePass.forEach((val) => {
      if (val.checked) {
        switch (val.name) {
          case "numbers":
            getTypePass.push(...NUMBERS.split(""));
            break;
          case "letters":
            getTypePass.push(...LETTERS.split(""));
            break;
          case "characters":
            getTypePass.push(...CHARACTERS.split(""));
            break;
          default:
            break;
        }
      }
    });
  });
};
GetConstantPass();
