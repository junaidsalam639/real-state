function NewsLetter() {
    return (
        <>
            <section className="py-16 news-gradient">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-gray-400 mb-4">No Spam Promise</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">SUBSCRIBE TO NEWS LETTER !</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Discover ways to increase your homes value and get listed. No Spam.
                    </p>

                    <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="px-4 py-2 bg-[#2a1f45] border border-[#3a2a5a] rounded focus:outline-none focus:ring-0 flex-grow"
                        />
                        <button className="px-6 py-2 bg-black text-white cursor-pointer font-medium rounded">
                            Submit
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-4">You will be able to unsubscribe at any time.</p>
                </div>
            </section>
        </>
    )
}

export default NewsLetter