const displayData = n => {
    result.value += n
}

const calc = () => {
    result.value = eval(result.value)
}

const backsp = () => {
    result.value = result.value.slice(0,-1)
}
const allCLR = () =>{
    result.value = ""
}