import { Configuration, OpenAIApi } from "openai"

const API_URL = 'https://api.openai.com/v1/chat/completions'

const configuration = new Configuration({
  organization: process.env.VITE_ORG_ID,
  apiKey: process.env.VITE_OPEN_API_KEY,
})

const openai = new OpenAIApi(configuration)

const getMessage = ({ type, prompt, company }) => {
  const messages = {
    skills: `Con qué skills debe contar un ${prompt}?`,
    jobDescription: `Quiero una redacción atractiva para ofrecer un puesto de ${prompt}`,
    email: `Soy una empresa de reclutamiento IT, genérame un correo electrónico dirigido a ${company} para ofrecer nuestros servicios de reclutamiento para conseguir candidatos para la oferta laboral del rol de ${prompt}, en caso de interesarse, que me diga cuando tiene disponible un dia y horario para una reunión con nuestro equipo`
  }
  console.log(messages[type])
  return messages[type]
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end()

  const { prompt, type, company, optionals } = req.query

  let messageConfig = {
    type, prompt
  }

  if (type === 'email') {
    messageConfig.company = company
  }

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: getMessage(messageConfig)
      }
    ]
  })

  const content = response.data.choices[0].message.content

  return res.status(200).json({ content })
}
