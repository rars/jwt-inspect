export default {
  output: {
    format: "umd",
    name: "jwt-inspect",
  },
  external: [],
  onwarn: (warning) => {
    const skip_codes = ["THIS_IS_UNDEFINED", "MISSING_GLOBAL_NAME"];
    if (skip_codes.indexOf(warning.code) != -1) {
      return;
    }
    console.error(warning);
  },
};
