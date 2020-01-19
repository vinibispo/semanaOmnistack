const stringtoArray = (techsAsString) =>{
    return techsAsString.split(',').map(tech => tech.trim())
}
module.exports = stringtoArray