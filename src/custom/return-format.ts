export default function returnFormat(
    error: string, 
    message: string, 
    data?: object
): object {
    let res: object = {error, message}
    if (data) res = {...res, data} 

    // console.log(JSON.stringify(res))

    return res
}
