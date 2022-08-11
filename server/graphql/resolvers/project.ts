const ProjectModel = require('../../model/project.model')

interface Roles {
    userId: string
    role: number
}
module.exports = {
    Query: {
        async getProjects() {
            try {
                return await ProjectModel.find()
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
    },
    Mutation: {
        async createProject(
            _: null,
            { userId, title }: { userId: string; title: string }
        ) {
            try {
                const project = new ProjectModel({
                    createdBy: userId,
                    title,
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
            { id, title }: { id: string; title: string }
        ) {
            try {
                const project = await ProjectModel.findById(id)
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
            }: { projectId: string; userId: string; role: string }
        ) {
            try {
                const project = await ProjectModel.findById(projectId)
                console.log(project)
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
            { projectId, userId }: { projectId: string; userId: string }
        ) {
            try {
                //allow if you're a admin - make a helper function to check if user is admin
                const project = await ProjectModel.findById(projectId)
                const member = project.members.find(
                    (member) => member.userId === userId
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
        async joinProject(
            _: null,
            { userId, code }: { userId: string; code: string }
        ) {
            try {
                const project = await ProjectModel.findOne({ code: code })
                if (!project) throw new Error('Project not found')
                if (
                    project.members.find((member) => member.userId === userId)
                ) {
                    throw new Error('User is already a member of this project')
                }
                project.members.push({ userId, role: 2 })
                await project.save()
                return project
            } catch (e) {
                throw new Error(e)
            }
        },

        async commentProject(
            _: null,
            {
                projectId,
                body,
                userId,
            }: { projectId: string; body: string; userId: string }
        ) {
            try {
                const project = await ProjectModel.findById(projectId)
                console.log(body)
                if (project) {
                    project.comments.push({
                        userId,
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
            { projectId, userId }: { projectId: string; userId: string }
        ) {
            //make a helper function to check if user owns something
            try {
                const project = await ProjectModel.findById(projectId)
                if (project.createdBy === userId) {
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
            {
                projectId,
                commentId,
                userId,
            }: { projectId: string; commentId: string; userId: string }
        ) {
            try {
                const project = await ProjectModel.findById(projectId)
                if (project) {
                    const comment = project.comments.find(
                        (comment) => comment.id === commentId
                    )
                    if (comment.userId === userId) {
                        project.comments = project.comments.filter(
                            (comment) => comment.id !== commentId
                        )
                        await project.save()
                        return project.comments
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
