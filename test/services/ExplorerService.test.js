const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una mision", ()=> {
        const explorers = [{mission: "node"}];
        console.log(explorers);
        
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        console.log(explorersInNode);
        expect(explorersInNode.length).toBe(1);
    });
});