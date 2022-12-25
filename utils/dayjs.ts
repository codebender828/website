import dayjs from "dayjs";
import LocalizedPlugin from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedPlugin);

const $dayjs = dayjs;

export { $dayjs };
