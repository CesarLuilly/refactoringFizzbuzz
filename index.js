const Reader = require("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json")
//  //console.log(explorers)

//  //Aplicacion de ExplorerService sobre la lista de explorer

console.log(ExplorerService.filterByMission(explorers, "node"));

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");