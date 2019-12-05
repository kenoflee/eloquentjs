/* 
    Looping a triangle
    Write a loop that makes seven calls to console.log to output the following triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

const printTriangle = (num) => {
    //iterate through step
    for(let step = 1; step <= num; step++) {
        let toPrint = "";
        for(let base = 1; base <= step; base++) {
            toPrint += "#";
        }
        console.log(toPrint);
    }
}

module.exports = printTriangle;