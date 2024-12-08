
interface SponsorProps {
    title: string;
    content: string;
    style: string;
}

const Sponsor = () => {
    const circleData: SponsorProps[] = [
        {
            title: 'Networking Opportunities',
            content: 'Connect with industry leaders, founders, and potential partners.',
            style: 'bg-[#DCB6FF] border-[#A649FF]',
        },
        {
            title: 'Community Impact',
            content: 'Support the growth and development of the startup ecosystem.',
            style: 'bg-[#EDDBFF] border-[#A649FF]',
        },
        {
            title: 'Brand Association',
            content: 'Align your brand with innovation and entrepreneurial success.',
            style: 'bg-[#EDDBFF] border-[#A649FF]',
        },
        {
            title: 'Visibility',
            content: 'Gain exposure to a targeted audience of young professionals and entrepreneurs.',
            style: 'bg-[#DCB6FF] border-[#A649FF]',
        },
    ];

    return (
        <div className="flex flex-col justify-center p-10 ">
            {/* Title */}
            <h1 className="md:whitespace-nowrap text-center text-3xl md:text-[2.6rem] font-bold">
                Why Sponsor Founders Friday?
            </h1>

            <div className="p-10 md:flex gap-10">
                <div className="md:w-[80%] grid grid-cols-2 md:grid-cols-2 border-2 border-primaryColor p-6 gap-8 rounded-2xl shadow-2xl bg-white">
                    {circleData.map((data, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-2 justify-center items-center w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem] border-2 rounded-full text-center ${data.style}`}
                        >
                            <h1 className=" text-lg md:text-lg font-extrabold">{data.title}</h1>
                            <p>{data.content}</p>
                        </div>
                    ))}
                </div>
                <div className="m-10">
                    <h3 className="text-xl font-bold mb-4">How To Sponsor</h3>
                        <strong className="text-lg font-light italic">Ready to make an impact?</strong>
                    <p className="text-sm text-balance text-gray-600 mb-6">
                      Fill out the form below or contact us at
                        [contact email/phone number] to learn more about how you can sponsor
                        the next Founders Friday.
                    </p>

                    <form className="space-y-4 ">
                        <div className="flex gap-5">
                            <div className="flex flex-col">
                                <label className="text-lg font-bold" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border border-[#121212] px-8 py-4 outline-none rounded-xl"
                                    placeholder="Full name"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-lg font-bold" htmlFor="company">
                                    Company (optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="border border-[#121212] px-8 py-4 outline-none rounded-xl"
                                    placeholder="Company name"
                                />
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="flex flex-col">
                                <label className="text-lg font-bold" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border border-[#121212] px-8 py-4 outline-none rounded-xl"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-lg font-bold" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="border border-[#121212] px-8 py-4 outline-none rounded-xl"
                                    placeholder="Phone number"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className=" bg-primaryColor text-white font-medium py-4 px-8 rounded mt-4 hover:bg-primaryColor-dark"
                        >
                            Sponsor →
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
