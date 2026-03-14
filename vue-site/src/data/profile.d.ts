declare module '@/data/profile.json' {
  export interface ProfileSocial {
    github?: string
    linkedin?: string
    scholar?: string
  }
  export interface Profile {
    name: string
    location: string
    title: string
    titles: string[]
    bio: string[]
    image: string
    social: ProfileSocial
  }
  const data: Profile
  export default data
}
