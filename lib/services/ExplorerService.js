class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorerItem) => 
            explorerItem.mission === mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        const usernamesInNode = explorersInNode.map((explorer) => explorer.githubUsername);
        return usernamesInNode;   
    }
}

module.exports = ExplorerService