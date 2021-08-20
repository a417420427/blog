declare module 'gitment' {
  export interface GitmentOptions {
    id?: string
    owner: string
    repo: string
    oauth: {
      client_id: string
      client_secret: string
    }
    [key: string]: any
  }

  class Gitment {
    constructor(options: GitmentOptions)
    render(target: string | HTMLElement): void
  }

  export default Gitment
}
