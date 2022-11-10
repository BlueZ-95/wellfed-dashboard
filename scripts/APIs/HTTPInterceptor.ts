export class HTTPInterceptor{
    
    //customWindow :  Window = window;

    private constructor( public customWindow : Window = window ){
        const { fetch: originalFetch } = this.customWindow;

        this.customWindow.fetch = async (...args) => {
            let [resource, config ] = args;
        
            // request interceptor starts
            resource = 'https://jsonplaceholder.typicode.com/todos/2';
            // request interceptor ends
        
            const response = await originalFetch(resource, config);
        
            // response interceptor here
            return response;
        };
        
    }

    static instance : HTTPInterceptor = new HTTPInterceptor();


}