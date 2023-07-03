import Section from "./Common/Section";
import one from '../assets/service/html.png'
import two from '../assets/service/css.png'
import three from '../assets/service/bootstrap.png'
import four from '../assets/service/tailwind.png'
import five from '../assets/service/javascript.png'
import six from '../assets/service/react.png'
import seven from '../assets/service/axios.png'
import eight from '../assets/service/node.png'
import nine from '../assets/service/express.png'
import ten from '../assets/service/mongodb.png'
import eleven  from '../assets/service/jwt.png'
import twelve  from '../assets/service/stripe.png'

const Experience = () => {
    const experience = [
        {
            id: 1,
            image: one,
            title: 'HTML',
            style:'shadow-orange-500'
        },
        {
            id: 2,
            image: two,
            title: 'CSS',
            style:'shadow-blue-500'
        },
        {
            id: 3,
            image: three,
            title: 'BOOTSTRAP',
            style:'shadow-violet-500'
        },
        {
            id: 4,
            image: four,
            title: 'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id: 5,
            image: five,
            title: 'JAVASCRIPT',
            style:'shadow-yellow-500'
        },
        {
            id: 6,
            image: six,
            title: 'REACT',
            style:'shadow-cyan-500'
        },
        {
            id: 7,
            image: seven,
            title: 'AXIOS',
            style:'shadow-violet-600'
        },
        {
            id: 8,
            image: eight,
            title: 'NODE.JS',
            style:'shadow-lime-600'
        },
        {
            id: 9,
            image: nine,
            title: 'EXPRESS.JS',
            style:'shadow-yellow-400'
        },
        {
            id: 10,
            image: ten,
            title: 'MONGO DB',
            style:'shadow-green-700'
        },
        {
            id: 11,
            image:eleven ,
            title: 'JWT',
            style:'shadow-red-500'
        },
        {
            id: 12,
            image: twelve,
            title: 'STRIPE',
            style:'shadow-blue-700'
        },
    ];

    return (
        <Section className="mt-8" title="Experience 🎓">
                <p className="max-w-xl font-light text-amber-700 dark:text-yellow-200 opacity-75 mb-10 text-sm md:text-base border-y-4">Here are all the services that I provide to my clients. I hope I offer the service you are looking for. If you do not find something you are looking for, then please send me an email.</p>
            <div className=" w-full grid gap-10 sm:grid-cols-3 py-8 px-12 sm:px-0 lg:grid-cols-3">
                
                {experience.map(({ id, image, title,style }) => (
                    <div className={`shadow-md hover:scale-105 duration-500 ${style}`} key={id} data-aos="fade-right">
                        <img src={image} alt="" className="w-20 mx-auto" />
                        <h3 className="mt-4">{title}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
