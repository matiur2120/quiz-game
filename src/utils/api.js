const quizeApi = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean'

export const featchQuizeFromApi=()=>{
  return fetch(quizeApi).then(res=>res.json()).then(questions=>questions.results).catch(error=> Promise.reject(error))
 
}