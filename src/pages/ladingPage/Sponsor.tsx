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
        <div className="flex flex-col justify-center px-4 md:px-[10%] py-[10rem] mb-[5rem]">
            {/* Title */}
            <h1 className="text-center text-xl md:text-3xl lg:text-[2.6rem] font-bold mb-6">
                Why Sponsor Founders Friday?
            </h1>

            <div className="flex flex-col md:flex-row gap-[5rem]">
                <div className="w-full md:w-[40%] grid grid-cols-1 p-10 sm:grid-cols-2 gap-8 border-2 border-primaryColor  rounded-2xl shadow-2xl bg-white">
                    {circleData.map((data, index) => (
                        <div
                            key={index}
                            className={`flex flex-col justify-center p-2 items-center w-[17rem] h-[17rem] sm:w-[12rem] sm:h-[12rem] border-2 rounded-full text-center ${data.style}`}
                        >
                            <h1 className="text-2xl md:text-xl p-2 font-extrabold">{data.title}</h1>
                            <p className=" font-light md:text-sm p-2">{data.content}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-1/3 space-y-6">
                    <h3 className="text-lg md:text-xl font-bold">How To Sponsor</h3>
                    <p className="text-sm md:text-base italic font-light">
                        Ready to make an impact?
                    </p>
                    <p className="text-sm text-gray-600">
                        Fill out the form below or contact us at [contact email/phone number] to
                        learn more about how you can sponsor the next Founders Friday.
                    </p>

                    <form className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full">
                                <label className="text-sm md:text-base font-bold" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border border-[#121212] px-4 py-2 rounded-xl outline-none w-full"
                                    placeholder="Full name"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-sm md:text-base font-bold" htmlFor="company">
                                    Company (optional)
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="border border-[#121212] w-full px-4 py-2 rounded-xl outline-none "
                                    placeholder="Company name"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col w-full">
                                <label className="text-sm md:text-base font-bold" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border border-[#121212] px-4 py-2 rounded-xl outline-none w-full"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-sm md:text-base font-bold" htmlFor="phone">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="border border-[#121212] px-10 py-2 rounded-xl outline-none w-full"
                                    placeholder="Phone number"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="bg-primaryColor text-white font-medium py-3 px-6 rounded hover:bg-primaryColor-dark w-full md:w-auto"
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
