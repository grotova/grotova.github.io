declare module '@/data/publications.json' {
  interface Publication {
    id: string
    date: string
    title: string
    authors: string
    venue: string
    link: string
    featured?: boolean
    award?: string
  }
  const data: Publication[]
  export default data
}
