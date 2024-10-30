const express = require("express");
const router = express.Router();

const systemCollapsesController = require("../Controller/SystemCollapsesController");
const GencoEnergyGeneratedController = require("../Controller/GencoEnergyGeneratedController");
const EnergyGeneratedSourceController = require("../Controller/EnergyGeneratedSourceController");
const GencoInvoicetoNBETController = require("../Controller/GencoInvoicetoNBETController");
const NBETPaymenttoGencoController = require("../Controller/NBETPaymenttoGencoController");
const NBETOutstandingBalancetoGencoController = require("../Controller/NBETOutstandingBalancetoGencoController");
const CustomerPopulationByServiceBandsController = require("../Controller/CustomerPopulationByServiceBandsController");
const EnergySentoutController = require("../Controller/EnergySentoutController");
const TransmissionLossFactorController = require("../Controller/TransmissionLossFactorController");
const EnergyInjectedandDeliveredController = require("../Controller/EnergyInjectedandDeliveredController");
const MOInvoicetoDiscoController = require("../Controller/MOInvoicetoDiscoController");
const DiscoATCCController = require("../Controller/DiscoATCCController");
const AverageTariffController = require("../Controller/AverageTariffController");
const EnergyRecievedController = require("../Controller/EnergyRecievedController");
const EnergyBilledController = require("../Controller/EnergyBilledController");
const RevenueBilledController = require("../Controller/RevenueBilledController");
const RevenueCollectedController = require("../Controller/RevenueCollectedController");
const DiscoLoadOfftakeController = require("../Controller/DiscoLoadOfftakeController");
const DiscoNBETRemitttancesInvoiceController = require("../Controller/DiscoNBETRemitttancesInvoiceController");
const DiscoMORemittancesandInvoiceController = require("../Controller/DiscoMORemittancesandInvoiceController");
const DiscoMeteringStatusController = require("../Controller/DiscoMeteringStatusController");
const CoreInflationRateController = require("../Controller/CoreInflationRateController");
const ForeignExchangeController = require("../Controller/ForeignExchangeController");
const WorldEnergyMixController = require("../Controller/WorldEnergyMixController");
const GHGbyContinentandSectorController = require("../Controller/GHGbyContinentandSectorController");
const LowCarbonShareController = require("../Controller/LowCarbonShareController");
const DiscoCustomerNumberController = require("../Controller/DiscoCustomerNumberController");
const HourlyEnergyGeneratedController = require("../Controller/HourlyEnergyGeneratedController");
const InstalledvsAvailableCapacityController = require("../Controller/InstalledvsAvailableCapacityController");
const ShareofGenerationController = require("../Controller/ShareofGenerationController");
const MiniGrids_InstalledCapacityController = require("../Controller/MiniGrids_InstalledCapacityController");
const MiniGrids_PeopleConnectedController = require("../Controller/MiniGrids_PeopleConnectedController");
const MiniGrids_TotalInvestmentController = require("../Controller/MiniGrids_TotalInvestmentController");
const MiniGrids_ElectricityConsumedController = require("../Controller/MiniGrids_ElectricityConsumedController");
const MiniGrids_CommunitiesConnectedController = require("../Controller/MiniGrids_CommunitiesConnectedController");
const MiniGrids_NumberofCommunititesbyRegisteredProgramsController = require("../Controller/MiniGrids_NumberofCommunititesbyRegisteredProgramsController");
const MiniGrids_InstalledCapacitySourceController = require("../Controller/MiniGrids_InstalledCapacitySourceController");
const MiniGrids_YearlyElectricityConsumptionController = require("../Controller/MiniGrids_YearlyElectricityConsumptionController");
const MiniGrids_NumofConnectionsController = require("../Controller/MiniGrids_NumofConnectionsController");
const CapacityIndustryController = require("../Controller/CapacityIndustryController");

// Define router to get the logic we need for  genco capacity routes

router.get("/system-collapses", systemCollapsesController.getSystemCollapses);
router.get(
  "/Genco-Energy-Generated",
  GencoEnergyGeneratedController.getGencoEnergyGenerated
);
router.get(
  "/Energy-Generated-Source",
  EnergyGeneratedSourceController.getEnergyGeneratedSource
);
router.get(
  "/Genco-Invoice-toNBET",
  GencoInvoicetoNBETController.getGencoInvoicetoNBET
);
router.get(
  "/NBET-Payment-toGenco",
  NBETPaymenttoGencoController.getNBETPaymenttoGenco
);
router.get(
  "/NBET-Outstanding-Balance-toGenco",
  NBETOutstandingBalancetoGencoController.getNBETOustandingBalancetoGenco
);
router.get(
  "/CustomerPopulationby-Service-Bands",
  CustomerPopulationByServiceBandsController.getCustomerPopulationByServiceBands
);
router.get(
  "/Yearly-Energy-Sentout",
  EnergySentoutController.getYearlyEnergySentout
);
router.get(
  "/Monthly-Energy-Sentout",
  EnergySentoutController.getMonthlyEnergySentout
);
router.get(
  "/Transmission-Loss-Factor",
  TransmissionLossFactorController.getTransmissionLossFactor
);
router.get(
  "/Energy-Injected-and-Delivered",
  EnergyInjectedandDeliveredController.getEnergyInjectedandDelivered
);
router.get(
  "/MO-Invoice-to-DisCo",
  MOInvoicetoDiscoController.getMOInvoicetoDisco
);
router.get("/Disco-ATCC", DiscoATCCController.getDiscoATCC);
router.get("/Yearly-AVG-ATCC", DiscoATCCController.getYearlyAVGATCC);
router.get("/Yearly-Avg-Tariff", AverageTariffController.getAverageTariff);
router.get("/Yearly-Disco-Tariff", AverageTariffController.getDiscoTariff);
router.get(
  "/Yearly-Energy-Recieved",
  EnergyRecievedController.getYearlyEnergyRecieved
);
router.get(
  "/Disco-Energy-Recieved",
  EnergyRecievedController.getDiscoEnergyRecieved
);
router.get(
  "/Yearly-Energy-Billed",
  EnergyBilledController.getYearlyEnergyBilled
);
router.get("/Disco-Energy-Billed", EnergyBilledController.getDiscoEnergyBilled);
router.get(
  "/Yearly-Revenue-Billed",
  RevenueBilledController.getYearlyRevenueBilled
);
router.get(
  "/Disco-Revenue-Billed",
  RevenueBilledController.getDiscoRevenueBilled
);
router.get(
  "/Yearly-Revenue-Collected",
  RevenueCollectedController.getYearlyRevenueCollected
);
router.get(
  "/Disco-Revenue-Collected",
  RevenueCollectedController.getDiscoRevenueCollected
);
router.get(
  "/Disco-Load-Offtake",
  DiscoLoadOfftakeController.getDiscoLoadOfftake
);
router.get(
  "/Disco-NBET-Remmitances-Invoice",
  DiscoNBETRemitttancesInvoiceController.getDiscoNBETRemittancesInvoice
);
router.get(
  "/Disco-MO-Remmitances-Invoice",
  DiscoMORemittancesandInvoiceController.getDiscoRemittancesandInvoice
);
router.get(
  "/Disco-Metering-Status",
  DiscoMeteringStatusController.getDiscoMeteringStatus
);
router.get(
  "/Core-Inflation-Rate",
  CoreInflationRateController.getCoreInflationRate
);
router.get(
  "/Foreign-Exchange-Rate",
  ForeignExchangeController.getForeignExchange
);
router.get("/World-Energy-Mix", WorldEnergyMixController.getWorldEnergyMix);
router.get(
  "/GHG-by-Continent-and-Sector",
  GHGbyContinentandSectorController.getGHGbyContinentandSector
);
router.get("/Low-Carbon-Share", LowCarbonShareController.getLowCarbonShare);
router.get(
  "/Disco-Customer-Number",
  DiscoCustomerNumberController.getDiscoCustomerNumber
);
router.get(
  "/Hourly-Energy-Generated",
  HourlyEnergyGeneratedController.getHourlyEnergyGenerated
);
router.get(
  "/Installed-vs-Available-Capacity",
  InstalledvsAvailableCapacityController.getInstalledvsAvailable
);
router.get(
  "/share-of-generation-Capacity",
  ShareofGenerationController.getShareofGeneration
);
router.get(
  "/MiniGrids-Installed-Capacity",
  MiniGrids_InstalledCapacityController.getMiniGridsInstalledCapacity
);
router.get(
  "/MiniGrids-People-Connected",
  MiniGrids_PeopleConnectedController.getMiniGridsPeopleConnected
);
router.get(
  "/MiniGrids-Total-Investment",
  MiniGrids_TotalInvestmentController.getMiniGridsTotalInvestment
);
router.get(
  "/MiniGrids-Electricity-Consumed",
  MiniGrids_ElectricityConsumedController.getMiniGridsElectricityConsumed
);
router.get(
  "/MiniGrids-Communities-Connected",
  MiniGrids_CommunitiesConnectedController.getMiniGridsCommunitiesConnected
);
router.get(
  "/MiniGrids-Num-of-Communities-ByRegistered-Programs",
  MiniGrids_NumberofCommunititesbyRegisteredProgramsController.getMiniGridsNumofCommunitiesbyRegPrograms
);
router.get(
  "/MiniGrids-Installed-Capacity-Source",
  MiniGrids_InstalledCapacitySourceController.getMiniGridsInstalledCapacitySource
);
router.get(
  "/MiniGrids-Yearly-Electricity-Consumption",
  MiniGrids_YearlyElectricityConsumptionController.getMiniGridsYearlyEnergyConsumption
);
router.get(
  "/MiniGrids-Number-of-Connections",
  MiniGrids_NumofConnectionsController.getMiniGridsNumofConnections
);
router.get(
  "/Capacity-Industry-Percentage",
  CapacityIndustryController.getCapacityIndustry
);

module.exports = router; // Make sure you're exporting the router
