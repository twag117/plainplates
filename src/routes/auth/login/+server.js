import { redirect } from "@sveltejs/kit"

export async function GET({ platform, url }) {
  const callbackUrl = `${url.origin}/auth/callback`
  
  const googleUrl= new URL('https://accounts.google.com/o/oauth2/v2/auth')
  googleUrl.searchParams.set('client_id', platform.env.GOOGLE_CLIENT_ID)
  googleUrl.searchParams.set('redirect_uri', callbackUrl)
  googleUrl.searchParams.set('response_type', 'code')
  googleUrl.searchParams.set('scope', 'openid email profile')
  console.log('---callbackUrl---')
  console.log(callbackUrl)
  console.log('---END callbackUrl---')
  console.log('---googleUrl---')
  console.log(googleUrl)
  console.log('---END googleUrl---')
  redirect(302, googleUrl.toString())
}