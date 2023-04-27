import { create } from 'zustand'

export const useConversationStore = create(set => ({
    response: null,
    isReplying: false,
    generateCompletion: async ({ prompt, type, company }) => {
        set({
            isReplying: true
        })
        const response = await fetch(`/api/prompt?prompt=${prompt}&type=${type}&company=${company}`, {
            method: 'GET',
            'Content-Type': 'application/json',
        })  
        const { content } = await response.json()
        console.log(content)
        set({
            isReplying: false,
            response: content
        })
    }
}))