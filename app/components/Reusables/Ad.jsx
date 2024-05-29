import Image from "next/image";
import Link from "next/link";

const { Button } = require("@nextui-org/button")

const Ad = ({title, text, action, imageUrl, flexDirection}) =>{
    return(
        <>
            <section className="bg-[#164849] ">
                <div className={`md:flex justify-between ${flexDirection}`}>
                <div className="md:flex items-center md:w-3/5 w-full px-12 ">
                    <div>
                    <h2 className="text-white text-4xl font-bold py-5">{title}</h2>
                    <p className="text-white text-2xl font-bold py-5">{text}</p>
                    <div className="py-5 text-center md:text-left mb-4 md:mb-0">
                    <Link href="/contact-us" className="rounded bg-white text-[#164849] py-6 px-6 font-bold text-xl">{action}</Link>
                    </div>
                    </div>
                </div>
                   <div className="md:w-2/5 w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
                   </div>
                </div>
            </section>

            
        </>
    )
}
export default Ad;