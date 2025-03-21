"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    async bookFlight(flightFrom, flightTo, flightDate, flightPrice, flightSeats, flightCompany) {
        const generatedId = await this.flightService.bookFlight(flightFrom, flightTo, flightDate, flightPrice, flightSeats, flightCompany);
        return { id: generatedId };
    }
    async cancelFlight(id) {
        await this.flightService.cancelFlight(id);
        return null;
    }
    async getBookingList() {
        const flight = await this.flightService.getBookingList();
        return flight;
    }
    getFlightAvailability(from, to, date, company) {
        return this.flightService.getFlightAvailability(from, to, date, company);
    }
    getUserBooking(id) {
        return this.flightService.getUserBooking(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('from')),
    __param(1, (0, common_1.Body)('to')),
    __param(2, (0, common_1.Body)('date')),
    __param(3, (0, common_1.Body)('price')),
    __param(4, (0, common_1.Body)('seats')),
    __param(5, (0, common_1.Body)('company')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number, String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "bookFlight", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "cancelFlight", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getBookingList", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Body)('from')),
    __param(1, (0, common_1.Body)('to')),
    __param(2, (0, common_1.Body)('date')),
    __param(3, (0, common_1.Body)('company')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Object)
], FlightController.prototype, "getFlightAvailability", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Body)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], FlightController.prototype, "getUserBooking", null);
FlightController = __decorate([
    (0, common_1.Controller)('flight'),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map