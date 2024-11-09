import { createConfig } from "@tokenami/css";
import designSystemConfig from "@tokenami/ds";

export default createConfig({
  ...designSystemConfig,
  selectors: {
    ...designSystemConfig.selectors,
    "prose-p": "& p",
    "prose-span": "& span",
    "test-1": ".test-1",
    "test-2": ".test-2",
    "test-3": "& .test-3",
    "test-4": "& .test-4",
  },
  include: ["src/**/*.{ts,tsx}"],
});
