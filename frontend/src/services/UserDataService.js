import http from "../http-common";

class UserDataService {
    getUser(data) {
        console.log("&&&&&&&&&&&&&&&&&&");
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            auth: {
                username: "root",
                password: "123"
            }
        };
        let x = JSON.stringify(data);
        console.log("&&& " + x);
        return http.post("user/login", JSON.stringify(data), config);
    }


    create(data) {
        console.log("username: " + data.username + "password: " + data.password);
        return http.post("user/login", data);
    }


}

export default new UserDataService();