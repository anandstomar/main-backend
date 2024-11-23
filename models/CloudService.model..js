class CloudService {
    constructor(cloudServiceID, status) {
        this.cloudServiceID = cloudServiceID;
        this.status = status;
        this.deployedModels = [];
    }
}