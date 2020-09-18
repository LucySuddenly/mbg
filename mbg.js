
const MBG = () => {
  let collection = document.getElementsByClassName('c-message__sender c-message_kit__sender')
  let array = [...collection]
  
  let deleteme = array.filter(e => {
    return e.getAttribute('data-stringify-text').includes("Katie")
  })
  
  let newCollection = deleteme.map(e => {
    return e.parentElement.parentElement
  })
  
  newCollection.forEach(e => {
    e.setAttribute('style', 'display: none;')
  })
  console.log("IT'S WORKING")
}
console.log("RUNNING")

setInterval(MBG, 500)