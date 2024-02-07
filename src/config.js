//  export const s3Url = import.meta.env.MODE === 'production'
//    ? import.meta.env.VITE_S3_URL 
//    : 'http://localhost:8000';

 export const apiUrl = import.meta.env.MODE === 'production'
   ? import.meta.env.VITE_SERVER_URL 
   : 'http://localhost:8000';

export const s3Url = import.meta.env.VITE_S3_URL 

// export const apiUrl = import.meta.env.VITE_SERVER_URL 