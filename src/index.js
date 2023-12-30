const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
   try {
    // Use fs.promises.readFile to read the existing content of the file
    const existingContent = await fs.promises.readFile(fileName, "utf-8");

    // Combine the existing content with the new content to be added
    const updatedContent = `${existingContent.trim()}, ${fileContent.trim()}`;

    // Use fs.promises.writeFile to update the content of the file
    await fs.promises.writeFile(fileName, updatedContent, "utf-8");
  } catch (error) {
    // Handle any errors that might occur during file update
    console.error("Error updating the file:", error.message);
    throw error;
  }
  
};

module.exports = updateFile;
