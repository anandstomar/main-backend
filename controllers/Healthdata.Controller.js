class HealthDataController {
    constructor(healthDataService) {
        this.healthDataService = healthDataService;
    }

    recordData(req, res) {
        const healthData = this.healthDataService.save(req.body);
        res.status(201).json(healthData);
    }

    updateData(req, res) {
        const updatedData = this.healthDataService
        .update(req.params.healthDataID, req.body);
        res.json(updatedData);
    }
}
export default HealthDataController