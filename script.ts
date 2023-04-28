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
            let TOTAL_LETTERS: string = LETTERS;
            TOTAL_LETTERS = TOTAL_LETTERS.concat(TOTAL_LETTERS.toUpperCase());
            getTypePass.push(...TOTAL_LETTERS.split(""));
            break;
          case "characters":
            getTypePass.push(...CHARACTERS.split(""));
            break;
          default:
            break;
        }
      }
    });
    GeneratePasswordHTML(8, getTypePass.length);
  });
};
GetConstantPass();

/*
    CREATE RANDOM INDEX BETWEEN CHECKED INPUTS TO SPECIFIC LENGTH
    -- AND --
    GENERATE PASSWORD AFTER CLICK ON BUTTON GENERATE
*/
const GeneratePasswordHTML: Function = (
  sizePass: number = 8,
  randomLength: number
) => {
  let randomIndex: number[] = [];
  for (let i = 0; i < sizePass; i++) {
    randomIndex.push(Math.floor(Math.random() * randomLength));
  }
  randomIndex.forEach((v) => {
    generatePass.push(getTypePass[v]);
  });

  getMyPassHTML.innerHTML = generatePass.join("") || "00000000";
};
