class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorerItem) => 
            explorerItem.mission === mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission) {

    }

    static getExplorersUsernamesByMission(explorers, mission) {

    }
}

module.exports = ExplorerService