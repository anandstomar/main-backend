class User {
    constructor(userID, name, age, gender, contactInfo) {
        this.userID = userID;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.contactInfo = contactInfo;
    }

    notifications = []; // List of notifications related to the user
}