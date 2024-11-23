class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }

    manageUsers(req, res) {
        const users = this.adminService.getAllUsers();
        res.json(users);
    }

    updateAIModel(req, res) {
        const result = this.adminService.updateModel(req.body);
        res.json(result);
    }
}
export default AdminController