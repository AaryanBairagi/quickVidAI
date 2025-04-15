import { clerkMiddleware , createRouteMatcher } from "@clerk/nextjs/server";

//Protecting the /dashboard/* routes
const isProtectedRoute = createRouteMatcher(['dashboard(.*)'])

//If a request comes to /dashboard/* then call for authentication
export default clerkMiddleware(async(auth,req)=>{
    if(isProtectedRoute(req)){
        await auth().protect()
    }
})

//Regex matcher that defines what routes should go through the middleware
export const config = {
    matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    ],
};