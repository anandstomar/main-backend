class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    registerUser(req, res) {
        try {
            const newUser = this.userService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    updateProfile(req, res) {
        const updatedUser = this.userService.updateUser(req.params.userID, req.body);
        res.json(updatedUser);
    }

    viewDiagnosisHistory(req, res) {
        const history = this.userService.getDiagnosisHistory(req.params.userID);
        res.json(history);
    }
}

export default UserController