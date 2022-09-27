export const Setter = (event,set,name) =>{
  set(event.target.value)
    window.localStorage.setItem(name,event.target.value)
}