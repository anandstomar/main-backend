class XRayDataController {
    constructor(xrayDataService) {
        this.xrayDataService = xrayDataService;
    }

    recordXRay(req, res) {
        const xrayData = this.xrayDataService.save(req.body);
        res.status(201).json(xrayData);
    }

    updateXRayData(req, res) {
        const updatedData = this.xrayDataService.update(req.params.xrayDataID, req.body);
        res.json(updatedData);
    }
}
export default XRayDataController