import fs from "fs";
import { BOOKS } from "./src/constants/index.js";

// Read the current content of the README.md file
const readmeContent = fs.readFileSync("README.md", "utf8");

// Define the section delimiter to identify where to update the book titles
const sectionDelimiter = "<!-- BOOK TITLES START -->";

// Find the start and end positions of the section
const start = readmeContent.indexOf(sectionDelimiter) + sectionDelimiter.length;
const end = readmeContent.indexOf("<!-- BOOK TITLES END -->");

// Generate the updated content for the book titles section
const bookTitlesContent = BOOKS.map((book) => `- ${book.title}`).join("\n");
const updatedContent =
  readmeContent.substring(0, start) +
  "\n" +
  bookTitlesContent +
  "\n" +
  readmeContent.substring(end);

// Write the updated content back to the README.md file
fs.writeFileSync("README.md", updatedContent);
