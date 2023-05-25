import axios from "axios";



    const jwtInterceoptor = axios.create({});
debugger

    jwtInterceoptor.interceptors.request.use((config) => {
        let tokensData = JSON.parse(localStorage.getItem("currentUser"));
        config.headers.Authorization = `bearer ${tokensData.token}`;
        return config;
      });
    
 

export default jwtInterceoptor;