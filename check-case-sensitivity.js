// check-case-sensitivity.js
import fs from "fs";
import path from "path";

const rootDir = "./src"; // your React source directory
const jsExtensions = [".js", ".jsx", ".ts", ".tsx"];

function getAllFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath, files);
    } else if (jsExtensions.includes(path.extname(fullPath))) {
      files.push(fullPath);
    }
  }
  return files;
}

function checkImports(file) {
  const content = fs.readFileSync(file, "utf8");
  const importRegex = /from\s+['"](.+)['"]/g;
  let match;
  const dir = path.dirname(file);
  const errors = [];

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith(".")) {
      const absPath = path.resolve(dir, importPath);
      for (const ext of jsExtensions.concat(["", "/index.js", "/index.jsx"])) {
        const filePath = absPath + ext;
        if (fs.existsSync(filePath)) {
          const actualName = path.basename(filePath);
          const usedName = path.basename(importPath + ext);
          if (actualName !== usedName) {
            errors.push(`❌ Case mismatch in ${file}: import "${importPath}" should be "${actualName.replace(ext, '')}"`);
          }
          break;
        }
      }
    }
  }

  return errors;
}

const allFiles = getAllFiles(rootDir);
let allErrors = [];

for (const file of allFiles) {
  allErrors = allErrors.concat(checkImports(file));
}

if (allErrors.length === 0) {
  console.log("✅ No case-sensitivity issues found!");
} else {
  console.log("⚠️ Case-sensitivity issues detected:\n");
  allErrors.forEach(e => console.log(e));
  process.exit(1);
}
