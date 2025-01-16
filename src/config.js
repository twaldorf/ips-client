//  export const s3Url = import.meta.env.MODE === 'production'
//    ? import.meta.env.VITE_S3_URL 
//    : 'http://localhost:8000';

 export const apiUrl = import.meta.env.VITE_VERCEL_ENV === 'production'
   ? import.meta.env.VITE_SERVER_URL 
   : 'http://localhost:8000';

export const s3Url = import.meta.env.VITE_S3_URL 

export const aliases = {
  designer: "Designer",
  category: "Category",
  desc: "Description",
  difficulty: "Difficulty",
  fabric_recommendations: "Fabric Recommendations",
  image_name: undefined,
  notions: "Required Notions",
  pattern_tags: "Pattern Product Tags",
  price: "Price",
  style_tags: "Garment Style Tags"
}

// export const apiUrl = import.meta.env.VITE_SERVER_URL 