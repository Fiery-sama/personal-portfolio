import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
    return (
        <div className="container mx-auto text-center px-16 py-4">
            <h2 className="text-5xl py-10 text-red-600 font-bold" id="projects">Projects</h2>
            <div className="container mx-auto flex">
                <div className="max-w-sm flex border rounded-lg shadow-sm mx-4 hover:shadow-2xl hover:shadow-red-500/30">
                    <Link href="https://github.com/Fiery-sama/DigiSamuday">
                        <Image className="rounded-t-lg" src="/digi-samuday.jpg" alt="he" width={400} height={0} />
                        <div className="p-5 ">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-500">DigiSamuday</h5>
                            <p className="mb-3 font-normal">Technologies Used: Django, React</p>
                        </div>
                    </Link>
                </div>

                <div className="max-w-sm flex border rounded-lg shadow-sm mx-4 hover:shadow-2xl hover:shadow-red-500/30">
                    <Link href="https://github.com/Fiery-sama/ct-gallery">
                        <Image className="rounded-t-lg" src="/ct-gallery.jpg" alt="he" width={400} height={0} />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-500">CollegeTips Gallery</h5>
                            <p className="mb-3 font-normal">Technologies Used: Next.js, TypeScript</p>
                        </div>
                    </Link>
                </div>

                <div className="max-w-sm flex border rounded-lg shadow-sm mx-4 hover:shadow-2xl hover:shadow-red-500/30">
                    <Link href="https://github.com/Fiery-sama/personal-portfolio">
                        <Image className="rounded-t-lg" src="/portfolio.webp" alt="he" width={400} height={0} />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-500">Portfolio</h5>
                            <p className="mb-3 font-normal">Technologies Used: Next.js, TypeScript</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
}