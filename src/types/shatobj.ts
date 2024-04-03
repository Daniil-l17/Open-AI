interface prod {
  role: string
  content: string
}


export interface Ishat {
  model: string
  messages: prod[]
  temperature: number
  top_p: number
  max_tokens: number
  use_cache: boolean
  stream: boolean
}
