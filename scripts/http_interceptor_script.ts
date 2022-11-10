//Monkey Patching Fetch Request to intercept it


  export default function CreateHTTPInterceptor(){
    const { fetch: originalFetch } = window;

    console.log("get window");

    window.fetch = async (...args) => {
      let [resource, config] = args;

      // config.headers = {
      //     "Authorization": `Bearer ${userDetails.token}`,
      //   },

      //console.log(_userDetails.token);
      

     config.headers =  { "Content-Type" : "application/json"}

      const response = await originalFetch(resource, config);
      console.log("After original fetch");
      

      return response;
    };
  }

