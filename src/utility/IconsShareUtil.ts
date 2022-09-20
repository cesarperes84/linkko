export const iconsShareUtil = (activeStep: number, statusGame: string) => {
  let icons = "";
  let iconsRest = "";
  let iconsWrong = "";

  for (let i = 1; i < activeStep; i++) {
    iconsWrong = iconsWrong + `🟥`;
  }

  for (let i = 1; i <= 5 - activeStep; i++) {
    iconsRest = iconsRest + `⚪ `;
  }

  if (statusGame === "game-over" && activeStep === 4) {
    icons = `🟥 🟥 🟥 🟥 🟥`;
  } else if (statusGame === "game-over" && activeStep !== 4) {
    icons = iconsWrong + iconsRest;
  } else if (statusGame === "matched") {
    icons = iconsWrong + `✅` + iconsRest;
  }
  return icons;
};
