
const Section = ({ title, subTitle, children }) => {
    return (
        <section className="min-h-fit flex flex-col justify-start items-center  px-5 text-center">
            <p className="max-w-xl font-light text-amber-700 dark:text-yellow-200 opacity-75 mb-10 text-sm md:text-base border-y-4">{subTitle}</p>
            <h3 className="py-3 text-pink-700 dark:text-violet-300 text-3xl lg:text-5xl animate-pulse uppercase">{title}</h3>
           
            {children}
        </section>
    );
};

export default Section;