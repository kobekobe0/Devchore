module.exports = (memberArr: Array<Roles>, tryingUserId: string) => {
    const tempUser = memberArr.find((member) => (member.userId = tryingUserId))
    if (!tempUser) throw new Error("You're not member of this project")
    return tempUser.role
}
