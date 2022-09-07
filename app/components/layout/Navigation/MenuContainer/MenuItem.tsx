import { FC } from "react";
import { IMenuItem } from "./menu.interface";
import cn from 'classnames';
import { useRouter } from "next/router";
import styles from './Menu.module.scss';
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
    const { asPath } = useRouter();
    const {link, icon, title} = item;

    return (
        <li className={cn({
            [styles.active]: asPath === link
        })}>
            <Link href={link}>
                <a>
                    <MaterialIcon name={icon} />
                    <span>{title}</span>
                </a>
            </Link>
        </li>

    );
};

export default MenuItem;