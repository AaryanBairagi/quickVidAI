/** @type { import ("drizzle-kit").Config }  */
export default {
    schema:"./configs/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_heDj6WlwLRI0@ep-nameless-mode-a5593olk-pooler.us-east-2.aws.neon.tech/quick-vid-ai?sslmode=require',
    }
};