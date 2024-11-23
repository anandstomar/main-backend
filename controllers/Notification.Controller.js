class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }

    sendNotification(req, res) {
        const { userID, message } = req.body;
        const notification = this.notificationService
        .send(userID, message);
        res.json(notification);
    }

    updateStatus(req, res) {
        const { notificationID, status } = req.body;
        const updatedNotification = this.notificationService
        .updateStatus(notificationID, status);
        res.json(updatedNotification);
    }
}
export default NotificationController