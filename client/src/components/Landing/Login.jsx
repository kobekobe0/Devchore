import { BiCodeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'

const LOGIN_USER = gql`
    mutation Login($name: String!, $password: String!) {
        login(name: $name, password: $password)
    }
`

function Login() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER)

    const formChange = (e) => {
        const { name, value } = e.target
        if (name === 'name') {
            setName(value)
        } else if (name === 'password') {
            setPassword(value)
        }
    }

    const onLogin = async (e) => {
        e.preventDefault()

        const token = await loginUser({
            variables: {
                name,
                password,
            },
        })

        localStorage.setItem('token', token.data.login)
        navigate('/')
    }

    window.addEventListener('storage', () => {
        const token = localStorage.getItem('token')
        if (!token) console.log('token delted')
    })

    if (error) console.log(error.message)
    return (
        <div className="flex w-screen h-screen ">
            <section className="h-full w-full gradient-form bg-gray-300 md:h-screen">
                <div className="py-12 px-6 h-full shadow-2  xl">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="xl:w-10/12">
                            <div className="block bg-white shadow-lg rounded-lg">
                                <div className="lg:flex lg:flex-wrap g-0">
                                    <div className="lg:w-6/12 px-4 md:px-0">
                                        <div className="md:p-12 md:mx-6">
                                            <div className="text-center">
                                                <BiCodeAlt
                                                    className="mx-auto w-48"
                                                    size={60}
                                                    color="blue"
                                                />
                                                <h4 className="text-xl font-semibold mt-1 mb-12 pb-1 ">
                                                    DevChore
                                                </h4>
                                            </div>
                                            <form>
                                                {error ? (
                                                    <p className="mb-4 text-red-600">
                                                        {error.message}
                                                    </p>
                                                ) : (
                                                    <p className="mb-4">
                                                        Please login to your
                                                        account
                                                    </p>
                                                )}
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Username"
                                                        onChange={formChange}
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Password"
                                                        onChange={formChange}
                                                    />
                                                </div>
                                                <div className="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                        className="inline-block px-6 py-2.5 text-gray font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        onClick={onLogin}
                                                    >
                                                        {loading
                                                            ? 'Loading...'
                                                            : 'Login'}
                                                    </button>
                                                    <a
                                                        className="text-gray-500"
                                                        href="#!"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <div className="flex items-center justify-between pb-6">
                                                    <Link to="/register">
                                                        <p className="mb-0 mr-2 hover:border-b border-black cursor-pointer">
                                                            Don't have an
                                                            account?
                                                        </p>
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-indigo-900">
                                        <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                            <h4 className="text-xl font-semibold mb-6">
                                                Systematic collaboration
                                            </h4>
                                            <p className="text-sm">
                                                with the use of the tool, you
                                                can keep track of the tasks that
                                                are present in to your current
                                                project. Easily organization of
                                                tasks that are assigned to you,
                                                create tasks for your members,
                                                and as a admin/creator of the
                                                project, you can assign specific
                                                tasks to your members
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
