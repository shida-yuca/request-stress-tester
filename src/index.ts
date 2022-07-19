import axios from 'axios';

const URL = 'http://www.staging.yuca.live/apartamentos'
const INSTANCES_QTY = 301

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
    }
  }

  const responses = await Promise.all(instances.map((instance) => instance.request(requestConfig)))

  responses.forEach((res, idx) => console.log(`Index: ${idx + 1} - Status: ${res.status}`))
}

test(URL);