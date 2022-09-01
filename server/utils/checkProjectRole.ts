module.exports = (memberArr: Array<Roles>, tryingUserId: string) => {
    //check if user is member of the project
    //check if user is the admin of the project
    let FOUND = 0
    for (let i = 0; i < memberArr?.length; i++) {
        if (memberArr[i].userId == tryingUserId) {
            FOUND = memberArr[i].role
            break
        }
    }
    return FOUND
}
