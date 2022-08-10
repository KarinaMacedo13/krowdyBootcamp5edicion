//Se apagan después de 20 segundos, son procesos paralelos que se dan en el mismo momento para optimizar la asíncronía, los service_worker no tienen acceso al DOM
//Cada vez que se hace click ejecuta dichos parámetros(tab: es la pestaña en la que se encuentra actualmente)
chrome.action.onClicked.addListener((tab)=>{
  console.log('click')
  //las opciones son:
  const options = {
    //opciones de la documentación para crear extensiones de chrome
    target: { tabId: tab.id },
    //archivos js que se ejecturán en esa página web según la página web que se encuentra actualmente
    files: ["scripts/scrapper.js"]
  }
  //ejecuta una función de chrome llamada scripting, que permite inyectar/ejecutar scripts/scrapper.js para ello se le manda un objeto de opciones
  chrome.scripting.executeScript(options)
})