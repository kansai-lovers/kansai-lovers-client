import "./mocks/NextImage";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value: "#F1F1F1",
      },
    ],
  },
};
