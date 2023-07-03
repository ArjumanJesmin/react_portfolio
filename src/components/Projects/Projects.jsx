
import { Scrollbars } from 'rc-scrollbars';
import img from '../../assets/projects/project1.png'
import imgTwo from '../../assets/projects/project2.png'
import imgThree from '../../assets/projects/project3.png'
import Section from '../Common/Section';
import { Link } from 'react-router-dom';
import { BiLogoFirebase } from 'react-icons/Bi';
import { BsGithub } from 'react-icons/Bs';
const Projects = () => {
    return (
        <div>
            <Section title="My Projects" />
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center md:gap-4 mt-4'>
                {/* project-one */}
                <div className='border-2 p-3 m-2 rounded-lg'>
                    <Scrollbars style={{ width: '100%', height: 300 }}>
                        <img src={img} alt="Your Image" />
                    </Scrollbars>
                    <div>
                        <h2 className='text-xl font-semibold dark:text-indigo-200 text-rose-600  my-4'>Crown Art (Summer Camp School) </h2>
                        <p className='text-start px-2'>
                            <strong>  Key Features:</strong>
                            <br />
                            • Admin, Instructor, Student and user management with secure API
                            <br />
                            • Instructors can upload courses and students can enroll with payment.
                            <br />
                            • When the admin login with admin account he can view the ticket and reply to it.
                        </p>
                    </div>
                    <dtv className="flex justify-center gap-5 py-4">
                        <Link to="https://akibuki-school.web.app/">
                            <BiLogoFirebase className='text-amber-500 text-3xl hover:text-rose-500' />Live Link
                        </Link>
                        <Link to="https://github.com/ArjumanJesmin/drawing-school-client">
                            <BsGithub className='text-slate-900 dark:text-slate-100 text-3xl hover:text-rose-500' /> Client
                        </Link>
                        <Link to="https://github.com/ArjumanJesmin/drawing-school-server">
                            <BsGithub className='text-slate-900 dark:text-slate-100 text-3xl hover:text-rose-500' /> Server
                        </Link>
                    </dtv>
                </div>

                {/* project-\two */}
                <div className='border-2 p-3 m-2 rounded-lg'>
                    <Scrollbars style={{ width: '100%', height: 300 }}>
                        <img src={imgTwo} alt="Your Image" />
                    </Scrollbars>
                    <div>
                        <h2 className='text-xl font-semibold dark:text-indigo-200 text-rose-600  my-4'> Beauty of Dolls (full-stack Toy Marketplace website) </h2>
                        <p className='text-start px-2'>
                            <strong>  Key Features:</strong>
                            <br />
                            • User can see some toy by category.
                            <br />
                            • If user logged in they can add new toy from Add a toy.
                            <br />
                            • If user logged in and if they added toy then they can see just them toy on my toys.
                            <br />
                            • All of the new toy what user will add be stored in a database and then sorted in descending.
                        </p>
                    </div>
                    <dtv className="flex justify-center gap-5 py-4">
                        <Link to="https://baby-doll-845d5.web.app/">
                            <BiLogoFirebase className='text-amber-500 text-3xl hover:text-rose-500 ' />Live Link
                        </Link>
                        <Link to="https://github.com/ArjumanJesmin/toy-marketplace">
                            <BsGithub className='text-slate-900 dark:text-slate-100 text-3xl hover:text-rose-500' /> Client
                        </Link>
                        <Link to="https://github.com/ArjumanJesmin/toy-marketplace-server-side">
                            <BsGithub className='text-slate-900 dark:text-slate-100 text-3xl hover:text-rose-500 ' /> Server
                        </Link>
                    </dtv>
                </div>

                {/* project-three */}
                <div className='border-2 p-3 m-2 rounded-lg'>
                    <Scrollbars style={{ width: '100%', height: 300 }}>
                        <img src={imgThree} alt="Your Image" />
                    </Scrollbars>
                    <div>
                        <h2 className='text-xl font-semibold dark:text-indigo-200 text-rose-600 my-4'>Chef recipes(Delicious Italian Food) </h2>
                        <p className='text-start px-2'>
                            <strong>  Key Features:</strong>
                            <br />
                            • Anyone can see the best Chef in the world.
                            <br />
                            • User can View Recipes when they are logged in.
                            <br />
                            • Users can add a chef if they are logged in.
                        </p>
                    </div>
                    <dtv className="flex justify-center gap-5 py-4">
                        <Link to="https://chef-recipe-hunter-d5618.web.app/">
                            <BiLogoFirebase className='text-amber-500 text-3xl hover:text-rose-500' />Live Link
                        </Link>
                        <Link to="https://github.com/ArjumanJesmin/food-hunter-client">
                            <BsGithub className='dark:text-slate-100 text-slate-900 text-3xl hover:text-rose-500' /> Client
                        </Link>
                        <Link to="https://github.com/ArjumanJesmin/food-hunter-server">
                            <BsGithub className='dark:text-slate-100 text-slate-900 text-3xl hover:text-rose-500' /> Server
                        </Link>
                    </dtv>
                </div>
            </div>
        </div>

        


    );
};

export default Projects;