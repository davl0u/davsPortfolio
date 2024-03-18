import { MenuItems } from "./navbar.utils";


export default function NavBar() {
    return (
        <ul className="flex flex-row gap-5 list-none self-center md:self-end pt-5">
            {MenuItems.map((item) => (
                <li key={item.title} className=" font-normal text-[24px]">
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
}
