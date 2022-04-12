export const getSessiontUser = () => fetch("/user").then(response => response.json())
