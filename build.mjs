import sass from "sass";
import { writeFile } from "fs/promises";

const result = sass.compile("./src/styles/main.scss", {});

await writeFile("./cdn/web-component.css", result.css, "utf8");
