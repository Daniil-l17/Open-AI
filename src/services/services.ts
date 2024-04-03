import axios from 'axios';
import { Ishat } from '../types/shatobj';

export interface Root {
  content_type: string
  model: string
  choices: Choice[]
  tokens_used: number
}

export interface Choice {
  index: number
  finish_reason: string
  message: Message
}

export interface Message {
  role: string
  content: string
}


export const servicesAI = {
    async createAsk(obj:Ishat) {
        return axios.post<Root>('https://open-ai34.p.rapidapi.com/api/v1/chat/completions', obj, {
            headers: {
                'X-RapidAPI-Key': 'd67f04451cmsheec57786f79fa4ap1e3b5ejsn44e03e249baf',
                'X-RapidAPI-Host': 'open-ai34.p.rapidapi.com',
            },
        })
    },
};
