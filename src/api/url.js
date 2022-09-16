const baseURL = process.env.NODE_ENV === 'production' ? 
'http://127.0.0.1:3002' : 'http://127.0.0.1:3001';

const HomePageUrl = '/home/page';

const FormPageUrl = '/home/form';

export {
    baseURL,
    HomePageUrl,
    FormPageUrl,
}