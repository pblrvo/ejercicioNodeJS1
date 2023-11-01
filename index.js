const http = require("http");
const os = require("os");
const fs = require("fs");

const port = 3000;

let specs = {
  Arguments: process.argv,
  Architecture: process.arch,
  WorkingDirectory: process.cwd(),
  CPUUsage: process.cpuUsage(),
  EnvironmentVar: process.env,
  ExecPath: process.execPath,
  MemoryUsage: process.memoryUsage(),
  ProcessPID: process.pid,
  ProcessPlatform: process.platform,
  ResourceUsage: process.resourceUsage(),
  NodeUptime: process.uptime(),
  NodeVersion: process.version,
  LibrariesVersions: process.versions,
  OSUptime: os.uptime(),
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
  const configurationWords = readConfiguration("configuracion.txt");
  let seconds = configurationWords[0];

  const interval = setInterval(() => {
    printSpecs(configurationWords)
  }, Number(seconds)*1000);
});

//Function that searches the specs object's keys and values
function specsReport(specsList, spec) {
  console.log(spec, ": ", specsList[spec]);
  console.log("");
}

//Function that reads the file and returns the split words
function readConfiguration(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data.split(",");
  } catch (error) {
    console.error("Error reading the configuration file:", error);
    return []; // Return an empty array in case of an error
  }
}

function printSpecs(configurationWords) {
  for (let i = 1; i < configurationWords.length; i++) {
    word = configurationWords[i];
    specsReport(specs, word.trim());
  }
}
