class DiagnosisController {
    constructor(diagnosisService) {
        this.diagnosisService = diagnosisService;
    }

    saveDiagnosis(req, res) {
        const diagnosis = this.diagnosisService.save(req.body);
        res.status(201).json(diagnosis);
    }

    getHistory(req, res) {
        const history = this.diagnosisService.getHistory(req.params.userID);
        res.json(history);
    }
}
export default DiagnosisController