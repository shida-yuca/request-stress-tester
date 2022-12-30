import axios from 'axios';

const URL = 'https://api.getmati.com/v2/verifications/63ade26e088492001cefd428'
const INSTANCES_QTY = 1000
// Pegar um token jwt na rota de autenticação do Postman
const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOnsiX2lkIjoiNjJkMTU4Mjk0N2I3ZDkwMDFkZDIwYzFhIiwibWVyY2hhbnQiOnsiX2lkIjoiNjJkMTU4MjkzYzMzMmMwMDFjODFjMGFmIiwib3duZXIiOiI2MmQxNTgyOWU4OWJlOTAwMWNiYjc0N2UiLCJzdWJzY3JpcHRpb25TdGF0dXMiOnsidmFsdWUiOiJhY3RpdmUiLCJ1cGRhdGVkQXQiOiIyMDIyLTA3LTIyVDEzOjAwOjAwLjAwM1oifX19LCJ1c2VyIjp7Il9pZCI6IjYyZDE1ODI5ZTg5YmU5MDAxY2JiNzQ3ZSJ9LCJzY29wZSI6InZlcmlmaWNhdGlvbl9mbG93IGlkZW50aXR5OnJlYWQgdmVyaWZpY2F0aW9uOnJlYWQiLCJpYXQiOjE2NzI0MzUyODUsImV4cCI6MTY3MjQzODg4NSwiaXNzIjoib2F1dGgyLXNlcnZlciJ9.xALktwOBy9xI-E9MX603W4HPOm4QA38Tslea1PoMkho'

const createRequestInstances = () => {
  const instances = [];
  for (let i = 0; i < INSTANCES_QTY; i++) {
    instances.push(axios.create());    
  }
  return instances;
}

const test = async (url: string) => {
  const instances = createRequestInstances();
  const requestConfig = {
    url: url,
    validateStatus: (status: number) => {
      return true
    },
    headers: { 
      'Authorization': `Bearer ${JWT_TOKEN}`
    }
  }

  const responses = await Promise.all(instances.map((instance) => instance.request(requestConfig)))

  responses.forEach((res, idx) => console.log(`Index: ${idx + 1} - Status: ${res.status}`))
}

test(URL);