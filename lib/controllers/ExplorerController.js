const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/reader");
const BotService= require('../bot');

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static applyFizzbuzz(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static GetFizzbuzzTelegram(){
        const explorers= Reader.readJsonFile("explorers.json")
        const numberToApplyFb= BotService.FizzbuzzTelegram()
        return numberToApplyFb
    }

    static GetExplorersFilterMissionTelegram(){
        const explorers= Reader.readJsonFile("explorers.json")
        const getExplorersUsernamesByMission= BotService.GetExplorersFilterMissionTelegram(explorers)
        return getExplorersUsernamesByMission
    }
}

module.exports = ExplorerController;