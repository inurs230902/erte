const flexRowSet = (justify = "center", align = "center", gap = "0px") => {
  return `
    display: flex;
    flex-direction: row;
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `;
};

const flexColumnSet = (justify = "center", align = "center", gap = "0px") => {
  return `
    display: flex;
    flex-direction: column;
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `;
};

const inlineFlexRowSet = (
  justify = "center",
  align = "center",
  gap = "0px"
) => {
  return `
    display: inline-flex;
    flex-direction: row;
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `;
};

const inlineFlexColumnSet = (
  justify = "center",
  align = "center",
  gap = "0px"
) => {
  return `
    display: inline-flex;
    flex-direction: column;
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
  `;
};

export const flex = {
  flexRowSet,
  flexColumnSet,
  inlineFlexRowSet,
  inlineFlexColumnSet,
};
