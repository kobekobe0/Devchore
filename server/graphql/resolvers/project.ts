const ProjectModel = require('../../model/project.model')
const checkToken = require('../../utils/checkToken')
const checkProjectRole = require('../../utils/checkProjectRole')

interface Roles {
    userId: string
    role: number
    _id: string
}

module.exports = {
    Query: {
        async getUserProjects(_: null, __: null, context) {
            const user = checkToken(context)
            try {
                console.log(user._id)
                // to fix can't query members array
                return await ProjectModel.find({
                    members: { $elemMatch: { userId: user._id } },
                })
            } catch (e) {
                throw new Error('Error getting projects: ' + e)
            }
        },
        async getProject(projectId: string) {
            try {
                return await ProjectModel.findById(projectId)
            } catch (e) {
                throw new Error('Error getting project: ' + e)
            }
        },
        async getProjectMembers(
            _: null,
            { projectId }: { projectId: string },
            context
        ) {
            try {
                checkToken(context)
                const project = await ProjectModel.findById(projectId)
                return project?.members
            } catch (e) {}
        },
    },
    Mutation: {
        async createProject(_: null, { title }: { title: string }, context) {
            try {
                const user = checkToken(context)

                const project = new ProjectModel({
                    createdBy: user._id,
                    title,
                    members: [
                        {
                            userId: user._id,
                            role: 1, //ADMIN
                        },
                    ],
                    createdAt: new Date().toISOString(),
                })
                await project.save()
                return project
            } catch (e) {
                throw new Error(e)
            }
        },

        async editProject(
            _: null,
            { id, title }: { id: string; title: string },
            context
        ) {
            try {
                const user = checkToken(context)

                const project = await ProjectModel.findById(id)

                const role = checkProjectRole(project?.members, user._id)
                if (role == 2)
                    throw new Error("You're not admin of this project")

                project.title = title
                await project.save()
                return project
            } catch (e) {
                throw new Error(e)
            }
        },

        async addMember(
            _: null,
            {
                projectId,
                userId,
                role,
            }: { projectId: string; userId: string; role: string },
            context
        ) {
            try {
                const user = checkToken(context)

                const project = await ProjectModel.findById(projectId)
                const checkRole = checkProjectRole(project?.members, user._id)

                if (checkRole == 2)
                    throw new Error("You're not admin of this project")
                if (
                    project.members.find((member) => member.userId === userId)
                ) {
                    throw new Error('User is already a member of this project')
                }

                project.members.push({ userId, role })
                await project.save()
                return project
            } catch (e) {
                throw new Error(e)
            }
        },

        async removeMember(
            _: null,
            { projectId, userId }: { projectId: string; userId: string },
            context
        ) {
            try {
                const user = checkToken(context)

                const project = await ProjectModel.findById(projectId)

                const role = checkProjectRole(project.members, user._id)
                if (role == 2)
                    throw new Error("You're not admin of this project")

                const member = project.members.find(
                    (member) => member.userId == userId
                )
                if (!member) {
                    throw new Error('User is not a member of this project')
                }
                project.members = project.members.filter(
                    (member) => member.userId !== userId
                )
                await project.save()
                return project
            } catch (e) {
                throw new Error(e)
            }
        },
        async joinProject(_: null, { code }: { code: string }, context) {
            try {
                const user = checkToken(context)
                const project = await ProjectModel.findOne({ code: code })
                if (!project) throw new Error('Project not found')
                if (
                    project.members.find((member) => member.userId === user._id)
                ) {
                    throw new Error('User is already a member of this project')
                }
                project.members.push({ userId: user._id, role: 2 })
                await project.save()
                return project
            } catch (e) {
                throw new Error(e)
            }
        },

        async commentProject(
            _: null,
            { projectId, body }: { projectId: string; body: string },
            context
        ) {
            try {
                const user = checkToken(context)
                const project = await ProjectModel.findById(projectId)

                if (project) {
                    const checkRole = checkProjectRole(
                        project?.members,
                        user._id
                    )
                    project.comments.push({
                        userId: user._id,
                        body,
                        createdAt: new Date().toISOString(),
                    })
                    await project.save()
                    return project.comments[project.comments.length - 1]
                } else {
                    throw new Error('Project not found')
                }
            } catch (e) {
                throw new Error(e)
            }
        },

        async deleteProject(
            _: null,
            { projectId }: { projectId: string; userId: string },
            context
        ) {
            try {
                const user = checkToken(context)
                const project = await ProjectModel.findById(projectId)
                if (project.createdBy === user._id) {
                    await project.remove()
                    return true
                } else {
                    throw new Error('You are not the creator of this project')
                }
            } catch (e) {
                throw new Error('Error deleting project: ' + e)
            }
        },

        async deleteCommentProject(
            _: null,
            { projectId, commentId }: { projectId: string; commentId: string },
            context
        ) {
            try {
                const user = checkToken(context)
                const project = await ProjectModel.findById(projectId)
                if (project) {
                    const comment = project.comments.find(
                        (comment) => comment.id === commentId
                    )
                    if (comment.userId === user._id) {
                        project.comments = project.comments.filter(
                            (comment) => comment.id !== commentId
                        )
                        await project.save()
                        return project
                    } else {
                        throw new Error(
                            'You are not the creator of this comment'
                        )
                    }
                } else {
                    throw new Error('Project not found')
                }
            } catch (e) {
                throw new Error(e)
            }
        },
    },
}
